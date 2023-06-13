import { dirname as pathDirname } from "node:path";
import { fileURLToPath } from "node:url";
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
function underscorePath(importMetaURL: string): UnderscorePathOutput {
	let __filename: string = fileURLToPath(importMetaURL);
	let __dirname: string = pathDirname(__filename);
	return {
		__dirname,
		__filename
	};
}
export default underscorePath;
export {
	underscorePath,
	type UnderscorePathOutput
};
