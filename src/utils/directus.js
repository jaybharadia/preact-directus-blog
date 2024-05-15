import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus("https://directus-supabase.onrender.com").with(
    rest()
);
export default directus;
