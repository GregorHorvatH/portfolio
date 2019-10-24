var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var secret = require("./secret.js");

var config = {
  user: secret.user,
  // Password optional, prompted if none given
  password: secret.password,
  host: secret.host,
  port: 21,
  localRoot: __dirname + "/../build",
  remoteRoot: "/http/",
  // include: ['*', '**/*'],      // this would upload everything except dot files
  include: ["*", "**/*"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: ["**/*.map", "node_modules/**", "node_modules/**/.*"],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true
};

ftpDeploy.on("upload-error", function (data) {
  console.log(data.err); // data will also include filename, relativePath, and other goodies
});

// use with promises
ftpDeploy
  .deploy(config)
  .then(res => {
    console.log("finished:", res);
    process.exit();
  })
  .catch(err => console.log(err));

// use with callback
ftpDeploy.deploy(config, function (err, res) {
  if (err) console.log(err);
  else console.log("finished:", res);
});


// ************************
// secret.js
// ************************

// module.exports = {
//   user: "user",
//   // Password optional, prompted if none given
//   password: "password",
//   host: "host",
// };
