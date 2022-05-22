import $ from "jquery";
import jQuery from 'jquery';
window.jQuery = $;
// import "jquery-ui-dist/jquery-ui";
require("jquery-ui-dist/jquery-ui");



const renderTools = (canvasTools) => {
  console.log(canvasTools);

  

  const setText=(id)=>{
    
    for (var i in canvasTools) {
      if (canvasTools[i]._id == parseInt(id) +1000 ) {
        canvasTools[i].content = document.getElementById(id).value;
        break
      }
    }
    // renderTools(canvasTools);
  
  }

  $("#canvas").empty();

  
  // $("#canvas").resizable({
  //   maxWidth: window.innerWidth * 0.672,
  //   minWidth: window.innerWidth * 0.672,
  //   handles: "se",
  // });

  for (var t in canvasTools) {
    let currTool = canvasTools[t];

    if (currTool.type !== undefined) {
      let html = "";

      if (currTool.type === "text") {
        //   console.log(currTool.fontSize)
        html = $("<div></div>")
        .resizable({
          helper: "ui-resizable-helper",
          resize: (event, ui) => {
            console.log(ui.helper.width)
            var id = ui.element[0].id;

            for (var i in canvasTools) {
              if (canvasTools[i]._id == id) {
                if (document.getElementById("width") != undefined)
                  document.getElementById("width").value = parseFloat(
                    ui.size.width
                  );
                if (document.getElementById("height") != undefined)
                  document.getElementById("height").value = parseFloat(
                    ui.size.height
                  );
              }
            }
          },
          

          stop: function (event, ui) {
            const u = document.getElementById(currTool._id - 1000);
            document.getElementById(currTool._id - 1000).focus();
            u.style.cssText = `resize:none;width:${
              ui.size.width - 20
            }px;height:${ui.size.height - 20}px;font-size:${
              currTool.fontSize
            }`;
            var id = ui.element[0].id;

            for (var i in canvasTools) {
              if (canvasTools[i]._id == id) {
                
                canvasTools[i].width = ui.size.width;
                canvasTools[i].height = ui.size.height;
              }
            }
            renderTools(canvasTools);
          },
          handles: "se",
        })
          .css({
            position: "absolute",
            border: "10px solid white",
            cursor: "move",
            resize: "both",
            dislay: "flex",
            flexDirection: "column",
            flex: 1,
            overFlow: "scroll",
            
          })
          .append(
            $(
              `<textarea autoFocus placeholder="Text" >${currTool.content}</textarea>`
            )
              .css({
                resize: "none",
                position:"absolute",
                left:0,
                right:0,
                top:0,
                bottom:0,
                fontSize: currTool.fontSize,
                wrap:"hard",
              })
              .attr("id", currTool._id - 1000)
          )
          .attr("id", currTool._id);

          

        html.find("textarea").css({
          width: currTool.width -20,
          height: currTool.height - 20,
          overflow: "none"
        }).bind('input propertychange',()=>{
                setText(currTool._id-1000);
               
        })
      } else if (currTool.type === "video" && currTool.url !== "") {
        html = $("<div></div>")
          .css({
            position: "absolute",
            border: "10px solid white",
            cursor: "move",
            resize: "both",
            dislay: "flex",
            flexDirection: "column",
            flex: 1,
            overFlow: "scroll",
            
          })
          .append(
            $(
              `<iframe src=${currTool.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            )
              .css({
                width: currTool.width,
                height: currTool.height,
              })
              .attr("id", currTool._id - 1000)
          )
          .resizable({
            helper: "ui-resizable-helper",
            resize: (event, ui) => {
              // console.log(ui.size.width)
              var id = ui.element[0].id;

              for (var i in canvasTools) {
                if (canvasTools[i]._id == id) {
                  if (document.getElementById("width") != undefined)
                    document.getElementById("width").value = parseFloat(
                      ui.size.width
                    );
                  if (document.getElementById("height") != undefined)
                    document.getElementById("height").value = parseFloat(
                      ui.size.height
                    );
                }
              }
            },
            

            stop: function (event, ui) {
              const u = document.getElementById(currTool._id - 1000);
              u.style.cssText = `width:${ui.size.width}px;height:${ui.size.height}px;`;
              var id = ui.element[0].id;

              for (var i in canvasTools) {
                if (canvasTools[i]._id == id) {
                  canvasTools[i].width = ui.size.width;
                  canvasTools[i].height = ui.size.height;
                }
              }
              renderTools(canvasTools);
            },
            handles: "se",
          })
          .attr("id", currTool._id);

        html.find("iframe").css({
          width: currTool.width -20,
          height: currTool.height -20,
        });
      } else if (currTool.type === "image" && currTool.url !== "") {
        html = $("<div></div>")
          .css({
            position: "absolute",
            border: "5px solid white",
            padding:"5px",
            cursor: "move",
            resize: "both",
            dislay: "flex",
            flexDirection: "column",
            flex: 1,
            overFlow: "scroll",
          })
          .append(
            $(`<img src=${currTool.url} ></img>`)
              .css({
                width: currTool.width,
                height: currTool.height,
              })
              .attr("id", currTool._id - 1000)
          )
          .resizable({
            helper: "ui-resizable-helper",
            resize: (event, ui) => {
              // console.log(ui.helper.width)
              var id = ui.element[0].id;

              for (var i in canvasTools) {
                if (canvasTools[i]._id == id) {
                  if (document.getElementById("width") != undefined)
                    document.getElementById("width").value = parseFloat(
                      ui.size.width
                    );
                  if (document.getElementById("height") != undefined)
                    document.getElementById("height").value = parseFloat(
                      ui.size.height
                    );
                }
              }
            },

            stop: function (event, ui) {
              const u = document.getElementById(currTool._id - 1000);
              u.style.cssText = `width:${ui.size.width}px;height:${ui.size.height}px;`;
              var id = ui.element[0].id;

              for (var i in canvasTools) {
                if (canvasTools[i]._id == id) {
                  canvasTools[i].width = ui.size.width;
                  canvasTools[i].height = ui.size.height;
                }
              }
              renderTools(canvasTools);
            },
            handles: "se",
          })
          .attr("id", currTool._id);

        html.find("img").css({
          width: currTool.width-20,
          height: currTool.height-20,
        });
      }

      let dom = $(html)
        .css({
          position: "absolute",
          top: currTool.position.top,
          left: currTool.position.left,
          width: currTool.width,
          height: currTool.height,
        })
        .draggable({
          containment: $("#canvas"),
          drag: (event, ui) => {
            var id = ui.helper.attr("id");

            for (var i in canvasTools) {
              if (canvasTools[i]._id == id) {
                if (document.getElementById("y") != undefined)
                  document.getElementById("y").value = parseFloat(
                    ui.position.top
                  );
                if (document.getElementById("x") != undefined)
                  document.getElementById("x").value = parseFloat(
                    ui.position.left
                  );
              }
            }
            //   renderTools(canvasTools);
          },
          stop: (event, ui) => {
            var id = ui.helper.attr("id");

            for (var i in canvasTools) {
              if (canvasTools[i]._id == id) {
                canvasTools[i].position.top = ui.position.top;
                canvasTools[i].position.left = ui.position.left;
              }
            }
            renderTools(canvasTools);
            // console.log("hey!!!!!!!")
          },
        })
        .attr("id", currTool._id);

      $("#canvas").append(dom);
      
    }
  }
};

export default renderTools;
