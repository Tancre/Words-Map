class Splitter {
  constructor(content, regex, source) {
    // Get actual width and height of the center of the screen
    // Top-Left position + half of the total width-height of the window
    this.w = window.pageXOffset + (window.innerWidth/2);   
    this.h = window.pageYOffset + (window.innerHeight/2);
    // Content of the text/drop area & regex area & source
    this.content = content;
    this.contentRegex = regex;
  }

  // Full text on a line
  fullText() {
    this.createElt(this.content);  // Create element
  }

  // Full text with line breaks
  textLinebreak() {
    const lines = this.content.split("\n");  // Split at line break
    const mergedLines = join(lines, "<br>")  // Merge with <br> element
    this.createElt(mergedLines);             // Create element
  }

  // Every line
  lines() {
    const lines = this.content.split("\n");   // Split at line break and make array
    let y = 225;                            // Init y position

    // Create element for each line shifting y
    lines.forEach(line => {                 
      this.createMultiElt(line, y);
      y += 20
    });
  }

  // Every word
  words() {
    const regex = /\W+/;                           // Init regex (only words)
    const words = splitTokens(this.content, regex);   // Split with the regex and make array
    let y = 225;                                    // Init y position

    // Create element for each word shifting y
    words.forEach(word => {
      this.createMultiElt(word, y);
      y += 20
    });
  }

  // Use the charachters 
  splitByTokens() {
    const regex = this.contentRegex;                  // Get tokens from regex area
    const results = splitTokens(this.content, regex)  // Match regex and make array        
    let y = 225;                                      // Init y position

    // Check if the regex worked or not
    if (results !== null) {
      // Create element for each word shifting y
      results.forEach(result => {
        this.createMultiElt(result, y);
        y += 20
      });
    } else {
      alert("Your regex didn't match anything! Try a new one &#128513;")
    }
  }

  // Match the regex
  regexMatch() {
    const regex = new RegExp(this.contentRegex);    // Get regex from regex area and make regex object
    const results = matchAll(this.content, regex)    // Match regex and make array      
    let y = 225;                                    // Init y position

    console.log(results.length)
    // Check if the regex worked or not
    if (results === undefined || results.length == 0) {
      alert("Your regex didn't match anything! Try a new one &#128513;")
    } else {
      // Create element for each word shifting y
      results.forEach(result => {
        this.createMultiElt(result, y);
        y += 20
      });
    }
  }

  // Create single element
  createElt(elt) {
    // Create draggable element + class
    const p = createSpan(elt);
    p.addClass('ui-widget-content draggable');
    // Center Position counting the center of the elt created
    const posX = this.w - (p.elt.offsetWidth/2);
    const posY = this.h - (p.elt.offsetHeight/2);
    p.position(posX, posY);
    // Add width (Prevent width auto)
    const w = p.width + 1
    p.style('width', w + 'px')
  }

  // Create multiple elementss
  createMultiElt(elt, y) {
    // Create draggable element + class
    const p = createSpan(elt);
    p.addClass('ui-widget-content draggable');
    // Center Position counting the center of the elt created and shifting y multiple elements
    const posX = this.w - (p.elt.offsetWidth/2);
    let posY = this.h - (p.elt.offsetHeight/2) - 500 + y;
    p.position(posX, posY);
    // Add width (Prevent width auto)
    const w = p.width + 1                // +1 fix the right width 
    p.style('width', w + 'px')
  }

  createImage() {
    const img = createImg(this.contentRegex, this.content);
    img.addClass('resizable');
    // const posX = this.w - (img.elt.offsetWidth/2);
    // const posY = this.h - (img.elt.offsetHeight/2);
    // img.position(posX, posY)
  }
}