# Create-React-App (CRA) Development Examples
This project contains examples for customizing CRA development experience.
See package.json for further implementations.

# Prereqs:
```
yarn
```

# Proxying api requests:
Add to package.json to forward unknown requests in development to proxy defined. eg
```
"proxy": "http://localhost:4000",
```
More information:
https://create-react-app.dev/docs/proxying-api-requests-in-development

# https with localhost:
```
yarn start-https-local
```

# https with custom host over port (local env)
1. Add custom domain host to /etc/hosts
```
vi /etc/hosts
```
```
127.0.0.1 example.com
```
2. generating dev certs with mkcert:
```
brew install mkcert
mkcert -install
mkcert example.com localhost 127.0.0.1 ::3000
mv *.pem certs
```
3.
``` 
yarn start-https-custom
```

# HTTPS Proxy
1. Add custom domain host to /etc/hosts
```
vi /etc/hosts
```
```
127.0.0.1 example.com
```
2. generating dev certs with mkcert:
```
brew install mkcert
mkcert -install
mkcert example.com localhost 127.0.0.1 ::3000
mv *.pem > certs
```
3.
``` 
yarn start-https-custom
```
or 
install ssl-proxy via 
```
go get https://github.com/suyashkumar/ssl-proxy
```
yarn start-https-custom2
```

Other local https examples:
https://github.com/HugoDF/docker-compose-local-https

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

