import { defineConfig } from "sanity";

export default defineConfig({
  name: "munchies",
  title: "Munchies",
  projectId: process.env.PUBLIC_SANITY_STUDIO_PROJECT_ID || "demo",
  dataset: process.env.PUBLIC_SANITY_STUDIO_DATASET || "production",
  schema: {
    types: [],
  },
});
