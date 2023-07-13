let cadena = [];
let pause = true;

while(pause === true){
    let text = prompt("Teclee algo:");
    cadena.push(text);

    pause = confirm("Quieres continuar?")

}

document.write(cadena.join("-"))
