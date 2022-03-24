import * as i18n from "./ducks/i18n";
import * as builder from "./ducks/builder";

/**
 * Reexports
 */
export * from "../utils/utils";
export * from "./layout/LayoutContext";
export * from "./layout/LayoutConfig";
export { default as LayoutConfig } from "./layout/LayoutConfig";
export { default as LayoutInitializer } from "./layout/LayoutInitializer";
export { I18nProvider } from "./ducks/i18n";

/**
 * Ducks
 */

export const spyld = { i18n, builder };
