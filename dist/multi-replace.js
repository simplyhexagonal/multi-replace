"use strict";
var MultiReplace = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    multiReplace: () => multiReplace,
    multiReplaceSync: () => multiReplaceSync,
    version: () => version
  });

  // package.json
  var version = "1.0.4";

  // src/index.ts
  var multiReplace = async (content, replacePatterns) => {
    const promise = replacePatterns.reduce(
      // @ts-ignore
      async (a, [matcher, replacement]) => {
        const prevReplaceResult = await a;
        if (typeof replacement === "string") {
          return Promise.resolve(prevReplaceResult.replace(matcher, replacement));
        }
        let c = [];
        prevReplaceResult.replace(matcher, (substring, ...args) => {
          c.push(replacement(substring, ...args));
          return "";
        });
        const result = (await Promise.all(c)).reduce(
          (a2, b, i, arr) => a2.replace(matcher, () => arr.shift()),
          prevReplaceResult
        );
        return Promise.resolve(result);
      },
      Promise.resolve(content)
    );
    return await promise;
  };
  var multiReplaceSync = (content, replacePatterns) => replacePatterns.reduce(
    // @ts-ignore
    (a, b) => a.replace(...b),
    content
  );
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=multi-replace.js.map
'undefined'!=typeof module&&(module.exports=MultiReplace),'undefined'!=typeof window&&(MultiReplace=MultiReplace);