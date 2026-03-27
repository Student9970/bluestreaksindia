export const PERSONAS = {
  administrator: "Administrator",
  product_manager: "Product Manager",
  dealer_relations: "Dealer Relations",
  customer_support: "Customer Support",
  finance_manager: "Finance Manager",
};

export function getPersonaAccess(persona) {
  const access = {
    administrator: ["dashboard", "products", "partnership", "finance", "contact", "users"],
    product_manager: ["dashboard", "products"],
    dealer_relations: ["dashboard", "partnership"],
    customer_support: ["dashboard", "contact"],
    finance_manager: ["dashboard", "finance"],
  };
  return access[persona] || [];
}
