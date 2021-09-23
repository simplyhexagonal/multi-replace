export { version } from '../package.json';
export declare type MultiReplaceMatcher = string | RegExp;
export declare type MultiReplaceReplacement = string | ((substring: string, ...args: any[]) => Promise<string>);
export declare type MultiReplaceSyncReplacement = string | ((substring: string, ...args: any[]) => string);
export declare type MultiReplacePatterns = [MultiReplaceMatcher, MultiReplaceReplacement][];
export declare type MultiReplaceSyncPatterns = [MultiReplaceMatcher, MultiReplaceSyncReplacement][];
export declare const multiReplace: (content: string | Promise<string>, replacePatterns: MultiReplacePatterns) => Promise<string>;
export declare const multiReplaceSync: (content: string, replacePatterns: MultiReplaceSyncPatterns) => string;
