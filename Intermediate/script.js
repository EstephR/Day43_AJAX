let btnLoad = document.getElementById("loadFile");
btnLoad.addEventListener("click", loadXML);

function loadXML(e) {
    e.preventDefault();
    let request = new XMLHttpRequest();
    request.open("GET", "intermediate.xml");
    request.onload = function() {
        if (this.status == 200) {
            convertXML(this.responseXML);
            console.log(this);
        }
    }
    request.send();
}

function convertXML(xml) {
    let songs = xml.getElementsByTagName("song")
    let content = document.getElementById("content");
    for (let i = 0; i < songs.length; i++) {
        content.innerHTML +=
            `<div class="card p-0 shadow" style="width: 18rem;">
                <img src="${songs[i].getElementsByTagName('img')[0].childNodes[0].nodeValue}" class="card-img-top" alt="${songs[i].getElementsByTagName('artist')[0].childNodes[0].nodeValue}">
                 <div class="card-body bg-dark text-light">
                    <h4 class="card-title">${songs[i].getElementsByTagName('title')[0].childNodes[0].nodeValue}</h4>
                    <h5 class="card-text">Artist: ${songs[i].getElementsByTagName('artist')[0].childNodes[0].nodeValue}</h5>
                    <hr>
                    <p class="card-text m-0">Country: ${songs[i].getElementsByTagName('country')[0].childNodes[0].nodeValue}</p>
                    <p class="card-text m-0">Genre: ${songs[i].getElementsByTagName('genre')[0].childNodes[0].nodeValue}</p>
                    <p class="card-text m-0">Year: ${songs[i].getElementsByTagName('year')[0].childNodes[0].nodeValue}</p>
        </div>
    </div>`
    }

}