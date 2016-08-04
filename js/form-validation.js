var enviar=document.getElementById('enviar');
enviar.addEventListener("click",function(evt){
    //alert("click");
});

//evento de presionar la tecla para la validacion del numero.
var number=document.getElementById('numero');
number.addEventListener("keydown",function(evt){

    //console.log(evt.keyCode);
    //internet Explorer
    if((evt.keyCode<48 || evt.keyCode>57) && evt.keyCode!=8){
        console.log( "letra: "+evt.keyCode);
        evt.preventDefault();
    }
    //console.log(this.value.toString());
    if(this.value.toString().length>9 && evt.keyCode!=8)
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
    var email=document.getElementById('email');
    var otros=document.getElementById('others');
    var numero=document.getElementById('numero');

    //internet explorer
    if(nombre.value==""){
        alert("Escribe tu nombre");
        evt.preventDefault();
    }
    else{
      var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      //Se muestra un texto a modo de ejemplo, luego va a ser un icono
      if (!emailRegex.test(email.value)) {
          alert("Escribe un email valido!");
          evt.preventDefault();
      }
      else {
          if(otros!=null && otros.value==""){
              alert('Escribe otros medios de haberme conocido!');
              evt.preventDefault();
        }
        else
          if(numero.value==""){
              alert("Escribe un número correcto");
              evt.preventDefault();
          }
      }
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
