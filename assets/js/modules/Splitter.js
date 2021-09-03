class Splitter {
  constructor(content) {
    this.content = content;
  }

  fullText() {
    this.createElt(this.content);
  }

  textLinebreak() {
    const lines = this.content.split("\n");
    console.log(lines);
    const mergedLines = join(lines, "<br />")
    this.createElt(mergedLines);
  }

  lines() {
    let lines = this.content.split("\n");
    let y = 225;
    lines.forEach(line => {
      this.createEltPos(line, y);
      y += 20
    });
  }

  words() {
    let regex = /\W+/;
    let words = splitTokens(this.content, regex);
    let y = 225;
    words.forEach(word => {
      this.createEltPos(word, y);
      y += 20
    });
  }

  createElt(elt) {
    let p = createSpan(elt);
    p.addClass('ui-widget-content draggable resizable');
  }

  createEltPos(elt, y) {
    let p = createSpan(elt);
    p.addClass('ui-widget-content draggable resizable');
    p.position(10, y);
  }
}

// createElt(elt) {
//   const p = document.createElement('span');
//   p.innerText = elt;
//   p.className = "ui-widget-content draggable resizable";
//   document.querySelector('#multidraggable').appendChild(p)
//   // let p = createP(elt);
//   // p.addClass('ui-widget-content draggable resizable');
// }

// createEltPos(elt, y) {
//   const p = document.createElement('span');
//   p.innerText = elt;
//   p.className = "ui-widget-content draggable resizable";
//   p.style.top = '10';
//   p.style.left = y;

//   document.querySelector('#multidraggable').appendChild(p)

// }