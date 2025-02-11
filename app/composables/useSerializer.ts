interface CompressedData {
  axis: number
  score: number | null
}

export const useSerializer = () => {
  const chars =
    'tSEU1dhNY5GRcVC0mXexwsDbBlPjk2IQ86Krnu9J37HzOgf4oZqyap.-FWvTAiML'
  const NaN_VALUE = 101 // Using 101 as our special NaN/null indicator

  /**
   * Encodes a axis and score into a 2-character string
   * @param axis Number between 0 and 31
   * @param score Number between 0 and 100, or null/NaN
   * @returns A 2-character string encoding both values
   * @throws {Error} If inputs are out of range
   */
  const encodeAxis = (
    axis: number,
    score: number | null | undefined
  ): string => {
    if (axis < 0 || axis > 31) {
      throw new Error('axis must be between 0 and 31')
    }

    const scoreValue =
      isNaN(score as number) || score === null || score === undefined
        ? NaN_VALUE
        : score

    if (scoreValue !== NaN_VALUE && (scoreValue < 0 || scoreValue > 100)) {
      throw new Error('score must be between 0 and 100')
    }

    const axisBits = axis & 0b11111
    const scoreBits = scoreValue & 0b1111111
    const combined = (axisBits << 7) | scoreBits

    const char1 = chars[combined >> 6] as string
    const char2 = chars[combined & 0b111111] as string

    return char1 + char2
  }

  /**
   * Decodes a 2-character string back into axis and score values
   * @param str A 2-character string previously created by encode()
   * @returns Object containing axis and score values (score can be null)
   * @throws {Error} If input string is invalid
   */
  const decodeAxis = (str: string): CompressedData => {
    if (str.length !== 2) {
      throw new Error('Invalid encoded string length')
    }

    const val1 = chars.indexOf(str[0] as string)
    const val2 = chars.indexOf(str[1] as string)

    if (val1 === -1 || val2 === -1) {
      throw new Error('Invalid characters in encoded string')
    }

    const combined = (val1 << 6) | val2
    const axis = (combined >> 7) & 0b11111
    const rawscore = combined & 0b1111111

    return {
      axis,
      score: rawscore === NaN_VALUE ? null : rawscore
    }
  }

  const encodeResultsStr = (axisValues: AxisValues): string => {
    let finalStr = ''

    Object.entries(axisValues).forEach(([axis, score]) => {
      const axisIndex = Object.keys(axes).indexOf(axis)

      finalStr += encodeAxis(axisIndex, score)
    })

    return finalStr
  }

  const decodeResultsStr = (str: string): AxisValues | null => {
    try {
      const axisValues: AxisValues = {}
      const axesKeys = Object.keys(axes)
      if (!str || str.length % 2 !== 0) return null
      for (let i = 0; i < str.length; i += 2) {
        const axisValue = decodeAxis(str.slice(i, i + 2))
        axisValues[axesKeys[axisValue.axis] as string] = axisValue.score
      }
      return axisValues
    } catch (e) {
      return null
    }
  }

  const decodeLegacyResultsStr = (str: string): AxisValues | null => {
    try {
      const decoded = atob(str)
      const pairs = decoded.split('&')

      const pairsDict: Record<string, string> = pairs.reduce((acc, pair) => {
        const [key, value] = pair.split('=')
        if (!key || !value) return acc
        return { ...acc, [key]: value }
      }, {})

      const retAxesValues: AxisValues = {}

      // We convert the legacy keys to the new keys (e.g "j0" to "rehabilitative_justice")
      Object.keys(axes).forEach((key) => {
        const axis = axes[key] as Axis
        const value = parseInt(pairsDict[axis.legacyKey] as string)
        if (value) {
          retAxesValues[key] = value
        } else if (axis.legacyKey && axis.pair) retAxesValues[key] = 0
      })

      return retAxesValues
    } catch (e) {
      return null
    }
  }

  return {
    encodeResultsStr,
    decodeResultsStr,
    decodeLegacyResultsStr
  }
}
