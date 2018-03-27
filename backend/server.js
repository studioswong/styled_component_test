var SPEC = {
  swagger: "2.0",
  info: {
    title: "Hello API",
    version: "1.0.0"
  },
  basePath: "/api",
  paths: {
    "/hello/:name": {
      "get": {
        tags: [ "Hello" ],
        summary: "Says hello",
        parameters: [
          { name: "name",
            in: "path",
            type: "string",
            default: "World" },
          { name: "punctuation",
            in: "query",
            type: "string",
            required: true }
        ],
        responses: {
          "200": {
            description: "Everything went well :)",
            schema: { $ref: "#/definitions/Message" }
          },
          "400": {
            description: "Issue with the parameters"
          }
        }
      }
    }
  },
  definitions: {
    Message: {
      required: [ "message" ],
      properties: {
        message: {
          type: "string"
        }
      }
    }
  }
};
 
var app = require("koa")();
app.use(require("koa-bodyparser")());
app.use(require("koa-swagger")(SPEC));
 
var _ = require("koa-route");
app.use(_.get("/api/hello/:name", function* () {
  console.log("HERE!");
  this.body = {
    message: "Hello " + this.parameter.name + this.parameter.punctuation
  };
}));
app.listen(3000);
