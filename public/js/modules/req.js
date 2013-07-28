// Generated by CoffeeScript 1.6.3
/*
	Request JS
	Any kind of request will be handled by this module.
*/


(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'editor'], function($, _, B, editor) {
    var Project, activeProject, p1, _ref;
    activeProject = '51d70d2ba9d17';
    $.get(Settings.server + 'js/data/code_mode.json', function(modes) {
      return editor.modes = modes;
    });
    Project = (function(_super) {
      __extends(Project, _super);

      function Project() {
        _ref = Project.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Project.prototype.defaults = {
        title: 'New Project'
      };

      Project.prototype._id = 'hash_id';

      Project.prototype.urlRoot = Settings.server;

      Project.prototype.url = function() {
        return this.urlRoot + "projects/" + this.get('id');
      };

      return Project;

    })(Backbone.Model);
    p1 = new Project({
      id: activeProject
    });
    p1.on("sync", function() {
      var data, frag, process, treelist;
      data = {};
      frag = document.createDocumentFragment();
      data[this.get('title')] = this.get('data');
      process = function(d, first) {
        var dir_div, file, file_div, i, j, li, span, ul;
        ul = document.createElement('ul');
        if (first) {
          ul.className = 'treelist';
        }
        for (i in d) {
          if (i !== ':' && d.hasOwnProperty(i)) {
            li = document.createElement('li');
            li.className = 'dir';
            dir_div = document.createElement('div');
            li.appendChild(dir_div);
            dir_div.innerHTML = i;
            span = document.createElement('span');
            dir_div.appendChild(span);
            ul.appendChild(li);
            li.appendChild(process(d[i]));
          }
        }
        if (i === ':') {
          for (j in d[i]) {
            file = d[i][j];
            li = document.createElement('li');
            file_div = document.createElement('div');
            li.className = 'file';
            li.appendChild(file_div);
            file_div.innerHTML = file.name;
            li.path = file.path;
            ul.appendChild(li);
          }
        }
        return ul;
      };
      frag.appendChild(process(data, true));
      treelist = $('.treelist_wrapper');
      if (treelist.length) {
        treelist.html('');
        treelist[0].appendChild(frag);
      }
      return treelist.treelist({
        'click': function(path) {
          return p1.trigger('request:file', path);
        }
      });
    });
    p1.fetch();
    return p1.on('request:file', function(data) {
      return $.get(Settings.server + 'file/1', {
        project_id: activeProject,
        file: data
      }, function(res) {
        var mode;
        mode = res.name.split('.').pop();
        if (editor.modes[mode]) {
          console.log("ace/mode/" + editor.modes[mode]);
          editor.$curEditor.session.setMode("ace/mode/" + editor.modes[mode]);
        }
        editor.$curEditor.setValue(res.content);
        editor.$curEditor.moveCursorTo(0, 0);
        return editor.$curEditor.focus();
      });
    });
  });

}).call(this);

/*
//@ sourceMappingURL=req.map
*/
