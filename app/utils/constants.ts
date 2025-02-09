export const axes = {
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
  },
  anarchism: {
    legacyKey: 'anar',
    color: null
  },
  pragmatism: {
    legacyKey: 'prag',
    color: null
  },
  feminism: {
    legacyKey: 'femi',
    color: null
  },
  complotism: {
    legacyKey: 'compl',
    color: null
  },
  veganism: {
    legacyKey: 'vega',
    color: null
  },
  monarchism: {
    legacyKey: 'mona',
    color: null
  },
  religion: {
    legacyKey: 'reli',
    color: null
  }
}

export interface AxisValues {
  [key: string]: number
}

interface FlagShape {
  numColors: number
  shapes: Array<number[]>
  symbol: number[]
  cond: {
    [key: string]: {
      vmin: number
      vmax: number
    }
  }
}

export const flagShapes: FlagShape[] = [
  /*
  ****************************************************************************
  3C, REVO, JREH
  ****************************************************************************
  */
  // Révo, Int++
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 6, 0, 1 / 6],
      [2, 0, 1 / 6, 1, 1 / 6, 1, 2 / 6, 0, 2 / 6],
      [1, 0, 2 / 6, 1, 2 / 6, 1, 3 / 6, 0, 3 / 6],
      [2, 0, 3 / 6, 1, 3 / 6, 1, 4 / 6, 0, 4 / 6],
      [1, 0, 4 / 6, 1, 4 / 6, 1, 5 / 6, 0, 5 / 6],
      [2, 0, 5 / 6, 1, 5 / 6, 1, 1, 0, 1],
      [0, 0, 0, 0.5, 0.5, 0, 1]
    ],
    symbol: [0.2, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.66,
        vmax: 1
      }
    }
  },
  // Révo, Int+
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 5, 0, 1 / 5],
      [2, 0, 1 / 5, 1, 1 / 5, 1, 2 / 5, 0, 2 / 5],
      [1, 0, 2 / 5, 1, 2 / 5, 1, 3 / 5, 0, 3 / 5],
      [2, 0, 3 / 5, 1, 3 / 5, 1, 4 / 5, 0, 4 / 5],
      [1, 0, 4 / 5, 1, 4 / 5, 1, 1, 0, 1],
      [0, 0, 0, 0.5, 0.5, 0, 1]
    ],
    symbol: [0.2, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.33,
        vmax: 0.66
      }
    }
  },
  // Révo
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 4, 0, 1 / 4],
      [2, 0, 1 / 4, 1, 1 / 4, 1, 2 / 4, 0, 2 / 4],
      [1, 0, 2 / 4, 1, 2 / 4, 1, 3 / 4, 0, 3 / 4],
      [2, 0, 3 / 4, 1, 3 / 4, 1, 1, 0, 1],
      [0, 0, 0, 0.5, 0.5, 0, 1]
    ],
    symbol: [0.2, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0,
        vmax: 0.33
      },
      internationalism: {
        vmin: 0,
        vmax: 0.33
      }
    }
  },
  // Révo, Nat+
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 3, 0, 1 / 3],
      [2, 0, 1 / 3, 1, 1 / 3, 1, 2 / 3, 0, 2 / 3],
      [1, 0, 2 / 3, 1, 2 / 3, 1, 1, 0, 1],
      [0, 0, 0, 0.5, 0.5, 0, 1]
    ],
    symbol: [0.2, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.33,
        vmax: 0.66
      }
    }
  },
  // Révo, Nat++
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 2, 0, 1 / 2],
      [2, 0, 1 / 2, 1, 1 / 2, 1, 1, 0, 1],
      [0, 0, 0, 0.5, 0.5, 0, 1]
    ],
    symbol: [0.2, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.66,
        vmax: 1
      }
    }
  },
  /*
  ****************************************************************************
  3C, REFO, JPUN
  ****************************************************************************
  */
  // Réfo, Int++
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 8, 0, 1 / 8],
      [2, 0, 1 / 8, 1, 1 / 8, 1, 2 / 8, 0, 2 / 8],
      [1, 0, 2 / 8, 1, 2 / 8, 1, 3 / 8, 0, 3 / 8],
      [2, 0, 3 / 8, 1, 3 / 8, 1, 4 / 8, 0, 4 / 8],
      [1, 0, 4 / 8, 1, 4 / 8, 1, 5 / 8, 0, 5 / 8],
      [2, 0, 5 / 8, 1, 5 / 8, 1, 6 / 8, 0, 6 / 8],
      [1, 0, 6 / 8, 1, 6 / 8, 1, 7 / 8, 0, 7 / 8],
      [2, 0, 7 / 8, 1, 7 / 8, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1 / 2, 0, 1 / 2]
    ],
    symbol: [1 / 6, 1 / 4, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.5,
        vmax: 1
      }
    }
  },
  // Réfo, Int+
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 6, 0, 1 / 6],
      [2, 0, 1 / 6, 1, 1 / 6, 1, 2 / 6, 0, 2 / 6],
      [1, 0, 2 / 6, 1, 2 / 6, 1, 3 / 6, 0, 3 / 6],
      [2, 0, 3 / 6, 1, 3 / 6, 1, 4 / 6, 0, 4 / 6],
      [1, 0, 4 / 6, 1, 4 / 6, 1, 5 / 6, 0, 5 / 6],
      [2, 0, 5 / 6, 1, 5 / 6, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1 / 2, 0, 1 / 2]
    ],
    symbol: [1 / 6, 1 / 4, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0,
        vmax: 0.5
      }
    }
  },
  // Réfo, Nat+
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 4, 0, 1 / 4],
      [2, 0, 1 / 4, 1, 1 / 4, 1, 2 / 4, 0, 2 / 4],
      [1, 0, 2 / 4, 1, 2 / 4, 1, 3 / 4, 0, 3 / 4],
      [2, 0, 3 / 4, 1, 3 / 4, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1 / 2, 0, 1 / 2]
    ],
    symbol: [1 / 6, 1 / 4, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0,
        vmax: 0.5
      }
    }
  },
  // Réfo, Nat++
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 2, 0, 1 / 2],
      [2, 0, 1 / 2, 1, 1 / 2, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1 / 2, 0, 1 / 2]
    ],
    symbol: [1 / 6, 1 / 4, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.5,
        vmax: 1
      }
    }
  },
  /*
  ****************************************************************************
  3C, REVO, JPUN
  ****************************************************************************
  */
  // JPun, Int++
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 8, 0, 1 / 8],
      [2, 0, 1 / 8, 1, 1 / 8, 1, 2 / 8, 0, 2 / 8],
      [1, 0, 2 / 8, 1, 2 / 8, 1, 3 / 8, 0, 3 / 8],
      [2, 0, 3 / 8, 1, 3 / 8, 1, 4 / 8, 0, 4 / 8],
      [1, 0, 4 / 8, 1, 4 / 8, 1, 5 / 8, 0, 5 / 8],
      [2, 0, 5 / 8, 1, 5 / 8, 1, 6 / 8, 0, 6 / 8],
      [1, 0, 6 / 8, 1, 6 / 8, 1, 7 / 8, 0, 7 / 8],
      [2, 0, 7 / 8, 1, 7 / 8, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1, 0, 1]
    ],
    symbol: [1 / 6, 1 / 2, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.6,
        vmax: 1
      }
    }
  },
  // JPun, Int+
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 6, 0, 1 / 6],
      [2, 0, 1 / 6, 1, 1 / 6, 1, 2 / 6, 0, 2 / 6],
      [1, 0, 2 / 6, 1, 2 / 6, 1, 3 / 6, 0, 3 / 6],
      [2, 0, 3 / 6, 1, 3 / 6, 1, 4 / 6, 0, 4 / 6],
      [1, 0, 4 / 6, 1, 4 / 6, 1, 5 / 6, 0, 5 / 6],
      [2, 0, 5 / 6, 1, 5 / 6, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1, 0, 1]
    ],
    symbol: [1 / 6, 1 / 2, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.2,
        vmax: 0.6
      }
    }
  },
  // JPun
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 4, 0, 1 / 4],
      [2, 0, 1 / 4, 1, 1 / 4, 1, 2 / 4, 0, 2 / 4],
      [1, 0, 2 / 4, 1, 2 / 4, 1, 3 / 4, 0, 3 / 4],
      [2, 0, 3 / 4, 1, 3 / 4, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1, 0, 1]
    ],
    symbol: [1 / 6, 1 / 2, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0,
        vmax: 0.2
      },
      internationalism: {
        vmin: 0,
        vmax: 0.2
      }
    }
  },
  // JPun, Nat+
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 2, 0, 1 / 2],
      [2, 0, 1 / 2, 1, 1 / 2, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1, 0, 1]
    ],
    symbol: [1 / 6, 1 / 2, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.2,
        vmax: 0.6
      }
    }
  },
  // JPun, Nat++
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1 / 3, 0, 1 / 3, 1, 0, 1],
      [2, 2 / 3, 0, 1, 0, 1, 1, 2 / 3, 1],
      [0, 1 / 3, 0, 2 / 3, 0, 2 / 3, 1, 1 / 3, 1]
    ],
    symbol: [1 / 2, 1 / 2, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.6,
        vmax: 1
      }
    }
  },
  /*
  ****************************************************************************
  3C, REFO, JREH
  ****************************************************************************
  */
  // JReh, Int++
  {
    numColors: 3,
    shapes: [
      [0, 0, 0, 1, 0, 1, 1, 0, 1],
      [1, 4 / 16, 0, 6 / 16, 0, 6 / 16, 1, 4 / 16, 1],
      [1, 0, 3 / 8, 0, 5 / 8, 1, 5 / 8, 1, 3 / 8],
      [2, 4.4 / 16, 0, 5.6 / 16, 0, 5.6 / 16, 1, 4.4 / 16, 1],
      [2, 0, 3.4 / 8, 0, 4.6 / 8, 1, 4.6 / 8, 1, 3.4 / 8]
    ],
    symbol: [2 / 16, 1.5 / 8, 0.8],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.6,
        vmax: 1
      }
    }
  },
  // JReh, Int+
  {
    numColors: 3,
    shapes: [
      [0, 0, 0, 1, 0, 1, 1, 0, 1],
      [1, 7 / 16, 0, 9 / 16, 0, 9 / 16, 1, 7 / 16, 1],
      [1, 0, 3 / 8, 0, 5 / 8, 1, 5 / 8, 1, 3 / 8],
      [2, 7.4 / 16, 0, 8.6 / 16, 0, 8.6 / 16, 1, 7.4 / 16, 1],
      [2, 0, 3.4 / 8, 0, 4.6 / 8, 1, 4.6 / 8, 1, 3.4 / 8]
    ],
    symbol: [3.5 / 16, 1.5 / 8, 0.7],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.2,
        vmax: 0.6
      }
    }
  },
  // JReh
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 3 / 12, 0, 3 / 12],
      [2, 0, 3 / 12, 1, 3 / 12, 1, 4 / 12, 0, 4 / 12],
      [0, 0, 4 / 12, 1, 4 / 12, 1, 8 / 12, 0, 8 / 12],
      [2, 0, 8 / 12, 1, 8 / 12, 1, 9 / 12, 0, 9 / 12],
      [1, 0, 9 / 12, 1, 9 / 12, 1, 1, 0, 1]
    ],
    symbol: [1 / 2, 1 / 2, 0.6],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0,
        vmax: 0.2
      },
      internationalism: {
        vmin: 0,
        vmax: 0.2
      }
    }
  },
  // JReh, Nat+
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 6, 0, 1 / 6],
      [2, 0, 1 / 6, 1, 1 / 6, 1, 2 / 6, 0, 2 / 6],
      [0, 0, 2 / 6, 1, 2 / 6, 1, 3 / 6, 0, 3 / 6],
      [0, 0, 3 / 6, 1, 3 / 6, 1, 4 / 6, 0, 4 / 6],
      [2, 0, 4 / 6, 1, 4 / 6, 1, 5 / 6, 0, 5 / 6],
      [1, 0, 5 / 6, 1, 5 / 6, 1, 1, 0, 1]
    ],
    symbol: [1 / 2, 1 / 2, 0.6],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.2,
        vmax: 0.6
      }
    }
  },
  // JReh, Nat++
  {
    numColors: 3,
    shapes: [
      [1, 0, 0, 0, 1 / 3, 1, 1 / 3, 1, 0],
      [2, 0, 2 / 3, 0, 1, 1, 1, 1, 2 / 3],
      [0, 0, 1 / 3, 0, 2 / 3, 1, 2 / 3, 1, 1 / 3]
    ],
    symbol: [1 / 2, 1 / 2, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.6,
        vmax: 1
      }
    }
  },
  /*
  ****************************************************************************
  2C, REFO, JREH
  ****************************************************************************
  */
  // 2C, Réfo, JReh, Int++
  {
    numColors: 2,
    shapes: [
      [0, 0, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 1 / 9, 0, 1 / 9],
      [1, 0, 2 / 9, 1, 2 / 9, 1, 3 / 9, 0, 3 / 9],
      [1, 0, 4 / 9, 1, 4 / 9, 1, 5 / 9, 0, 5 / 9],
      [1, 0, 6 / 9, 1, 6 / 9, 1, 7 / 9, 0, 7 / 9],
      [1, 0, 8 / 9, 1, 8 / 9, 1, 9 / 9, 0, 9 / 9],
      [0, 'circleSymbol', 0.5, 0.5, 0.25]
    ],
    symbol: [0.5, 0.5, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.66,
        vmax: 1
      }
    }
  },
  // 2C, Réfo, JReh, Int+
  {
    numColors: 2,
    shapes: [
      [0, 0, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 1 / 7, 0, 1 / 7],
      [1, 0, 2 / 7, 1, 2 / 7, 1, 3 / 7, 0, 3 / 7],
      [1, 0, 4 / 7, 1, 4 / 7, 1, 5 / 7, 0, 5 / 7],
      [1, 0, 6 / 7, 1, 6 / 7, 1, 1, 0, 1],
      [0, 'circleSymbol', 0.5, 0.5, 0.25]
    ],
    symbol: [0.5, 0.5, 0.7],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.33,
        vmax: 0.66
      }
    }
  },
  // 2C, Réfo, JReh, Int
  {
    numColors: 2,
    shapes: [
      [0, 0, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0.75, 1, 0.75, 1, 0.8, 0, 0.8],
      [1, 0, 0.25, 1, 0.25, 1, 0.2, 0, 0.2]
    ],
    symbol: [0.5, 0.5, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0,
        vmax: 0.33
      }
    }
  },
  // 2C, Réfo, JReh, Nat
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 0, 4 / 5, 1, 4 / 5, 1, 1 / 5, 0, 1 / 5]
    ],
    symbol: [0.5, 0.5, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0,
        vmax: 0.33
      }
    }
  },
  // 2C, Réfo, JReh, Nat+
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 3, 0, 1 / 3],
      [0, 0, 1 / 3, 1, 1 / 3, 1, 2 / 3, 0, 2 / 3],
      [1, 0, 2 / 3, 1, 2 / 3, 1, 1, 0, 1]
    ],
    symbol: [0.5, 0.5, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.33,
        vmax: 0.66
      }
    }
  },
  // 2C, Réfo, JReh, Nat++
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 2, 0, 1 / 2],
      [0, 0, 1 / 2, 1, 1 / 2, 1, 1, 0, 1]
    ],
    symbol: [0.5, 0.5, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.66,
        vmax: 1
      }
    }
  },
  /*
  ****************************************************************************
  2C, REVO, JREH
  ****************************************************************************
  */
  // 2C, Révo, JReh, Int++
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 9, 0, 1 / 9],
      [0, 0, 1 / 9, 1, 1 / 9, 1, 2 / 9, 0, 2 / 9],
      [1, 0, 2 / 9, 1, 2 / 9, 1, 3 / 9, 0, 3 / 9],
      [0, 0, 3 / 9, 1, 3 / 9, 1, 4 / 9, 0, 4 / 9],
      [1, 0, 4 / 9, 1, 4 / 9, 1, 5 / 9, 0, 5 / 9],
      [0, 0, 5 / 9, 1, 5 / 9, 1, 6 / 9, 0, 6 / 9],
      [1, 0, 6 / 9, 1, 6 / 9, 1, 7 / 9, 0, 7 / 9],
      [0, 0, 7 / 9, 1, 7 / 9, 1, 8 / 9, 0, 8 / 9],
      [1, 0, 8 / 9, 1, 8 / 9, 1, 1, 0, 1],
      [0, 0, 0, 0.5, 0.5, 0, 1]
    ],
    symbol: [0.2, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.66,
        vmax: 1
      }
    }
  },
  // 2C, Révo, JReh, Int+
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 7, 0, 1 / 7],
      [0, 0, 1 / 7, 1, 1 / 7, 1, 2 / 7, 0, 2 / 7],
      [1, 0, 2 / 7, 1, 2 / 7, 1, 3 / 7, 0, 3 / 7],
      [0, 0, 3 / 7, 1, 3 / 7, 1, 4 / 7, 0, 4 / 7],
      [1, 0, 4 / 7, 1, 4 / 7, 1, 5 / 7, 0, 5 / 7],
      [0, 0, 5 / 7, 1, 5 / 7, 1, 6 / 7, 0, 6 / 7],
      [1, 0, 6 / 7, 1, 6 / 7, 1, 1, 0, 1],
      [0, 0, 0, 0.5, 0.5, 0, 1]
    ],
    symbol: [0.2, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.33,
        vmax: 0.66
      }
    }
  },
  // 2C, Révo, JReh, Int
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 5, 0, 1 / 5],
      [0, 0, 1 / 5, 1, 1 / 5, 1, 2 / 5, 0, 2 / 5],
      [1, 0, 2 / 5, 1, 2 / 5, 1, 3 / 5, 0, 3 / 5],
      [0, 0, 3 / 5, 1, 3 / 5, 1, 4 / 5, 0, 4 / 5],
      [1, 0, 4 / 5, 1, 4 / 5, 1, 1, 0, 1],
      [0, 0, 0, 0.5, 0.5, 0, 1]
    ],
    symbol: [0.2, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0,
        vmax: 0.33
      }
    }
  },
  // 2C, Révo, JReh, Nat
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 0, 1, 0, 0.5, 1, 0, 1, 0.5]
    ],
    symbol: [0.5, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0,
        vmax: 0.33
      }
    }
  },
  // 2C, Révo, JReh, Nat+
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 0, 0, 1, 0.5, 0, 1]
    ],
    symbol: [0.33, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.33,
        vmax: 0.66
      }
    }
  },
  // 2C, Révo, JReh, Nat++
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 0, 1, 1, 1, 1, 0]
    ],
    symbol: [0.125, 0.25, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      rehabilitative_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.66,
        vmax: 1
      }
    }
  },
  /*
  ****************************************************************************
  2C, REVO, JPUN
  ****************************************************************************
  */
  // 2C, Révo, JPun, Int++
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 8, 0, 1 / 8],
      [0, 0, 1 / 8, 1, 1 / 8, 1, 2 / 8, 0, 2 / 8],
      [1, 0, 2 / 8, 1, 2 / 8, 1, 3 / 8, 0, 3 / 8],
      [0, 0, 3 / 8, 1, 3 / 8, 1, 4 / 8, 0, 4 / 8],
      [1, 0, 4 / 8, 1, 4 / 8, 1, 5 / 8, 0, 5 / 8],
      [0, 0, 5 / 8, 1, 5 / 8, 1, 6 / 8, 0, 6 / 8],
      [1, 0, 6 / 8, 1, 6 / 8, 1, 7 / 8, 0, 7 / 8],
      [0, 0, 7 / 8, 1, 7 / 8, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1 / 2, 0, 1 / 2]
    ],
    symbol: [1 / 6, 0.25, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.66,
        vmax: 1
      }
    }
  },
  // 2C, Révo, JPun, Int+
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1, 0, 1],
      [0, 0, 0 / 6, 1, 0 / 6, 1, 1 / 6, 0, 1 / 6],
      [0, 0, 2 / 6, 1, 2 / 6, 1, 3 / 6, 0, 3 / 6],
      [0, 0, 4 / 6, 1, 4 / 6, 1, 5 / 6, 0, 5 / 6]
    ],
    symbol: [1 / 6, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.33,
        vmax: 0.66
      }
    }
  },
  // 2C, Révo, JPun, Int
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1, 0, 1],
      [0, 0, 0 / 5, 1, 0 / 5, 1, 1 / 5, 0, 1 / 5],
      [0, 0, 2 / 5, 1, 2 / 5, 1, 3 / 5, 0, 3 / 5],
      [0, 0, 4 / 5, 1, 4 / 5, 1, 5 / 5, 0, 5 / 5]
    ],
    symbol: [1 / 6, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0,
        vmax: 0.33
      }
    }
  },
  // 2C, Révo, JPun, Nat
  {
    numColors: 2,
    shapes: [
      [0, 0, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 0, 1 / 3, 0, 1 / 3, 1, 0, 1],
      [1, 2 / 3, 0, 1, 0, 1, 1, 2 / 3, 1]
    ],
    symbol: [0.5, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0,
        vmax: 0.33
      }
    }
  },
  // 2C, Révo, JPun, Nat+
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 0, 0.2, 0, 0, 0.1, 0, 1, 0.8, 1, 1, 0.9, 1],
      [0, 0, 0.8, 0, 1, 0.1, 1, 1, 0.2, 1, 0, 0.9, 0]
    ],
    symbol: [0.5, 0.5, 0.5],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.33,
        vmax: 0.66
      }
    }
  },
  // 2C, Révo, JPun, Nat++
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1, 0, 1],
      [
        0,
        0,
        0,
        0.37,
        0,
        0.43,
        1 / 16,
        0.37,
        2 / 16,
        0.43,
        3 / 16,
        0.37,
        4 / 16,
        0.43,
        5 / 16,
        0.37,
        6 / 16,
        0.43,
        7 / 16,
        0.37,
        8 / 16,
        0.43,
        9 / 16,
        0.37,
        10 / 16,
        0.43,
        11 / 16,
        0.37,
        12 / 16,
        0.43,
        13 / 16,
        0.37,
        14 / 16,
        0.43,
        15 / 16,
        0.37,
        1,
        0.43,
        1,
        0,
        1
      ]
    ],
    symbol: [0.2, 0.5, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.66,
        vmax: 1
      }
    }
  },
  /*
  ****************************************************************************
  2C, REFO, JPUN
  ****************************************************************************
  */
  // 2C, Réfo, JPun, Int++
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1 / 8, 0, 1 / 8],
      [0, 0, 1 / 8, 1, 1 / 8, 1, 2 / 8, 0, 2 / 8],
      [1, 0, 2 / 8, 1, 2 / 8, 1, 3 / 8, 0, 3 / 8],
      [0, 0, 3 / 8, 1, 3 / 8, 1, 4 / 8, 0, 4 / 8],
      [1, 0, 4 / 8, 1, 4 / 8, 1, 5 / 8, 0, 5 / 8],
      [0, 0, 5 / 8, 1, 5 / 8, 1, 6 / 8, 0, 6 / 8],
      [1, 0, 6 / 8, 1, 6 / 8, 1, 7 / 8, 0, 7 / 8],
      [0, 0, 7 / 8, 1, 7 / 8, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1 / 2, 0, 1 / 2]
    ],
    symbol: [1 / 6, 1 / 4, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.66,
        vmax: 1
      }
    }
  },
  // 2C, Réfo, JPun, Int+
  {
    numColors: 2,
    shapes: [
      [0, 0, 0, 1, 0, 1, 1 / 6, 0, 1 / 6],
      [1, 0, 1 / 6, 1, 1 / 6, 1, 2 / 6, 0, 2 / 6],
      [0, 0, 2 / 6, 1, 2 / 6, 1, 3 / 6, 0, 3 / 6],
      [1, 0, 3 / 6, 1, 3 / 6, 1, 4 / 6, 0, 4 / 6],
      [0, 0, 4 / 6, 1, 4 / 6, 1, 5 / 6, 0, 5 / 6],
      [1, 0, 5 / 6, 1, 5 / 6, 1, 1, 0, 1],
      [0, 0, 0, 1 / 3, 0, 1 / 3, 1 / 2, 0, 1 / 2]
    ],
    symbol: [1 / 6, 1 / 4, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0.33,
        vmax: 0.66
      }
    }
  },
  // 2C, Réfo, JPun, Int
  {
    numColors: 2,
    shapes: [
      [0, 0, 0, 1, 0, 1, 1, 0, 1],
      [1, 0.45, 0, 0.45, 1, 0.55, 1, 0.55, 0],
      [1, 0, 0.4, 1, 0.4, 1, 0.6, 0, 0.6]
    ],
    symbol: [0.215, 0.2, 0.8],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      internationalism: {
        vmin: 0,
        vmax: 0.33
      }
    }
  },
  // 2C, Réfo, JPun, Nat
  {
    numColors: 2,
    shapes: [
      [0, 0, 0, 1, 0, 1, 1, 0, 1],
      [1, 0, 2 / 5, 1, 2 / 5, 1, 3 / 5, 0, 3 / 5],
      [1, 0.25, 0, 0.35, 0, 0.35, 1, 0.25, 1],
      [1, 'circle', 0.3, 0.5, 0.25]
    ],
    symbol: [0.3, 0.5, 0.9],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0,
        vmax: 0.33
      }
    }
  },
  // 2C, Réfo, JPun, Nat+
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 0, 1 / 5, 1, 1 / 5, 1, 4 / 5, 0, 4 / 5],
      [1, 'circle', 0.5, 0.5, 0.25]
    ],
    symbol: [0.5, 0.5, 0.8],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.33,
        vmax: 0.66
      }
    }
  },
  // 2C, Réfo, JPun, Nat++
  {
    numColors: 2,
    shapes: [
      [1, 0, 0, 1, 0, 1, 1, 0, 1],
      [0, 'circle', 0.5, 0.5, 0.35]
    ],
    symbol: [0.5, 0.5, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      },
      punitive_justice: {
        vmin: 0,
        vmax: 1
      },
      nationalism: {
        vmin: 0.66,
        vmax: 1
      }
    }
  },
  /*
  ****************************************************************************
  1C, REVO
  ****************************************************************************
  */
  {
    numColors: 1,
    shapes: [[0, 0, 0, 1, 0, 1, 1, 0, 1]],
    symbol: [0.125, 0.25, 1.0],
    cond: {
      revolution: {
        vmin: 0,
        vmax: 1
      }
    }
  },
  /*
  ****************************************************************************
  1C, REFO
  ****************************************************************************
  */
  {
    numColors: 1,
    shapes: [[0, 0, 0, 1, 0, 1, 1, 0, 1]],
    symbol: [0.5, 0.5, 1.0],
    cond: {
      reform: {
        vmin: 0,
        vmax: 1
      }
    }
  },
  /*
  ****************************************************************************
  0C
  ****************************************************************************
  */
  {
    numColors: 0,
    shapes: [[0, 0, 0, 1, 0, 1, 1, 0, 1]],
    symbol: [0.5, 0.5, 1.0],
    cond: {}
  }
]

