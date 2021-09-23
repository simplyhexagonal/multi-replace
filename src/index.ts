// @ts-ignore
export { version } from '../package.json';

export type MultiReplaceMatcher = string | RegExp;

export type MultiReplaceReplacement = string | (
  (substring: string, ...args: any[]) => Promise<string>
);

export type MultiReplaceSyncReplacement = string | (
  (substring: string, ...args: any[]) => string
);

export type MultiReplacePatterns = [MultiReplaceMatcher, MultiReplaceReplacement][];

export type MultiReplaceSyncPatterns = [MultiReplaceMatcher, MultiReplaceSyncReplacement][];

export const multiReplace = async (
  content: string | Promise<string>,
  replacePatterns: MultiReplacePatterns,
): Promise<string> => {
  const promise = replacePatterns.reduce(
    // @ts-ignore
    async (a, [matcher, replacement]) => {
      const prevReplaceResult = await a;

      if (typeof replacement === 'string') {
        return Promise.resolve(prevReplaceResult.replace(matcher, replacement));
      }

      let c: Promise<string>[] = [];

      prevReplaceResult.replace(matcher, (substring: string, ...args: any[]) => {
        c.push(replacement(substring, ...args));

        return '';
      });

      const result = (await Promise.all(c)).reduce(
        (a, b, i, arr) => a.replace(matcher, () => arr.shift() as string),
        prevReplaceResult,
      );

      return Promise.resolve(result);
    },
    Promise.resolve(content),
  );

  return await promise;
}

export const multiReplaceSync = (
  content: string,
  replacePatterns: MultiReplaceSyncPatterns,
) => replacePatterns.reduce(
  // @ts-ignore
  (a, b) => a.replace(...b),
  content,
);
