const redbird = new require("redbird")({
  port: 8089,
  ssl: {
    port: 443,
    key: "./certs/example.com+3-key.pem",
    cert: "./certs/example.com+3.pem"
  }
});

redbird.register("example.com", "http://127.0.0.1:3000", { ssl: true });