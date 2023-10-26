var inicio=document.getElementById("inicio");
var dashboard=document.getElementById("dashboard");
var iniciar=document.getElementById("iniciar");

inicio.addEventListener("click",function(){
    console.log("Click a inicio");
    console.log(document.getElementsByTagName("p"));
    document.getElementsByTagName("p").innerHTML="Bienvenidos a inicio";
});

dashboard.addEventListener("click",function(){
    console.log("Click a dashboard");
});

iniciar.addEventListener("click",function(){
    console.log("Click a iniciar Sesión");
});

