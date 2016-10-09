document.getElementById("slide").addEventListener("input", drawPyramid);
 
 function drawPyramid(height) {

  for (var y = 0; y < height; y++) {
    var line = " ";
    for (var x = 0; x < (height - 1 - y); x++) {
      line += " ";
    }
    for (var i = (height - 1 - y); i < (height + 1); i++) {
      line += "#";
    }
		document.getElementById("pyramid").innerHTML = line;
  }
};
		// create a text element with the string of characters
        textElem = document.createTextNode(line);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);


	document.getElementById("pyramid").innerHTML = drawPyramid(height);
