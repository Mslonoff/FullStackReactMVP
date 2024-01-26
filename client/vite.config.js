import dotenv from "dotenv";
import react from "@vitejs/plugin-react-swc";

dotenv.config({ path: "../.env" });

export default {
  plugins: [react()],
  server: {
    proxy: {
      "/api": `http://127.0.0.1:${8005}`,
    },
  },
  cacheDir: "../node_modules/.vite",
};
