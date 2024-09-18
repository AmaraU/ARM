export const formatNumberStar = (phone) => {
  return `+234-${phone.slice(0, 4).replace(/\d/g, "*") + phone.slice(-4)}`;
};
