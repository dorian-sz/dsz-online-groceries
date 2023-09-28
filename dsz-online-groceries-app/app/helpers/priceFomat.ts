export const displayPrice = (price: number) => {
  return price >= 1 ? `£${price.toFixed(2)}` : `${(price * 100).toFixed()}p`;
};

export const unitPrice = (price: Number, size: Number, factor: Number) => {
  return Number(price) / (Number(size) / Number(factor));
};
