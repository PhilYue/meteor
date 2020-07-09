Package.describe({
  name: "ecmascript-runtime-server",
  version: "0.10.0-beta1103.5",
  summary: "Polyfills for new ECMAScript 2015 APIs like Map and Set",
  git: "https://github.com/meteor/meteor/tree/devel/packages/ecmascript-runtime-client",
  documentation: "README.md"
});

Npm.depends({
  "core-js": "3.6.5"
});

Package.onUse(function(api) {
  api.use("modules");
  api.mainModule("runtime.js", "server");
});
