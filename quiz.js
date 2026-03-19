// let url = window.location.href
let urlSearch = window.location.search

if(urlSearch.includes("?")){
    console.log(urlSearch);
    let kerdes = urlSearch.split("?")[1]
    let fovaros = kerdes.split("=")[1]
    console.log(kerdes)
    console.log(fovaros)
    let felhasznaloBevitelEredmenye = document.getElementById("felhasznaloi_input")
    felhasznaloBevitelEredmenye.innerHTML = `
        <h3>A felhasznaló válasza</h3>
        <p>1. ${fovaros}</p>`
}