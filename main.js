define(function (require, exports, module) {
  "use strict";
  var LanguageManager = brackets.getModule("language/LanguageManager");
  LanguageManager.defineLanguage("lens", {
      "name":"lens",
      "mode":"lens",
      "fileExtensions":["lens"],
      "lineComment":["#"]
  });
});