const lists = document.querySelectorAll(".list");
const rightBox =  document.getElementById("right");
const leftBox = document.getElementById("left");
const interBox = document.getElementById("inter");

for(list of lists){
 list.addEventListener("dragstart", function (e){
let selected = e.target;

rightBox.addEventListener("dragover", function(e){
 e.preventDefault();
});
rightBox.addEventListener("drop", function(e){
rightBox.appendChild(selected);
selected = null;
});

leftBox.addEventListener("dragover", function(e){
 e.preventDefault();
});
leftBox.addEventListener("drop", function(e){
leftBox.appendChild(selected);
selected = null;
});

interBox.addEventListener("dragover", function(e){
 e.preventDefault();
});
interBox.addEventListener("drop", function(e){
interBox.appendChild(selected);
selected = null;
});
 });
}


