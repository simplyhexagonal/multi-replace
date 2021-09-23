const {
  multiReplace,
  version,
} = require('@simplyhexagonal/multi-replace');

const versionPromise = Promise.resolve(version);

(async () => {
  const result = await multiReplace(
    'This is multi-replace version {{version}}',
    [
      [/\{\{[^\{\}]+?\}\}/, async () => await versionPromise],
    ],
  );

  console.log(result);
})();
