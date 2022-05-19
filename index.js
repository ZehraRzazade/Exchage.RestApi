let group1 = document.querySelectorAll(".btn-group1 > button");
let group2= document.querySelectorAll(".btn-groupTwo > button");
const div = document.querySelector(".btn-group1 >.purple");
const div2 = document.querySelector(".btn-groupTwo >.purple");





group1.forEach((item) => {
  item.style.backgroundColor = "white";
  item.addEventListener("click", (e) => {
    div.classList.remove("purple");
    if (e.target.style.backgroundColor == "white") {
      group1.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "#c6c6c6";
      });
      e.target.style.backgroundColor = "#833AE0";
      e.target.style.color = "white";
    } 
  });
});

group2.forEach((item) => {
    item.style.backgroundColor = "white";
    item.addEventListener("click", (e) => {
      div2.classList.remove("purple");
      if (e.target.style.backgroundColor == "white") {
        group2.forEach((item) => {
          item.style.backgroundColor = "white";
          item.style.color = "#c6c6c6";
        });
        e.target.style.backgroundColor = "#833AE0";
        e.target.style.color = "white";
      } 
    });
  });