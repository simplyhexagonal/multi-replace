import {
  MultiReplacePatterns,
  MultiReplaceSyncPatterns,
  multiReplace,
  multiReplaceSync,
} from './';

const mockContent = 'Almost before we knew it, NUM of us had _(verb) the _(place).';

const replacementMap: MultiReplacePatterns = [
  ['NUM', '42'],
  [/_\(([^\(\)]+?)\)/g, async (substring: string, varName: string) => {
    console.log('varName', varName);
    const replacements = {
      verb: 'left',
      place: 'ground'
    };

    return replacements[varName as keyof typeof replacements];
  }],
];

const syncReplacementMap: MultiReplaceSyncPatterns = [
  ['NUM', 'all'],
  [/_\(([^\(\)]+?)\)/g, (substring: string, varName: string) => {
    console.log('varName', varName);
    const replacements = {
      verb: 'escaped',
      place: 'edge of the galaxy'
    };

    return replacements[varName as keyof typeof replacements];
  }],
];

describe('parallel async multi replacement', () =>{
  it('can perform async multi-replace', async () => {
    const promise = multiReplace(mockContent, replacementMap);
    console.log(promise);
    const result = await promise;
    console.log(result);

    expect(result).toBe('Almost before we knew it, 42 of us had left the ground.');
  });
});

describe('synchronous multi replacement', () =>{
  it('can perform synchronous multi-replace', async () => {
    const result = multiReplaceSync(mockContent, syncReplacementMap);

    expect(result).toBe('Almost before we knew it, all of us had escaped the edge of the galaxy.');
  });
});
