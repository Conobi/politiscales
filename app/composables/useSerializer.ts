interface CompressedData {
  axis: number
  score: number | null
}

export const useSerializer = () => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmno0123456789pqrstuvwxyz-.'
  const NaN_VALUE = 101 // Using 101 as our special NaN/null indicator

  /**
   * Encodes a axis and score into a 2-character string
   * @param axis Number between 0 and 31
   * @param score Number between 0 and 100, or null/NaN
   * @returns A 2-character string encoding both values
   * @throws {Error} If inputs are out of range
   */
  const encode = (axis: number, score: number | null | undefined): string => {
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

    const char1 = chars[combined >> 6]
    const char2 = chars[combined & 0b111111]

    return char1 + char2
  }

  /**
   * Decodes a 2-character string back into axis and score values
   * @param str A 2-character string previously created by encode()
   * @returns Object containing axis and score values (score can be null)
   * @throws {Error} If input string is invalid
   */
  const decode = (str: string): CompressedData => {
    if (str.length !== 2) {
      throw new Error('Invalid encoded string length')
    }

    const val1 = chars.indexOf(str[0])
    const val2 = chars.indexOf(str[1])

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

  /**
   * Validates if a string is a valid encoded value
   * @param str String to validate
   * @returns boolean indicating if the string is valid
   */
  const isValid = (str: string): boolean => {
    if (str.length !== 2) return false

    const val1 = chars.indexOf(str[0])
    const val2 = chars.indexOf(str[1])

    if (val1 === -1 || val2 === -1) return false

    const combined = (val1 << 6) | val2
    const score = combined & 0b1111111

    return score === NaN_VALUE || score <= 100
  }

  return {
    encode,
    decode,
    isValid
  }
}
