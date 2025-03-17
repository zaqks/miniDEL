function render_text(inpt) {
  const spans = convertStringToSpans(inpt.value);
  highlight.innerHTML = spans;

  //render the lien nums
  nums.innerHTML = LINE_NUMS;
}

function render_spans(txt) {
  fetch(URL, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ code: txt }),
    headers: {
      "X-CSRFToken": CSRF
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //logs
      logs.innerHTML = data.logs;

      //tables

      render_table(ST_CST, data.ST_CST);
      render_table(ST_IDF, data.ST_IDF);
      render_table(ST_KW, data.ST_KW);
      render_table(ST_SEP, data.ST_SEP);
      //quads
      render_table(QUADS, data.QUADS);

      //ents
      var mssgs;
      var cls;

      var line;
      var col;
      var len;

      var spn;

      Object.entries(CLASSES).forEach(([type, cls]) => {
        var mssgs = data[type];
        for (var _ of mssgs) {
          line = _[0];
          col = _[1];
          len = _[2];

          for (var indx = 0; indx < len; indx++) {
            spn = `line_${line}_column_${col + indx}`;

            try {
              spn = document.getElementById(spn);
              spn.classList.add(cls);
            } catch (error) {
              console.log(`line_${line}_column_${col + indx}`);
            }
          }
        }
      });

      //errs 2
      for (var _ of data["errors2"]) {
        line = _[0];
        col = 1;
        var got = document.getElementById(`line_${line}_column_${col}`);

        while (got) {                    
          got.classList.add("error2");

          col++;
          got = document.getElementById(`line_${line}_column_${col}`);
        }
      }
    });
}
