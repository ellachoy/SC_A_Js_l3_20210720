function changeFontsSize(){
    document.getElementById("results").style.fontSize=document.getElementById("fontsize").value+"px";

    document.getElementById("results").style.fontFamily=document.getElementById("fontfamily").value;
    
    document.getElementById("results").innerHTML=document.getElementById("texttext").value;

    console.log("");
}