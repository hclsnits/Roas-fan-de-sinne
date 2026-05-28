export default async function newsletterSub({ event }: { event: { data?: { email?: string } } }) {
  console.log("Newsletter subscription", event.data?.email);
}

export const config = {
  event: "newsletter.subscribed",
};
