export default function fetchSlides(slide) {
  let id = slide.id.integerValue;
  let name = slide.name.stringValue;
  let chapter = slide.chapter.integerValue;
  let canvasTools = [];
  slide.content.arrayValue.values.map((item, index) => {
    let curr = item.mapValue.fields;
    // console.log(curr)
    let content = curr.content !== undefined ? curr.content.stringValue : null;
    let _id = curr._id.integerValue;
    let fontSize =
      curr.fontSize !== undefined ? curr.fontSize.integerValue : null;
    let type = curr.type.stringValue;
    let height = curr.height.integerValue;
    let width = curr.width.integerValuewidth;
    let position = {
      top: curr.position.mapValue.fields.top.integerValue,
      left: curr.position.mapValue.fields.left.integerValue,
    };
    let url = curr.url !== undefined ? curr.url.stringValue : null;

    let tmp = {
      _id: _id,
      content: content,
      fontSize: fontSize,
      type: type,
      height: height,
      width: width,
      position: position,
      url: url,
    };
    canvasTools.push(tmp);
  });

  return { id: id, name: name, chapter: chapter, slides: canvasTools };
}
