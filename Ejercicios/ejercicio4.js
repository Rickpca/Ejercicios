let num = parseInt(prompt("Teclee un número"));

let letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C","K", "E"];

while(num !== null && !isNaN(num)){
    if(isNaN(num)){
        alert("Teclee un número valido");
    }
    
    let result = num%23;
    alert("Su número es: "+num+" Su letra es: "+letters[result]);
    
    num = parseInt(prompt("Teclee un número"))

}

