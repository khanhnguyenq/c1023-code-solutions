type Product = {
  name: string;
  price: number;
  quantity: number;
};

export function calculateTotalSalesWithTax(
  products: Product[],
  taxRate: number
): number {
  const totalIndividually = products.map((x) => x.price * x.quantity);
  const totalPreTax = totalIndividually.reduce((total, curr) => total + curr);
  const totalWithTax = totalPreTax + totalPreTax * (taxRate / 100);
  return totalWithTax;
}
