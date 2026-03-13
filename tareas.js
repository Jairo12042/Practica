let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const lista = document.getElementById("lista");

function guardar(){
localStorage.setItem("tareas",JSON.stringify(tareas));
}

function actualizar(){
lista.innerHTML="";

let pendientes=0;
let completadas=0;

tareas.forEach((tarea,index)=>{

let li=document.createElement("li");

let span=document.createElement("span");
span.textContent=tarea.texto;

if(tarea.completa){
span.classList.add("completa");
completadas++;
}else{
pendientes++;
}

span.onclick=function(){
tareas[index].completa=!tareas[index].completa;
guardar();
actualizar();
};

let boton=document.createElement("button");
boton.textContent="X";
boton.className="eliminar";

boton.onclick=function(){
tareas.splice(index,1);
guardar();
actualizar();
};

li.appendChild(span);
li.appendChild(boton);

lista.appendChild(li);

});

document.getElementById("pendientes").textContent=pendientes;
document.getElementById("completadas").textContent=completadas;
}

function agregarTarea(){

let input=document.getElementById("nuevaTarea");
let texto=input.value;

if(texto===""){
alert("Escribe una tarea");
return;
}

tareas.push({
texto:texto,
completa:false
});

input.value="";

guardar();
actualizar();

}

document.getElementById("modo").onclick=function(){
document.body.classList.toggle("dark");
};

actualizar();