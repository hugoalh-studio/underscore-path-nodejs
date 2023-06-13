interface UnderscorePathOutput {
    __dirname: string;
    __filename: string;
}
/**
 * @function underscorePath
 * @description Bring back `__dirname` and `__filename` within 2 lines.
 * @param {string} importMetaURL Insert `import.meta.url`.
 * @returns {UnderscorePathOutput} Output.
 */
declare function underscorePath(importMetaURL: string): UnderscorePathOutput;
export default underscorePath;
export { underscorePath, type UnderscorePathOutput };
//# sourceMappingURL=main.d.ts.map