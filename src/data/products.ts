/**
 * Barrel re-export for backwards compatibility.
 *
 * The product data has been split into focused modules:
 *  - product-types.ts    — TypeScript interfaces
 *  - product-catalog.ts  — the `categories` array + `getAllProducts`
 *  - product-helpers.ts  — lookup/helper functions
 *
 * Existing `import { ... } from "@/data/products"` continues to work.
 */
export * from "./product-types";
export * from "./product-catalog";
export * from "./product-helpers";
