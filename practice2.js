document.addEventListener("DOMContentLoaded",() => {
    runcode()
})
function runcode(){
    document.getElementById("submit").onclick = function(){
    let redboarder = document.getElementById("redboarder").value;
    let blueboarder = document.getElementById("blueboarder").value;
    let greenboarder = document.getElementById("greenboarder").value;
    let redbg = document.getElementById("redbg").value;
    let bluebg = document.getElementById("bluebg").value;
    let greenbg = document.getElementById("greenbg").value;
    let borderwidth = document.getElementById("borderwidth").value;
    let tag = document.getElementById("dummy");
    tag.style.borderColor = `rgb(${redboarder},${blueboarder},${greenboarder})`;
    tag.style.backgroundColor = `rgb(${redbg},${bluebg},${greenbg})`;
    tag.style.borderWidth = borderwidth;
    }
}
