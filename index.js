const { execFile } = require("child_process");
const { join } = require("path");

const SnippetsLabCliPath = join(__dirname, "./SnippetsLab");

function executeSnippetsLabAlfredWorkflowCli({
  action = "search",
  query,
  signal,
}) {
  return new Promise((resolve, reject) => {
    execFile(
      SnippetsLabCliPath,
      [`--action=${action}`, `--query="${query}"`],
      { shell: true, signal },
      (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        const data = JSON.parse(stdout);
        resolve(data);
      }
    );
  });
}

module.exports = {
  executeSnippetsLabAlfredWorkflowCli,
};
