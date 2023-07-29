export interface UnderscorePathOutput {
    __dirname: string;
    __filename: string;
}
/**
 * Bring back `__dirname` and `__filename` within 2 lines.
 * @param {string} importMetaURL Insert `import.meta.url`.
 * @returns {UnderscorePathOutput} Output.
 */
export declare function underscorePath(importMetaURL: string): UnderscorePathOutput;
export default underscorePath;
//# sourceMappingURL=main.d.ts.map