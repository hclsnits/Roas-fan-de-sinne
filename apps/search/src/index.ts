type SearchItem = {
  id: string;
  title: string;
  handle: string;
};

const items: SearchItem[] = [
  { id: "prod_soap", title: "Small Batch Snacks", handle: "small-batch-snacks" },
  { id: "prod_cookies", title: "Cookie Box", handle: "cookie-box" },
  { id: "prod_soda", title: "Craft Soda", handle: "craft-soda" },
];

export default {
  async fetch(request: Request) {
    const url = new URL(request.url);
    const query = url.searchParams.get("q")?.toLowerCase() || "";
    const results = items.filter((item) => item.title.toLowerCase().includes(query));

    return Response.json({ query, results });
  },
};
