var self = require('sdk/self');
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.reddit.com",
  exclude: /.*\/comments\/.*/,
  contentScriptWhen: "ready",
  contentScriptFile: [self.data.url("jquery-3.1.0.min.js"), self.data.url("reddit-rift-home.js")]
});

pageMod.PageMod({
  include: /.*reddit-url=.*/,
  contentScriptWhen: "ready",
  contentScriptFile: self.data.url("reddit-rift-split.js"),
  contentStyleFile: self.data.url("reddit-rift-split.css")
});
