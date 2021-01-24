"use strict";

const printTriangle = (rows) => {
  for (let i = 1; i <= rows; i++) {
    for (let k = rows - i; k >= 1; k--) {
      document.write("&nbsp;");
    }
    for (let j = 1; j <= i; j++) {
      document.write("# ");
    }
    document.write("<br/>");
  }
};

printTriangle(5);

// in console
const tringle = (rows) => {
  let str = "";
  for (let i = 1; i <= rows; i++) {
    for (let k = 1; k <= rows - i; k++) {
      str += "\t";
    }
    for (let j = 1; j <= i; j++) {
      str += "#\t\t";
    }
    console.log(str);
    str = "";
  }
};

tringle(5);
