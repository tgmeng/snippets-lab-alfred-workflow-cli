const { executeSnippetsLabAlfredWorkflowCli } = require("./");
const assert = require("assert").strict;

executeSnippetsLabAlfredWorkflowCli({
  query: "array",
}).then(data => {
  assert(Array.isArray(data.items), "data.items should be an array");
});
