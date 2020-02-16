const proxy = require("redbird")({
  port: 80,
  letsencrypt: {
    path: __dirname + "/certs",
    port: 9999
  },
  ssl: {
    http2: true,
    port: 443
  }
});

//TODO...
proxy.register("example.com", "http://127.0.0.1:3000", {
  ssl: {
    letsencrypt: {
      email: "neil0blake@gmail.com",
      production: false
    }
  }
});
