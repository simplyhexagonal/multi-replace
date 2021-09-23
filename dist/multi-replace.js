var MultiReplace = (() => {
  var __defProp = Object.defineProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = typeof require !== "undefined" ? require : (x) => {
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    multiReplace: () => multiReplace,
    multiReplaceSync: () => multiReplaceSync,
    version: () => version
  });

  // package.json
  var version = "1.0.2";

  // src/index.ts
  var multiReplace = async (content, replacePatterns) => {
    const promise = replacePatterns.reduce(async (a, [matcher, replacement]) => {
      const prevReplaceResult = await a;
      if (typeof replacement === "string") {
        return Promise.resolve(prevReplaceResult.replace(matcher, replacement));
      }
      let c = [];
      prevReplaceResult.replace(matcher, (substring, ...args) => {
        c.push(replacement(substring, ...args));
        return "";
      });
      const result = (await Promise.all(c)).reduce((a2, b, i, arr) => a2.replace(matcher, () => arr.shift()), prevReplaceResult);
      return Promise.resolve(result);
    }, Promise.resolve(content));
    return await promise;
  };
  var multiReplaceSync = (content, replacePatterns) => replacePatterns.reduce((a, b) => a.replace(...b), content);
  return src_exports;
})();
//# sourceMappingURL=multi-replace.js.map
'undefined'!=typeof module&&(module.exports=MultiReplace),'undefined'!=typeof window&&(MultiReplace=MultiReplace);