/*let source = document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(source);
let context = {title: "HOA", body: "lloro"};
let html = template(context);*/


const loadingTrue = ()=>{
    let loading = document.getElementById("loading");
    loading.classList.add("visible");
}

const loadingFalse = ()=>{
    let loading = document.getElementById("loading");
    loading.classList.remove("visible");
}



let oscuro;
const modoOscuro = ()=>{

    let boton = document.getElementById("modoOscuro");
    if(oscuro){
        boton.classList.remove("btn-light");
        boton.classList.add("btn-dark");
        document.body.classList.add("inicio");
        document.body.classList.remove("oscuro");

        oscuro = false;
    }
    else{
    document.body.classList.add("oscuro");
    document.body.classList.remove("inicio");
    boton.classList.remove("btn-dark");
    boton.classList.add("btn-light");
    oscuro = true;
}}



const solicitarPermisoPush = ()=>{
    loadingTrue();
    if("Notification" in navigator){
        console.log("Notification supported");
    }
    Notification.requestPermission()
    .then((respuesta_del_usuario)=>{
        loadingFalse();
        console.log(respuesta_del_usuario);
    })
}

