var Commander = require("commander");
var Rimraf = require("rimraf");
var _ = require("underscore");
var Path = require("path");
var FS = require("fs");

var Server = require("./src/build/express");
var Compiler = require("./src/build/webpack");

Commander
    .option("-m, --mode <s>", "Build Mode")
    .option("-r, --remove", "Remove Build Output Files")
    .option("-c, --compile", "Compile Source Files")
    .option("-s, --server", "Launch Express File Server")
    .parse(process.argv);

var public = Path.join(__dirname, "public");

if (Commander.remove) {
    Rimraf.sync(public);
}

// Since the rest of the script requires a mode, we will exit here to prevent errors.
if (!Commander.mode) { return; }

var directory = Path.join(__dirname, "src", "config", Commander.mode);

var config = {
    app: require(Path.join(directory, "app.config")),
    webpack: require(Path.join(directory, "webpack.config"))
};

console.log("----------------------------------------------------------");
console.log("Starting", config.app.name, "(v" + config.app.version + ")");
console.log("----------------------------------------------------------");

if (Commander.server) {
    Server.start(config.app);
}

// The entry file will diff on the config. For example specs can be loaded in modes that isn't live.
if (Commander.compile) {
    // Use Underscore's templating engine to generate the index file based on the given config.
    var template = _.template(FS.readFileSync(Path.join(__dirname, "src", "index.html"), "utf8"));
    
    // Ensure public directory exists
    try { FS.mkdirSync(public); } catch(e) {}

    // Write file to public/html
    FS.writeFileSync(Path.join(public, "index.html"), template(config.app));

    Compiler.start(config.webpack(Commander.mode));
}
