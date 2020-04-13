export const formatPrice = (price, currency) => {
  if (currency === "USD") {
    return (price * 1.09).toLocaleString("us-US", {
      style: "currency",
      currency,
    });
  }
  if (currency === "EUR") {
    return price.toLocaleString("fr-FR", {
      style: "currency",
      currency,
    });
  }
};
