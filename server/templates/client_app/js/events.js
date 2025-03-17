//
inpt.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      event.preventDefault();
    }
  });
  
  // update the heights
  inpt.innerText = "";
  nums.innerText = LINE_NUMS;

  highlight_wrap.style.height = `${inpt.clientHeight}px`;
  
  inpt.addEventListener("input", function () {
    render_text(inpt);
    render_spans(inpt.value);
    //
    inpt.rows = Math.max(
      inpt.value.split("\n").length,
      document.getElementsByClassName("newline").length+1
    );
    highlight_wrap.style.height = `${inpt.clientHeight}px`;
  });
  //