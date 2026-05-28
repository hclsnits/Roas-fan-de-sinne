export default async function sanityProductSync({ event }: { event: { data?: { id?: string } } }) {
  console.log("Sync product to Sanity", event.data?.id);
}

export const config = {
  event: ["product.created", "product.updated"],
};
