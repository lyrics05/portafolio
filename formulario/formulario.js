const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const validar = (e)=>{
     switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre,e.target,"nombre")
            break;
        case "telefono":
            validarCampo(expresiones.telefono,e.target,"telefono")
            break;
        case "correo":
            validarCampo(expresiones.correo,e.target,"correo")
            break;
     
        default:
            break;
     }
}
const campos = {
    nombre:false,
    telefono:false,
    correo:false
}
formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(campos.nombre && campos.telefono && campos.correo){
        document.querySelector("#grupo__boton p").classList.remove("grupo__boton-error-activo")
        document.querySelector("#grupo__boton p").classList.add("grupo__boton-error")
    }else{
        document.querySelector("#grupo__boton p").classList.add("grupo__boton-error-activo")
        document.querySelector("#grupo__boton p").classList.remove("grupo__boton-error")
      
    }
})
inputs.forEach((input)=>{
    input.addEventListener("keyup",validar)
    input.addEventListener("blur",validar)
})
const validarCampo=(expresion,input,campo)=>{
    if(expresion.test(input.value)){
        document.querySelector(`#${campo}  input`).classList.add("input-text")
        document.querySelector(`#${campo} input`).classList.remove("input-text-incorrecto")
       document.querySelector(`#${campo} .texto__error`).classList.remove("texto__error-activo")
       campos[campo] = true
        
    }else{
        document.querySelector(`#${campo} input`).classList.remove("input-text")
        document.querySelector(`#${campo} input`).classList.add("input-text-incorrecto")
        document.querySelector(`#${campo} .texto__error`).classList.add("texto__error-activo")
        campos[campo]= false
 
    }
}