document.addEventListener("DOMContentLoaded",() => {
    runcode()
})
function runcode(){
    document.getElementById("submit").onclick = function(){
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    let warning = document.getElementById("warning");
    if (pass1 != pass2){
        warning.innerText = "Your passwords are not the same!"
    }
    else if(pass1.length < 8){
        warning.innerText = "Your password needs to be at least 8 characters!"
    }
    else{
        warning.innerText = "Your password matched!"
    }

    }
}
