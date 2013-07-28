// Generated by CoffeeScript 1.6.2
/*
	Default Settings of IDE
*/


(function() {
  var Settings;

  Settings = {
    debug: true,
    server: 'http://cup-code/',
    theme: 'ace/theme/monokai',
    mode: 'ace/mode/php',
    fontSize: '14px',
    emmet: true
  };

  /*
  	IDE Definition
  */


  define(['ace/ace'], function(ace) {
    var IDE;

    IDE = (function() {
      function IDE() {}

      IDE._id = 0;

      IDE.$editors = [];

      IDE.$curEditor = null;

      IDE.$fontSize = parseInt(Settings.fontSize);

      IDE.increaseFont = function(key, value) {
        return $('.document').css('fontSize', ++this.$fontSize);
      };

      IDE.decreaseFont = function(key, value) {
        return $('.document').css('fontSize', --this.$fontSize);
      };

      IDE.add = function(elem, val) {
        var editor, id;

        if (val == null) {
          val = "<h1>Hello World!</h1>";
        }
        id = ++this._id;
        editor = ace.edit(elem);
        $(editor.container).addClass('document').css('fontSize', this.$fontSize);
        this.$curEditor = editor;
        editor.setTheme(Settings.theme);
        editor.session.setMode(Settings.mode);
        editor.setValue(val);
        this.$editors[id] = editor;
        return id;
      };

      IDE.remove = function(id) {
        $(this.editors[id].container).remove();
        return delete this.$editors[id];
      };

      return IDE;

    })();
    return window.IDE = IDE;
  });

}).call(this);
