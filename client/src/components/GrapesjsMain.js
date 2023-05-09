import React, { useEffect, } from "react";
import Grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";
import dynamicConfig from "./grapesjsConfig";
import '../grapesjs-component-code-editor.min.css';
import "grapesjs-preset-newsletter";
import juice from "juice";

const GrapesjsMain = (props) => {
  useEffect(() => {
    loadGrapesJs();
  }, []);
  const loadGrapesJs = async () => {
    const editor = Grapesjs.init({ ...dynamicConfig() });
    window.editor = editor;

    const frameEl = editor.Canvas.getFrameEl();
    const linkEl = document.createElement('link');
    linkEl.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    linkEl.rel = 'stylesheet';
    frameEl.contentDocument.head?.appendChild(linkEl);

    editor.BlockManager.add('row', {
      label: '<b>Row</b>',
      category: "Layout",
      content: '<div class="row" style="height:150px ;         background-color: rgba(110, 228, 127, 0.991);"><p > row </p></div>',
    });
    editor.BlockManager.add('container', {
      label: '<b>Container</b>',
      category: "Layout",
      content: '<div class="container" style="height:700px ;     background-color: rgb(139, 219, 219);"><p > container </p></div>',
    });
    editor.BlockManager.add("grid", {
      label: "Grid 2",
      category: "Layout",
      content: gridTemplate
    });
    editor.setComponents('');
    editor.on("load", function () {
      var pfx = editor.getConfig().stylePrefix;
      var modal = editor.Modal;
      var cmdm = editor.Commands;
      var codeViewer = editor.CodeManager.getViewer("CodeMirror").clone();
      var pnm = editor.Panels;
      var container = document.createElement("div");
      var btnEdit = document.createElement("button");

      codeViewer.set({
        codeName: "htmlmixed",
        readOnly: false,
        theme: "hopscotch",
        autoBeautify: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        styleActiveLine: true,
        smartIndent: true,
        indentWithTabs: true
      });

      btnEdit.innerHTML = "Edit";
      btnEdit.className = pfx + "btn-prim " + pfx + "btn-import";
      btnEdit.onclick = function () {
        var code = codeViewer.editor.getValue();
        editor.DomComponents.getWrapper().set("content", "");
        editor.setComponents(code.trim());
        modal.close();
      };
   

      cmdm.add("html-edit", {
        run: function (editor, sender) {
          sender && sender.set("active", 0);
          var viewer = codeViewer.editor;
      
          modal.setTitle("Edit code");
          if (!viewer) {
            var txtarea = document.createElement("textarea");
            container.appendChild(txtarea);
            container.appendChild(btnEdit);
            codeViewer.init(txtarea);
            viewer = codeViewer.editor;
      
            // Add extraKeys here
            codeViewer.editor.setOption("extraKeys", {
              "Ctrl-S": function() {
                var code = codeViewer.editor.getValue();
                editor.setComponents(code.trim());
                modal.close();
              }
            });
          }
  
          
          var InnerHtml = editor.getHtml();
          var Css = editor.getCss();
          modal.setContent("");
          modal.setContent(container);
          codeViewer.setContent(
            juice(InnerHtml + "<style>" + Css + "</style>"),
            {}
          );
      
          modal.open();
          viewer.refresh();
        }
      });
      pnm.addButton("options", [
        {
          id: "edit",
          className: "fa fa-edit",
          command: "html-edit",
          attributes: {
            title: "Edit"
          }
        }
      ]);
    });
  };


  const gridTemplate = `
    <div class="row" style="height:500px;">
          <div class="col-6" style="background-color: rgb(139, 219, 146);">
            <div class="grid-cell">Cell 1</div>
          </div>
          <div class="col-6" style="background-color: rgb(139, 219, 146);">
            <div class="grid-cell">Cell 2</div>
          </div>
    </div>
`;

  const saveCode = () => {
    const html = window.editor.getHtml();
    const css = window.editor.getCss();
    const code = `<html><head><style>${css}</style></head><body>${html}</body></html>`;
    props.props(code)
  };

  return (
    <>

      <div className="mt-3 pl-1">
        <div id="gjs"></div>
      <div className="container ml-5 ">
        <button className="btn btn-success ml-5 m-5" style={{ marginRight: "35px" }} onClick={saveCode}>сохранить контент</button>
        </div>
      </div>
    </>
  );
};

export default GrapesjsMain;