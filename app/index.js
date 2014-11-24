'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var BowerGulpGenerator = yeoman.generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to BowerGulp generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'packageName',
      message: 'What is the name of your package?',
      default: this.appname,
      store: true
    }, {
      type: 'input',
      name: 'version',
      message: 'What is your starting version number?',
      default: '0.0.0',
      store: true
    }];

    this.prompt(prompts, function(props) {
      this.packageName = props.packageName;
      this.version = props.version;

      done();
    }.bind(this));
  },

  writing: {
    app: function() {
      this.dest.mkdir('src');
      this.dest.mkdir('tests');

      this.copy('_package.json', 'package.json');
      this.copy('_bower.json', 'bower.json');
      this.copy('_gulpfile.js', 'gulpfile.js');
      this.copy('_bower-component.js', 'src/' + this.packageName + '.js');
      this.copy('_bower-component-tests.js', 'tests/' + this.packageName + '-tests.js');
    },

    projectfiles: function() {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function() {
    this.installDependencies();
  }
});

module.exports = BowerGulpGenerator;