// This is a P5.js function
function setup() {   
  noCanvas();       // Disable canvas for P5.js
  minimapInit();    // Init minimap (minimap.js)
  
  const textArea = select('#textArea');    // Init text/drop area
  const submit = select('#submit');        // Init submit button
  const regexArea = select('#regex');      // Init regex area

  // Init drag and drop files
  dropFile(textArea);

  // When the submit button is pressed
  submit.mousePressed(() => {
    const selected = document.querySelector('select').value;  // Get which funciton to apply when splitting text
    const mainContent = textArea.value();                         // Get text from text/drop area
    const contentRegex = regexArea.value();                   // Get regex from regex area

    const splitter = new Splitter(mainContent, contentRegex)  // Init splitter with our text

    // Depending on the function selected to split the text:  
    switch (parseInt(selected)) {     
      case 0:
        splitter.fullText();        // Create one element with full text on a line
        break;
      case 1:
        splitter.textLinebreak()    // Create one element with full text and linebreaks
        break;
      case 2:
        splitter.lines()            // Create multiple elements with each line
        break;
      case 3:
        splitter.words()            // Create multiple elements with each word
        break;
      case 4:
        splitter.splitByTokens()    // Create multiple elements splitting based on the charachters regex function inserted
        break;
      case 5:
        splitter.regexMatch()    
        break;
    }

    const dragResize = new DragResize();
    deleteElm();
  });
}

// Drag and drop files (with p5.js)
function dropFile(area) {
  // The drop-zone is the same as text area
  dropzone = area   

  // UI dorp-zone
  dropzone.dragOver(() => dropzone.style('background-color', '#ccc'));      
  dropzone.dragLeave(() => dropzone.style('background-color', '#fff'));
  dropzone.drop(gotFile, () => dropzone.style('background-color', '#fff'));

  // Display file in text area
  function gotFile(file) {
    const textArea = select('#textArea');
    textArea.value(file.data);
  }
}

// Settings minimap (minimap.js)
function minimapInit() {
  pagemap(document.querySelector('#map'), {
    viewport: null,
    styles: {
        'header,footer,section,article': 'rgba(0,0,0,0.08)',
        'h1,a': 'rgba(0,0,0,0.10)',
        'h2,h3,h4,span': 'red'
    },
    back: 'rgba(0,0,0,0.1)',
    view: 'rgba(0,0,0,0.15)',
    drag: 'rgba(0,0,0,0.10)',
    interval: null
  });
}




