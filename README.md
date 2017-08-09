# Reactor

My go-to config for react projects

## Features
* modular css
* babel-env

## Usage

#### development

`make dev`

Starts webpack dev server listening on port 8080

[localhost:8080](http://localhost:8080)

#### deployment (dockerized)

```
make build              # builds docker image
make run                # starts nginx server running in docker on port 80
```

[localhost](http://localhost)

##### TODO
* add support for redux
