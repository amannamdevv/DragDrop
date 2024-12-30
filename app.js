let list = document.querySelector("list");
let rightBox = document.querySelector("right");
let leftBox = document.querySelector("left");

for(lists of list) {
    ist.addEventListener("dragstart", function(e) {
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e) {
            rightBox.appendChild(selected);
            selected = null;
        })
    })
}