import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "wxl3rbvf",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});
