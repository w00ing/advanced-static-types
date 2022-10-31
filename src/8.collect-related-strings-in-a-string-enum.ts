// Setting this const will remove mapping function from the output
// Setting "preserveConstEnums": true in tsconfig.json will preserve the mapping function
const enum MediaTypes {
  JSON = "application/json",
}

enum Ports {
  SSL = 443,
}

fetch("https://example.com/api/endpoint", {
  headers: {
    Accept: MediaTypes.JSON,
  },
}).then(response => {
  // ...
});
