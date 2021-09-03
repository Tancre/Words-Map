function setup() {
  noCanvas();
  minimapInit();
  
  const textArea = select('#textArea');
  const submit = select('#submit');

  dropFile(textArea);

  submit.mousePressed(() => {
    const selected = document.querySelector('select').value;
    const content = textArea.value();

    const splitter = new Splitter(content);

    switch (parseInt(selected)) {
      case 0:
        splitter.fullText();
        break;
      case 1:
        splitter.textLinebreak()
        break;
      case 2:
        splitter.lines()
        break;
      case 3:
        splitter.words()
        break;
      case 4:
        splitter.textLinebreak()
        break;
      case 4:
        break;
    }

    const dragResize = new DragResize();
    deleteElm();
  });
}

function dropFile(area) {
  dropzone = area
  dropzone.dragOver(() => dropzone.style('background-color', '#ccc'));
  dropzone.dragLeave(() => dropzone.style('background-color', '#fff'));
  dropzone.drop(gotFile, () => dropzone.style('background-color', '#fff'));

  function gotFile(file) {
    const textArea = select('#textArea');
    textArea.value(file.data);
  }
}

function minimapInit() {
  pagemap(document.querySelector('#map'), {
    viewport: null,
    styles: {
        'header,footer,section,article': 'rgba(0,0,0,0.08)',
        'h1,a': 'rgba(0,0,0,0.10)',
        'h2,h3,h4,span': 'red'
    },
    back: 'rgba(0,0,0,0.02)',
    view: 'rgba(0,0,0,0.05)',
    drag: 'rgba(0,0,0,0.10)',
    interval: null
  });
}




