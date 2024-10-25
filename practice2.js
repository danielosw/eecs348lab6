document.addEventListener("DOMContentLoaded",() => {
    runcode()
})
function runcode(){
    document.getElementById("submit").onclick = function(){
    let redtext = document.getElementById("redtext").style.color;
    let bluetext = document.getElementById("bluetext").style.color;
    let greentext = document.getElementById("greentext").style.color;
    document.getElementById("dummy").style.color = "rgb("+redtext+", "+greentext+", "+bluetext+");"
    }
}
