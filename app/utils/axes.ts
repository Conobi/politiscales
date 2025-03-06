export interface UnpairedAxis {
  legacyKey?: string
}

export interface PairedAxis {
  pair?: string
  legacyKey?: string
  color?: string
}

export const pairedAxes = {
  constructivism: {
    pair: 'identity',
    legacyKey: 'c0',
    color: '#a425b6'
  },
  essentialism: {
    pair: 'identity',
    legacyKey: 'c1',
    color: '#34b634'
  },
  rehabilitative_justice: {
    pair: 'justice',
    legacyKey: 'j0',
    color: '#14bee1'
  },
  punitive_justice: {
    pair: 'justice',
    legacyKey: 'j1',
    color: '#e6cc27'
  },
  progressive: {
    pair: 'culture',
    legacyKey: 's0',
    color: '#850083'
  },
  conservative: {
    pair: 'culture',
    legacyKey: 's1',
    color: '#970000'
  },
  internationalism: {
    pair: 'globalism',
    legacyKey: 'b0',
    color: '#3e6ffd'
  },
  nationalism: {
    pair: 'globalism',
    legacyKey: 'b1',
    color: '#ff8500'
  },
  communism: {
    pair: 'economy',
    legacyKey: 'p0',
    color: '#cc0000'
  },
  capitalism: {
    pair: 'economy',
    legacyKey: 'p1',
    color: '#ffb800'
  },
  regulation: {
    pair: 'markets',
    legacyKey: 'm0',
    color: '#269B32'
  },
  laissez_faire: {
    pair: 'markets',
    legacyKey: 'm1',
    color: '#6608C0'
  },
  ecology: {
    pair: 'environment',
    legacyKey: 'e0',
    color: '#a0e90d'
  },
  production: {
    pair: 'environment',
    legacyKey: 'e1',
    color: '#4deae9'
  },
  revolution: {
    pair: 'radicalism',
    legacyKey: 't0',
    color: '#eb1a66'
  },
  reform: {
    pair: 'radicalism',
    legacyKey: 't1',
    color: '#0ee4c8'
  },
  materialism: {
    pair: 'perspective',
    color: '#ff00ff'
  },
  idealism: {
    pair: 'perspective',
    color: '#00ffff'
  },
  sustainability: {
    pair: 'development',
    color: '#00ff00'
  },
  growth_at_all_costs: {
    pair: 'development',
    color: '#ff0000'
  }
} as const satisfies Record<string, PairedAxis>

export type PairedAxesKey = keyof typeof pairedAxes
export const pairedAxesKeys = Object.keys(pairedAxes) as PairedAxesKey[]

export interface PairedAxisByPair {
  name: string
  left: PairedAxesKey
  right: PairedAxesKey
}

export const pairedAxesByPair = Object.entries(pairedAxes).reduce(
  (acc, [key, value]) => {
    const pairIndex = acc.findIndex((pair) => pair.name === value.pair)
    const pair =
      pairIndex !== -1
        ? acc[pairIndex]!
        : {
            name: value.pair,
            left: key as PairedAxesKey,
            right: key as PairedAxesKey
          }

    // This makes it so the first item found is 'left', and the second is 'right'
    if (pairIndex === -1) {
      acc.push(pair)
    } else {
      pair.right = key as PairedAxesKey
    }

    return acc
  },
  [] as PairedAxisByPair[]
)

export const unpairedAxes = {
  anarchism: {
    legacyKey: 'anar'
  },
  pragmatism: {
    legacyKey: 'prag'
  },
  feminism: {
    legacyKey: 'femi'
  },
  complotism: {
    legacyKey: 'comp'
  },
  veganism: {
    legacyKey: 'vega'
  },
  monarchism: {
    legacyKey: 'mona'
  },
  religion: {
    legacyKey: 'reli'
  }
} satisfies Record<string, UnpairedAxis>

export type UnpairedAxesKey = keyof typeof unpairedAxes
export const unpairedAxesKeys = Object.keys(unpairedAxes) as UnpairedAxesKey[]

export const axes = { ...pairedAxes, ...unpairedAxes }
export const axesKeys = Object.keys(axes) as (PairedAxesKey | UnpairedAxesKey)[]

export interface AxisValues {
  [key: string]: number | null
}

export const charSlogan = {
  internationalism: 'humanity',
  nationalism: 'fatherland',
  constructivism: 'equality',
  ecology: 'ecology',
  rehabilitative_justice: 'justice',
  punitive_justice: 'order',
  laissez_faire: 'liberty',
  communism: 'socialism',
  capitalism: 'work',
  conservative: 'family',
  revolution: 'revolution'
}

export const badgeThreshold = {
  anarchism: 0.9,
  pragmatism: 0.5,
  feminism: 0.9,
  complotism: 0.9,
  veganism: 0.5,
  religion: 0.5,
  monarchism: 0.5
}
