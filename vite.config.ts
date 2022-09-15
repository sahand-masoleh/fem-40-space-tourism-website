import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: [
			{
				find: "@components",
				replacement: path.resolve(__dirname, "./src/components"),
			},
			{
				find: "@assets",
				replacement: path.resolve(__dirname, "./src/assets"),
			},
			{
				find: "@styles",
				replacement: path.resolve(__dirname, "./src/styles"),
			},
			{
				find: "@routes",
				replacement: path.resolve(__dirname, "./src/routes"),
			},
			{
				find: "@data",
				replacement: path.resolve(__dirname, "./src/data"),
			},
			{
				find: "@hooks",
				replacement: path.resolve(__dirname, "./src/hooks"),
			},
			{
				find: "@utils",
				replacement: path.resolve(__dirname, "./src/utils"),
			},
		],
	},
});
