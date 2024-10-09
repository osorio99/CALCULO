// const username = document.getElementById("username")
// const btnGreat = document.querySelector("#btnGreat")

// btnGreat.addEventListener("click",great)//crear un evento a cualquier elemento //great es una referencia 
// //esta es la funcion del evento click
// function great() {
//     alert(username.value)//value guarda lo que la variable resive
// }

// great()






const username =document.getElementById("nombre")
const data1 =document.getElementById("nota1")
const data2 =document.getElementById("nota2")
const data3 =document.getElementById("nota3")

const btnCalculate = document.getElementById("btn-calculate")
const response = document.getElementById("resultado")

btnCalculate.addEventListener("click",calculateNote)

function calculateNote(event) {
    event.preventDefault()

    let nota1= parseFloat(data1.value)//parseInt o parseFloat o number
    let nota2= parseFloat(data2.value)
    let nota3= parseFloat(data3.value) 
    
    
    let result =((nota1*0.3) +(nota2*0.3)+(nota3*0.4)).toFixed(2) //solo suelta dos decimal

    if (result <=3.5) {
        response.style.color="black"
        response.textContent=`Señor@ ${username.value} ud perdio la materia ${result}`
        
    }else if (result >=3.5 && result <=4.5) {
        response.style.color="orange"
         response.textContent=`Señor@ ${username.value} ud gano la materia  ${result}`
        
    }else if (result>=4.5) {
        response.style.color="green"
        response.textContent=`Señor@ ${username.value} su nota es sobre saliente  ${result}`
        
    }


    response.style.color="red"
    response.textContent=`Señor@ ${username.value} su nota definitiva es: ${result}` 
    //guarda variables que no son tipo int

    

}


const btnPredecir = document.getElementById("btn-predecir")
btnPredecir.addEventListener("click",predecir)

function predecir(event) {
    event.preventDefault()
    let nota1= parseFloat(data1.value)//parseInt o parseFloat o number
    let nota2= parseFloat(data2.value)

    
    let faltante= parseFloat(((3.5 - (nota1 * 0.3) - (nota2 * 0.3)) / 0.4).toFixed(2))
    data3.value=faltante
 
}