interface FlagColor {
  bgColor: string
  fgColor: string
  cond: {
    [key: string]: {
      vmin: number
      vmax: number
    }
  }
}

export const flagColors: FlagColor[] = [
  //Anarchisme
  {
    bgColor: '#000000',
    fgColor: '#ffffff',
    cond: {
      anarchism: {
        vmin: 0.4,
        vmax: 1
      }
    }
  },
  //Monarichisme
  {
    bgColor: '#ffffff',
    fgColor: '#fa9e08',
    cond: {
      monarchism: {
        vmin: 0.4,
        vmax: 1
      }
    }
  },
  //Nationalisme
  // {
  //   bgColor: '#a45e22',
  //   fgColor: '#ffffff',
  //   cond: {
  //     nationalism: {
  //       vmin: 0.4,
  //       vmax: 1
  //     }
  //   }
  // },
  //Conservatism
  {
    bgColor: '#062b85',
    fgColor: '#ffffff',
    cond: {
      conservative: {
        vmin: 0.4,
        vmax: 1
      }
    }
  },
  //Communiste
  {
    bgColor: '#d71224',
    fgColor: '#ffffff',
    cond: {
      communism: {
        vmin: 0.6,
        vmax: 1
      }
    }
  },
  //Socialiste
  {
    bgColor: '#c92375',
    fgColor: '#ffffff',
    cond: {
      regulation: {
        vmin: 0.4,
        vmax: 1
      },
      communism: {
        vmin: 0,
        vmax: 0.6
      },
      capitalism: {
        vmin: 0,
        vmax: 1
      }
    }
  },
  //Liberal
  {
    bgColor: '#fcce0a',
    fgColor: '#1b67ac',
    cond: {
      laissez_faire: {
        vmin: 0.4,
        vmax: 1
      },
      capitalism: {
        vmin: 0.1,
        vmax: 1
      }
    }
  },
  //Ecologie
  {
    bgColor: '#069839',
    fgColor: '#ffffff',
    cond: {
      ecology: {
        vmin: 0.4,
        vmax: 1
      }
    }
  },
  //Egalité (constructivisme)
  {
    bgColor: '#6a1094',
    fgColor: '#ffffff',
    cond: {
      constructivism: {
        vmin: 0.4,
        vmax: 1
      }
    }
  },
  //Progressisme
  {
    bgColor: '#f86d07',
    fgColor: '#ffffff',
    cond: {
      progressive: {
        vmin: 0.4,
        vmax: 1
      }
    }
  },
  //Productivisme
  {
    bgColor: '#2fa2d3',
    fgColor: '#ffffff',
    cond: {
      production: {
        vmin: 0.4,
        vmax: 1
      }
    }
  }
]

