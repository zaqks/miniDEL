const URL = document.getElementById("URL").innerText;

const inpt = document.getElementById("inpt");
const highlight = document.getElementById("highlight");
const highlight_wrap = document.getElementById("highlight_wrap");

const nums = document.getElementById("nums");

const logs = document.getElementById("logs_lines");

const ST_CST = document.getElementById("ST_CST");
const ST_IDF = document.getElementById("ST_IDF");
const ST_KW = document.getElementById("ST_KW");
const ST_SEP = document.getElementById("ST_SEP");

const QUADS = document.getElementById("QUADS");

const CLASSES = {
  errors: "error",
  IDFs: "idf",
  Keywords: "keyword",
  Entities: "entity"
};


//links consts  tables spans render events