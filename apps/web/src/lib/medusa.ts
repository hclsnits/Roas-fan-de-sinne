export const medusaConfig = {
  backendUrl: import.meta.env.MEDUSA_BACKEND_URL || "http://localhost:9000",
  publishableKey: import.meta.env.MEDUSA_PUBLISHABLE_KEY || "",
};

export async function getFeaturedProducts() {
  return [
    { id: "prod_soap", title: "Small Batch Snacks", handle: "small-batch-snacks" },
    { id: "prod_cookies", title: "Cookie Box", handle: "cookie-box" },
    { id: "prod_soda", title: "Craft Soda", handle: "craft-soda" },
  ];
}