export interface Transform {
  child_type?: string
  x?: number
  y?: number
  main?: boolean
  parent_tx?: number
  parent_ty?: number
  parent_sx?: number
  parent_sy?: number
  parent_r?: number
  child_tx?: number
  child_ty?: number
  child_sx?: number
  child_sy?: number
  child_r?: number
}

export interface SymbolData {
  parent_type: string
  transform: Transform
}

export interface FlagSymbol {
  data: {
    parent_type: string
    transforms: Transform[]
  }
  cond: {
    [key: string]: {
      vmin: number
      vmax: number
    }
  }
}

export const flagSymbols: FlagSymbol[] = [
  //Féminisme
  {
    data: {
      parent_type: 'curve',
      transforms: [
        {
          child_type: 'none',
          x: 2,
          y: 1,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 2,
          y: 0,
          main: true,
          parent_tx: 10,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: -2,
          child_ty: 0,
          child_sx: -1,
          child_sy: 1,
          child_r: 1
        },
        {
          child_type: 'dot',
          x: 2,
          y: 0,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 3,
          child_ty: 17,
          child_sx: 0.55,
          child_sy: 0.55,
          child_r: 0
        }
      ]
    },
    cond: {
      feminism: {
        vmin: 0.95,
        vmax: 1
      }
    }
  },
  //Communisme
  {
    data: {
      parent_type: 'curve',
      transforms: [
        {
          child_type: 'none',
          x: 0,
          y: 0,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 0,
          y: 0,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: -17,
          child_ty: -14,
          child_sx: -1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'dot',
          x: 0,
          y: 0,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 6,
          child_sx: 0.55,
          child_sy: 0.55,
          child_r: 0
        }
      ]
    },
    cond: {
      communism: {
        vmin: 0.7,
        vmax: 1
      }
    }
  },
  //Internationalisme
  {
    data: {
      parent_type: 'curve',
      transforms: [
        {
          child_type: 'none',
          x: 3,
          y: 1,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 3,
          y: 0,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: -13,
          child_ty: -20,
          child_sx: -1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'dot',
          x: 3,
          y: 0,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 2,
          child_ty: 0,
          child_sx: 0.55,
          child_sy: 0.55,
          child_r: 0
        }
      ]
    },
    cond: {
      internationalism: {
        vmin: 0.7,
        vmax: 1
      }
    }
  },
  //Productivisme
  {
    data: {
      parent_type: 'curve',
      transforms: [
        {
          child_type: 'none',
          x: 1,
          y: 0,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 1,
          y: 0,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: -17,
          child_ty: -20,
          child_sx: -1,
          child_sy: 1,
          child_r: 1
        },
        {
          child_type: 'dot',
          x: 1,
          y: 0,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 4,
          child_ty: 2,
          child_sx: 0.55,
          child_sy: 0.55,
          child_r: 0
        }
      ]
    },
    cond: {
      production: {
        vmin: 0.7,
        vmax: 1
      }
    }
  },
  //Régulationnisme
  {
    data: {
      parent_type: 'line',
      transforms: [
        {
          child_type: 'none',
          x: 0,
          y: 2,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 45,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'curve',
          x: 0,
          y: 2,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 0,
          y: 2,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: -1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'dot',
          x: 0,
          y: 2,
          main: true,
          parent_tx: 0,
          parent_ty: -18,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: -45,
          child_tx: 0,
          child_ty: 18,
          child_sx: 0.6,
          child_sy: 0.6,
          child_r: 0
        },
        {
          child_type: 'tri',
          x: 0,
          y: 2,
          main: false,
          parent_tx: 0,
          parent_ty: 5,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        }
      ]
    },
    cond: {
      regulation: {
        vmin: 0.7,
        vmax: 1
      }
    }
  },
  //Conservatisme
  {
    data: {
      parent_type: 'line',
      transforms: [
        {
          child_type: 'none',
          x: 0,
          y: 1,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: -45,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'curve',
          x: 0,
          y: 1,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 0,
          y: 1,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: -1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'dot',
          x: 0,
          y: 1,
          main: true,
          parent_tx: 0,
          parent_ty: -18,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: -45,
          child_tx: 0,
          child_ty: 18,
          child_sx: 0.6,
          child_sy: 0.6,
          child_r: 0
        },
        {
          child_type: 'tri',
          x: 0,
          y: 1,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        }
      ]
    },
    cond: {
      conservative: {
        vmin: 0.7,
        vmax: 1
      }
    }
  },
  //Punitif
  {
    data: {
      parent_type: 'line',
      transforms: [
        {
          child_type: 'none',
          x: 1,
          y: 2,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: -45,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'curve',
          x: 1,
          y: 2,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 1,
          y: 2,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: -1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'dot',
          x: 1,
          y: 2,
          main: true,
          parent_tx: 0,
          parent_ty: -18,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: -45,
          child_tx: 0,
          child_ty: 18,
          child_sx: 0.6,
          child_sy: 0.6,
          child_r: 0
        },
        {
          child_type: 'tri',
          x: 1,
          y: 2,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        }
      ]
    },
    cond: {
      punitive_justice: {
        vmin: 0.7,
        vmax: 1
      }
    }
  },
  //Ecologie
  {
    data: {
      parent_type: 'line',
      transforms: [
        {
          child_type: 'none',
          x: 3,
          y: 2,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'curve',
          x: 2,
          y: 2,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 2,
          y: 2,
          main: false,
          parent_tx: -6,
          parent_ty: 0,
          parent_sx: 0.95,
          parent_sy: 0.95,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: -1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'dot',
          x: 2,
          y: 2,
          main: true,
          parent_tx: 5,
          parent_ty: -15,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 90,
          child_tx: -10,
          child_ty: 15,
          child_sx: 0.6,
          child_sy: 0.6,
          child_r: 0
        },
        {
          child_type: 'tri',
          x: 3,
          y: 2,
          main: false,
          parent_tx: -20,
          parent_ty: -20,
          parent_sx: 0.6,
          parent_sy: 0.6,
          parent_r: 45,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        }
      ]
    },
    cond: {
      ecology: {
        vmin: 0.7,
        vmax: 1
      }
    }
  },
  //Essentialisme
  {
    data: {
      parent_type: 'dot',
      transforms: [
        {
          child_type: 'none',
          x: 0,
          y: 3,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'curve',
          x: 0,
          y: 3,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 0,
          y: 3,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'tri',
          x: 0,
          y: 3,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        }
      ]
    },
    cond: {
      essentialism: {
        vmin: 0.7,
        vmax: 1
      }
    }
  },
  //Révolution
  {
    data: {
      parent_type: 'dot',
      transforms: [
        {
          child_type: 'none',
          x: 1,
          y: 3,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'curve',
          x: 1,
          y: 3,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 1,
          y: 3,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'tri',
          x: 1,
          y: 3,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        }
      ]
    },
    cond: {
      revolution: {
        vmin: 0.7,
        vmax: 1
      }
    }
  },
  //Monarchie
  {
    data: {
      parent_type: 'dot',
      transforms: [
        {
          child_type: 'none',
          x: 2,
          y: 3,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'curve',
          x: 2,
          y: 3,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 2,
          y: 3,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'tri',
          x: 2,
          y: 3,
          main: false,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        }
      ]
    },
    cond: {
      monarchism: {
        vmin: 0.9,
        vmax: 1
      }
    }
  },
  //Constructivisme
  {
    data: {
      parent_type: 'tri',
      transforms: [
        {
          child_type: 'none',
          x: 1,
          y: 1,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 0,
          child_sx: 1,
          child_sy: 1,
          child_r: 0
        },
        {
          child_type: 'line',
          x: 1,
          y: 1,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: 5,
          child_sx: 1,
          child_sy: 1,
          child_r: -45
        },
        {
          child_type: 'dot',
          x: 1,
          y: 1,
          main: true,
          parent_tx: 0,
          parent_ty: 0,
          parent_sx: 1,
          parent_sy: 1,
          parent_r: 0,
          child_tx: 0,
          child_ty: -18,
          child_sx: 0.65,
          child_sy: 0.65,
          child_r: 0
        }
      ]
    },
    cond: {
      constructivism: {
        vmin: 0.7,
        vmax: 1
      }
    }
  }
]
