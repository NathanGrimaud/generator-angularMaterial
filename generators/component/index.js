var generators = require('yeoman-generator');
var replace = require("replace");

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);
        this._moduleName = this.config.get("moduleName");
        this._routerPath = this.config.get("routerPath");
        this._indexPath = this.config.get("indexPath");
        this.argument('componentName', { type: String, required: true });
    },

    // function used to copy the templates
  writing: function () {
      this._path = `./app/src/components/${this.componentName}`;
        this.fs.copyTpl(
            this.templatePath('index.controller.js'),
            this.destinationPath(`${this._path}/${this.componentName}.controller.js`),
            { componentName: this.componentName, moduleName : this._moduleName}
        );
        this.fs.copyTpl(
            this.templatePath('index.directives.js'),
            this.destinationPath(`${this._path}/${this.componentName}.directives.js`)
        );
        this.fs.copyTpl(
            this.templatePath('services/index.service.js'),
            this.destinationPath(`${this._path}/services/${this.componentName}.service.js`),
            { componentName: this.componentName, moduleName:this._moduleName }
        );
        this.fs.copyTpl(
            this.templatePath('views/index.html'),
            this.destinationPath(`${this._path}/views/${this.componentName}.html`),
            { componentName: this.componentName, moduleName:this._moduleName }
        );
  },
  editing: function(){
    replace({
        regex: "// auto-generated routes :",
        replacement: createRoutes(this.componentName),
        paths: [this._routerPath],
        recursive: false,
        silent: true,
    });
    replace({
        regex: "<!-- componentGeneration -->",
        replacement: createScript(this.componentName),
        paths: [this._indexPath],
        recursive: false,
        silent: true,
    });
  }
});

function createRoutes(componentName){
  var route = `// auto-generated routes :
        .state('${componentName}',{
            url : '/${componentName}',
            controller: '${componentName}Controller',
            templateUrl: 'src/components/${componentName}/views/${componentName}.html'
        })`;
  return route;
}
function createScript(componentName){
    var script= `<!-- ${componentName} component -->
    <script src=\"src/components/${componentName}/${componentName}.controller.js\"></script>
    <script src=\"src/components/${componentName}/${componentName}.directives.js\"></script>
    <script src=\"src/components/${componentName}/services/${componentName}.service.js\"></script>
    <!-- componentGeneration -->`;
    return script;
}