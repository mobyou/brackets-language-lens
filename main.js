define(function (require, exports, module) {
  
  "use strict";
  
  var LanguageManager = brackets.getModule('language/LanguageManager');
  
  var definition = {
    name: 'Lens',
    mode: ['htmlmixed', 'text/x-lens-html'],
    fileExtensions: ['lens'],
    lineComment: ['#']
  };
  
  LanguageManager.defineLanguage('lens', definition).done(function (language) {
    console.log('Language ' + language.getName() + ' is available.');
  });

});
