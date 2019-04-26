function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {

    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distance = (end - start);

      if (distance > blockRange) {
        return `${distance - blockRange} blocks out of range`
      } else {
        return `within range by ${blockRange - distance}`
      };
    }
  }

function produceTipCalculator(tipPercent) {
  return function(mealPrice) {
    return mealPrice * tipPercent;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}