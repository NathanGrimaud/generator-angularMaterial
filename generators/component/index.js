var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);
        this.argument('componentName', { type: String, required: true });

    },

  writing: function () {
      this._path = `./app/src/components/${this.componentName}`;
        this.fs.copyTpl(
            this.templatePath('index.controller.js'),
            this.destinationPath(`${this._path}/${this.componentName}.controller.js`),
            { componentName: `${this.componentName}` }
        );
        this.fs.copyTpl(
            this.templatePath('index.directives.js'),
            this.destinationPath(`${this._path}/${this.componentName}.directives.js`)
        );
        this.fs.copyTpl(
            this.templatePath('services/index.service.js'),
            this.destinationPath(`${this._path}/services/${this.componentName}.service.js`),
            { componentName: `${this.componentName}` }
        );
        this.fs.copyTpl(
            this.templatePath('views/index.html'),
            this.destinationPath(`${this._path}/views/${this.componentName}.html`),
            { componentName: `${this.componentName}` }
        );
  }
});