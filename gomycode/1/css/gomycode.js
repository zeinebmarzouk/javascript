var getText=document.getElementById("text");

function bold1(){
    event.preventDefault();
    getText.style.fontWeight="bold";
}
function bold2(){
    event.preventDefault();
    getText.style.fontStyle="italic";
}
function bold3(){
    event.preventDefault();
    getText.style.textDecoration="underline";
}

function change(){
    event.preventDefault();
    x=document.getElementById("taille").value;
    getText.style.fontSize=x;
}
function newFont(){
    event.preventDefault();
    x=document.getElementById("need").value;
    getText.style.fontFamily=x;
}
$(".in").mouseenter(function(){
    $(this).css("background-color", "black");
    $(this).css("opacity", "0.5");

});
$(".in").mouseleave(function(){
  $(this).css("background-color", "hsl(0,0%,0%,0)");
  $(this).css("opacity", "1");

});
