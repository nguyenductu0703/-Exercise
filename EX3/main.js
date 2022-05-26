var values = document.querySelectorAll(".values");
for (var i = 0; i < values.length; i++) {
    var ID = values[i].querySelector(".ID");
    if (ID.textContent % 2 === 0) {
        values[i].className = 'background'
    } else {
        values[i].className = 'backgrounds'
    }
}