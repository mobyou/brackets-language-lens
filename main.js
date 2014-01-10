define(function (require, exports, module) {
  "use strict";
  var LanguageManager = brackets.getModule("language/LanguageManager");
  LanguageManager.defineLanguage("julia", {"name":"Julia","mode":"julia","fileExtensions":["jl"],"lineComment":["#"]});
});