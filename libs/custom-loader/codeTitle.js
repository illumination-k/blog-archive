"use strict";

const visit = require("unist-util-visit");

const prefix = ":title=";

module.exports = codeTitle;

function codeTitle() {
  return transformer;

  function transformer(ast) {
    visit(ast, "code", (node, index) => {
      const lang = node.lang || "";

      const separatorIndex = lang.lastIndexOf(prefix);
      let newLang = lang;

      if (separatorIndex !== -1) {
        newLang = lang.slice(0, separatorIndex);
        const title = lang.slice(separatorIndex + prefix.length);

        const titleNodeclassName = "code-title";

        const titleNode = {
          type: "html",
          value: `
            <div class="${titleNodeclassName}"><span>${title}</span></div>
          `.trim(),
        };

        ast.children.splice(index, 0, titleNode);
      }

      node.lang = newLang;
    });
  }
}
