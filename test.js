function text(){
document.getElementById("contactName").value="";
document.getElementById("contactEmail").value="";
document.getElementById("contactTitle").value="";
document.getElementById("contactMessage").value="";

}

function slider1(){
 document.getElementById("test1").style.visibility="visible";
 document.getElementById("test2").style.visibility="hidden";
 document.getElementById("test3").style.visibility="hidden";
}

function slider2(){
    document.getElementById("test1").style.visibility="hidden";
    document.getElementById("test2").style.visibility="visible";
    document.getElementById("test3").style.visibility="hidden";
}
 
function slider3(){
    document.getElementById("test1").style.visibility="hidden";
    document.getElementById("test2").style.visibility="hidden";
    document.getElementById("test3").style.visibility="visible";
}
