import { defineConfig } from "tsdown";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const filePath = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  unbundle: false,
  dts: {
    resolve: true,
  },
  outExtensions: (_) => {
    return {
      js: ".js",
      dts: ".d.ts",
    };
  },
  nodeProtocol: true,
  clean: true,
  minify: true,
  shims: true,
  target: "node22",
  sourcemap: false,
  treeshake: true,
  platform: "node",
  outDir: join(filePath, "dist"),
  noExternal: ["puppeteer-core"],
});
