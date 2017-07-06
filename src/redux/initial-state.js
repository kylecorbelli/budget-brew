const initialState = {
  entities: {
    alcoholTypeOptions: {
      bySlug: {
        '40-oz': {
          slug: '40-oz',
          name: '40 oz.',
          volume: 40,
          volumeUnit: 'ounce',
          alcoholByVolume: 0.081,
          totalCost: 3.48,
        },
        'tall-can': {
          slug: 'tall-can',
          name: 'tall can',
          volume: 24,
          volumeUnit: 'ounce',
          alcoholByVolume: 0.081,
          totalCost: 2.48,
        },
        'handle': {
          slug: 'handle',
          name: 'handle',
          volume: 1.75,
          volumeUnit: 'liter',
          alcoholByVolume: 0.4,
          totalCost: 9.98,
        },
        'box-wine': {
          slug: 'box-wine',
          name: 'box wine',
          volume: 5,
          volumeUnit: 'liter',
          alcoholByVolume: 0.13,
          totalCost: 12.98,
        },
        '6-pack': {
          slug: '6-pack',
          name: '6 pack',
          volume: 72,
          volumeUnit: 'ounce',
          alcoholByVolume: 0.05,
          totalCost: 7.98,
        },
        '12-pack': {
          slug: '12-pack',
          name: '12 pack',
          volume: 144,
          volumeUnit: 'ounce',
          alcoholByVolume: 0.05,
          totalCost: 12.98,
        },
        '24-pack': {
          slug: '24-pack',
          name: '24 pack',
          volume: 288,
          volumeUnit: 'ounce',
          alcoholByVolume: 0.05,
          totalCost: 18.98,
        },
        '30-pack': {
          slug: '30-pack',
          name: '30 pack',
          volume: 360,
          volumeUnit: 'ounce',
          alcoholByVolume: 0.05,
          totalCost: 19.98,
        },
        'shot': {
          slug: 'shot',
          name: 'shot',
          volume: 1.5,
          volumeUnit: 'ounce',
          alcoholByVolume: 0.4,
          totalCost: 4,
        },
        'pint': {
          slug: 'pint',
          name: 'pint',
          volume: 16,
          volumeUnit: 'ounce',
          alcoholByVolume: 0.05,
          totalCost: 6,
        },
        'pitcher': {
          slug: 'pitcher',
          name: 'pitcher',
          volume: 60,
          volumeUnit: 'ounce',
          alcoholByVolume: 0.05,
          totalCost: 16,
        },
        'cocktail': {
          slug: 'cocktail',
          name: 'cocktail',
          volume: 4.5,
          volumeUnit: 'ounce',
          alcoholByVolume: 0.133,
          totalCost: 8,
        },
      },
      allSlugs: [
        '40-oz',
        'tall-can',
        'handle',
        'box-wine',
        '6-pack',
        '12-pack',
        '24-pack',
        '30-pack',
        'shot',
        'pint',
        'pitcher',
        'cocktail',
      ],
    },
    selectedAlcoholTypes: {
      bySlug: {},
      allSlugs: [],
    },
    sortAttributeOptions: {
      byKey: {
        'costPerOunceOfPureAlcohol': {
          key: 'costPerOunceOfPureAlcohol',
          name: 'cost per ounce of pure alcohol',
        },
        'totalCost': {
          key: 'totalCost',
          name: 'total cost',
        },
        'alcoholByVolume': {
          key: 'alcoholByVolume',
          name: 'alcohol by volume',
        },
      },
      allKeys: [
        'costPerOunceOfPureAlcohol',
        'totalCost',
        'alcoholByVolume',
      ],
    },
    sortOrderOptions: {
      byKey: {
        'lowToHigh': {
          key: 'lowToHigh',
          name: 'low to high',
        },
        'highToLow': {
          key: 'highToLow',
          name: 'high to low',
        },
      },
      allKeys: [
        'lowToHigh',
        'highToLow',
      ],
    }
  },
  sortAttributeKey: 'costPerOunceOfPureAlcohol',
  sortOrderKey: 'lowToHigh',
  alcoholInstanceEditing: {
    attributeBeingEdited: null,
    slugBeingEdited: null,
  },
}

export default initialState
