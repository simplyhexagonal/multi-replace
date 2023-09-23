export { version } from '../package.json';
export type MultiReplaceMatcher = string | RegExp;
export type MultiReplaceReplacement = string | ((substring: string, ...args: any[]) => Promise<string>);
export type MultiReplaceSyncReplacement = string | ((substring: string, ...args: any[]) => string);
export type MultiReplacePatterns = [MultiReplaceMatcher, MultiReplaceReplacement][];
export type MultiReplaceSyncPatterns = [MultiReplaceMatcher, MultiReplaceSyncReplacement][];
export declare const multiReplace: (content: string | Promise<string>, replacePatterns: MultiReplacePatterns) => Promise<string>;
export declare const multiReplaceSync: (content: string, replacePatterns: MultiReplaceSyncPatterns) => string;
declare const _default: {
    multiReplace: (content: string | Promise<string>, replacePatterns: MultiReplacePatterns) => Promise<string>;
    multiReplaceSync: (content: string, replacePatterns: MultiReplaceSyncPatterns) => string;
};
export default _default;
