document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "arial";

console.log(
  "%cElzero %cWeb %cSchool",
  "font-size: 40px; color: red;",
  "font-weight: bold; color:green; font-size: 40px;",
  "font-size: 40px; color: white; background-color: blue;"
);
console.group("Group 1");
console.log("Message 1");
console.log("Message 1");
console.group("child group");
console.log("Message 1");
console.log("Message 1");
console.group(" grand child group");
console.log("Message 1");
console.log("Message 1");
console.groupEnd("");
console.groupEnd("");
console.groupEnd("");
console.group("Group 2");
console.log("Message 1");
console.log("Message 1");
console.groupEnd("");
console.table(["ahmed", "ali", "elzero", "aya", "salam"]);
