export function createSellButton() {
  let sellButtonImage;
  let sellButtonActiveImg;
  let sellingMode = false;

  function setImage(image) {
    sellButtonImage = image;
  }

  function getImage() {
    return sellButtonImage;
  }

  function setActiveImage(image) {
    sellButtonActiveImg = image;
  }

  function getActiveImage() {
    return sellButtonActiveImg;
  }

  function toggleSellingMode() {
    sellingMode = !sellingMode;
  }

  function isSellingMode() {
    return sellingMode;
  }

  function cancelSellingMode() {
    sellingMode = false;
  }

  return {
    setImage,
    getImage,
    setActiveImage,
    getActiveImage,
    toggleSellingMode,
    isSellingMode,
    cancelSellingMode,
  };
}
