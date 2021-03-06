const initialState = {
  entities: {
    alcoholTypeOptions: {
      bySlug: {
        '40-oz': {
          slug: '40-oz',
          name: '40 oz.',
          volume: 40,
          volumeUnits: 'ounces',
          alcoholByVolume: 8.1,
          totalCost: 3.48,
        },
        'tall-can': {
          slug: 'tall-can',
          name: 'tall can',
          volume: 24,
          volumeUnits: 'ounces',
          alcoholByVolume: 8.1,
          totalCost: 2.48,
        },
        'handle': {
          slug: 'handle',
          name: 'handle',
          volume: 1.75,
          volumeUnits: 'liters',
          alcoholByVolume: 40,
          totalCost: 9.98,
        },
        'box-wine': {
          slug: 'box-wine',
          name: 'box wine',
          volume: 5,
          volumeUnits: 'liters',
          alcoholByVolume: 13,
          totalCost: 12.98,
        },
        '6-pack': {
          slug: '6-pack',
          name: '6 pack',
          volume: 72,
          volumeUnits: 'ounces',
          alcoholByVolume: 5,
          totalCost: 7.98,
        },
        '12-pack': {
          slug: '12-pack',
          name: '12 pack',
          volume: 144,
          volumeUnits: 'ounces',
          alcoholByVolume: 5,
          totalCost: 12.98,
        },
        '24-pack': {
          slug: '24-pack',
          name: '24 pack',
          volume: 288,
          volumeUnits: 'ounces',
          alcoholByVolume: 5,
          totalCost: 18.98,
        },
        '30-pack': {
          slug: '30-pack',
          name: '30 pack',
          volume: 360,
          volumeUnits: 'ounces',
          alcoholByVolume: 5,
          totalCost: 19.98,
        },
        'shot': {
          slug: 'shot',
          name: 'shot',
          volume: 1.5,
          volumeUnits: 'ounces',
          alcoholByVolume: 40,
          totalCost: 4,
        },
        'pint': {
          slug: 'pint',
          name: 'pint',
          volume: 16,
          volumeUnits: 'ounces',
          alcoholByVolume: 5,
          totalCost: 6,
        },
        'pitcher': {
          slug: 'pitcher',
          name: 'pitcher',
          volume: 60,
          volumeUnits: 'ounces',
          alcoholByVolume: 5,
          totalCost: 16,
        },
        'cocktail': {
          slug: 'cocktail',
          name: 'cocktail',
          volume: 4.5,
          volumeUnits: 'ounces',
          alcoholByVolume: 13.3,
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
    },
    alcoholAttributes: {
      byKey: {
        alcoholByVolume: {
          key: 'alcoholByVolume',
          name: 'alcohol by volume',
        },
        costPerOunceOfPureAlcohol: {
          key: 'costPerOunceOfPureAlcohol',
          name: 'cost per ounce of pure alcohol',
        },
        name: {
          key: 'name',
          name: 'name',
        },
        slug: {
          key: 'slug',
          name: 'slug',
        },
        totalCost: {
          key: 'totalCost',
          name: 'total cost',
        },
        volume: {
          key: 'volume',
          name: 'volume',
        },
        volumeInOunces: {
          key: 'volumeInOunces',
          name: 'volume (ounces)',
        },
      },
      allKeys: [
        'alcoholByVolume',
        'costPerOunceOfPureAlcohol',
        'name',
        'slug',
        'totalCost',
        'volume',
        'volumeInOunces',
      ],
    },
  },
  sortAttributeKey: 'costPerOunceOfPureAlcohol',
  sortOrderKey: 'lowToHigh',
  alcoholInstanceEditing: {
    attributeBeingEdited: null,
    isEditingModalShown: false,
    slugBeingEdited: null,
  },
}

export default initialState
