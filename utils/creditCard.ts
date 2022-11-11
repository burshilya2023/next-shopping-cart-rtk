//?(not use) for futre
const creditCard = "4452.1342.5412.5433";
export function maskify(creditCard: string) {
  return creditCard.slice(0, -4).replace(/./g, "#") + creditCard.slice(-4);
}