function render_table(tbl, data) {
    var rslt = "";
  
    var row;
    for (var row_data of data) {
      row = "";
      for (var _ of row_data) {
        row += `<td>${_}</td>`;
      }
  
      row = `<tr>${row}</tr>`;
      rslt += row;
    }
  
    tbl.innerHTML = rslt;
  }
  