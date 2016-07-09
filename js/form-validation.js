var enviar=document.getElementById('enviar');
enviar.addEventListener("click",function(evt){
    //alert("click");
});

//evento de presionar la tecla para la validacion del numero.
var number=document.getElementById('numero');
number.addEventListener("keydown",function(evt){
    console.log(this.value.toString().length);
    if(this.value.toString().length>9)
        evt.preventDefault();
});
//evento de presionar tecla para validar las 150 palabras.
var mensaje=document.getElementById('message');
mensaje.addEventListener("keydown",function(evt){
      var palabras=150;
      var arrPalabras=this.value.toString().split(" ");
      if(arrPalabras.length>palabras && evt.keyCode!=8)
          evt.preventDefault();
      else{
          if(arrPalabras.length<=palabras)
              document.getElementById('indicator').innerHTML=arrPalabras.length;
      }

});
//evento de envio del formulario.
var form=document.getElementById('form-contact');
form.addEventListener("submit",function(evt){

    var nombre=document.getElementById('nombre');

    if(nombre.checkValidity()==false){
        alert("Escribe tu nombre");
        evt.preventDefault();
    }
    var email=document.getElementById('email');
    if(email.checkValidity()==false){
        alert("Escribe un email valido!");
        evt.preventDefault();
    }
    var otros=document.getElementById('others');
    if(otros!=null && otros.checkValidity()==false){
        alert('Escribe otros medios de haberme conocido!');
        evt.preventDefault();
    }
    var numero=document.getElementById('numero');
    if(numero.checkValidity()==false){
        alert("Escribe un número correcto");
        evt.preventDefault();
    }
});

//combo
var combo=document.getElementById('combo');
combo.addEventListener("change",function(evt){

        //agregar input dinamico
        var inputOtros = document.createElement("input");
        inputOtros.setAttribute("id", "others");
        inputOtros.setAttribute("type", "text");
        inputOtros.setAttribute("name", "others");
        inputOtros.setAttribute("placeholder", "Otros");
        inputOtros.setAttribute("required", "");
        inputOtros.setAttribute("size","50px");


        if(this.value==="otros"){
            //agregar input dinamico
            var titulo = document.createElement("H3");
            titulo.setAttribute("id","h3-otros");
            this.parentNode.appendChild(titulo);
            titulo.innerHTML='Otros: <br>';
            this.parentNode.appendChild(inputOtros);
        }
        else {
            //this.parentNode.removeChild(inputOtros);
            if(document.getElementById('others')){
                this.parentNode.removeChild(document.getElementById('h3-otros'));
                this.parentNode.removeChild(this.parentNode.children[2]);
            }
            console.log(this.parentNode.children[2]);
            console.log(this.parentNode);
        }
});
