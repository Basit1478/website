import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "ci6cb06h", // Replace with your Sanity project ID
  dataset: "production",
  apiVersion: "2025-02-03",
  useCdn: true,
});

export default sanityClient;
