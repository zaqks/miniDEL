//7erfi word for the lines nums
var LINE_NUMS = "1|";

function convertStringToSpans(
  inputString,
  maxLineLength = calculateMaxColumns(inpt)
) {
  let spans = [];

  // Reset LINE_NUMS for each call
  LINE_NUMS = "";

  // Split the input string by newlines
  const lines = inputString.split("\n");
  var lineNumber;

  // Process each line normally if there are multiple lines
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex];
    let currentLine = "";
    let currentLineLength = 0; // Track the length of the current line

    lineNumber = lineIndex + 1;

    for (let columnIndex = 0; columnIndex < line.length; columnIndex++) {
      const char = line[columnIndex];
      const columnNumber = columnIndex + 1;

      // Check if we need to break the current line
      if (currentLineLength >= maxLineLength) {
        spans.push('<span class="newline"><br/></span>');
        currentLine = "";
        currentLineLength = 0; // Reset current line length

        // Update LINE_NUMS with the current line number
        LINE_NUMS += `${lineNumber}|\n`;
      }

      if (char === " ") {
        spans.push(
          `<span id="line_${lineNumber}_column_${columnNumber}" class="space">&nbsp;</span>`
        );
        currentLine += " ";
        currentLineLength++;
      } else if (char === "\t") {
        spans.push(
          `<span id="line_${lineNumber}_column_${columnNumber}" class="tab">&nbsp;&nbsp;&nbsp;&nbsp;</span>`
        );
        currentLine += "    ";
        currentLineLength += 4; // Count tab as four spaces
      } else {
        spans.push(
          `<span id="line_${lineNumber}_column_${columnNumber}">${char}</span>`
        );
        currentLine += char;
        currentLineLength++;
      }
    }

    // After processing each line, add a newline span if it's not the last line
    if (lineIndex < lines.length - 1) {
      spans.push('<span class="newline"><br/></span>');
      LINE_NUMS += `${lineNumber}|\n`; // Update LINE_NUMS for the next line
    }
  }

  LINE_NUMS += `${lineNumber}|`;

  return spans.join("");
}

function calculateMaxColumns(textarea) {
  const style = window.getComputedStyle(textarea);
  const width =
    textarea.clientWidth -
    parseFloat(style.paddingLeft) -
    parseFloat(style.paddingRight) -
    parseFloat(style.borderLeftWidth) -
    parseFloat(style.borderRightWidth);

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  context.font = window.getComputedStyle(textarea).font;

  const averageCharWidth = context.measureText("M").width;

  const maxColumns = Math.floor(width / averageCharWidth);

  return maxColumns;
}
