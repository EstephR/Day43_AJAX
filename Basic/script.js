let button = document.getElementById("button");
button.addEventListener("click", loadDoc);

function loadDoc() {
    const request = new XMLHttpRequest();
    request.onload = function() {
        if (this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    }
    request.open("GET", "content.txt", true);
    request.send();
}