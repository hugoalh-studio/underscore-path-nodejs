import { dirname as pathDirname } from "node:path";
import { fileURLToPath } from "node:url";
/**
 * @function underscorePath
 * @description Bring back `__dirname` and `__filename` within 2 lines.
 * @param {string} importMetaURL Insert `import.meta.url`.
 * @returns {UnderscorePathOutput} Output.
 */
function underscorePath(importMetaURL) {
    let __filename = fileURLToPath(importMetaURL);
    let __dirname = pathDirname(__filename);
    return {
        __dirname,
        __filename
    };
}
export default underscorePath;
export { underscorePath };
