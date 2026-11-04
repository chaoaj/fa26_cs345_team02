export function createBattlefieldLayout() {
  return {
    // currently selected unit
    curUnit: null,

    // units placed on the battlefield
    placedUnits: [],

    // shop images
    butterflyShop: null,
    wormShop: null,
    cocoonShop: null,

    // unit images
    butterfly: null,
    worm: null,
    cocoon: null,
  };
}
