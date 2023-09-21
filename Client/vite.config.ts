import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import copy from "rollup-plugin-copy";

export default defineConfig(async ({ command, mode }) => {
    return {
        plugins: [vue()],
        build: {
            manifest: true,
            outDir: "../wwwroot/dist",
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    main: "src/main.ts"
                },
                output: {
                    entryFileNames: "[hash].[name].js",
                    chunkFileNames: "[hash].[name].js",
                    assetFileNames: "[hash].[name].[ext]"
                },
                plugins: [
                    copy({
                        targets: [{ src: "src/assets", dest: "../wwwroot/dist/public" }]
                    })
                ]
            }
        },
        server: {
            port: 5173,
            strictPort: true,
            hmr: {
                clientPort: 5173
            }
        }
    };
});

