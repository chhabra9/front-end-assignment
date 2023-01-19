//jshint esversion:8
var btn=document.createElement("btn5");
var mutate=["1", "2", "3", "6", "9", "8", "7", "4"];
var same=["1", "2", "3", "6", "9", "8", "7", "4"];
var l=mutate[7];
btn5.onclick=()=>{
    for(let i=7;i>0;i--){
        mutate[i]=mutate[i-1];
    }
    mutate[0]=l;
    l=mutate[7];
    for(let i=0;i<8;i++){
        document.getElementById("btn"+same[i]).innerText=mutate[i];
    }
};