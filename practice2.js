document.addEventListener("DOMContentLoaded",() => {
    runcode()
})
function runcode(){
    document.getElementById("submit").onclick = function(){
    let redtext = document.getElementById("redtext").value;
    let bluetext = document.getElementById("bluetext").value;
    let greentext = document.getElementById("greentext").value;
    document.getElementById("dummy").style.color = "rgb("+redtext+", "+greentext+", "+bluetext+");"
    }
}
