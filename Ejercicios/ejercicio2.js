let calificacion = parseInt(prompt("Dígame su calificación: "));

switch (true) {
  case calificacion <= 3:
    alert("Muy deficiente");
    break;

  case calificacion <= 5:
    alert("Insuficiente");
    break;

  case calificacion <= 6:
    alert("Suficiente");
    break;

  case calificacion <= 7:
    alert("Bien");
    break;

  case calificacion <= 8:
    alert("Notable");
    break;

  case calificacion <= 10:
    alert("Sobresaliente");
    break;

  default:
    alert("Digite bien su calificación");
}
