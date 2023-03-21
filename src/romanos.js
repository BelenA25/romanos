function romano(a) {
  let cadena = "";
  switch(a){
    case 1:
      cadena = "I";
      break;
    case 2:
      cadena = "II";
      break;
    case 3:
      cadena = "III";
      break;
    case 4:
      cadena = "IV";
      break;
    case 5:
      cadena = "V";
      break;
    case 6:
      cadena = "VI";
      break;
    case 7:
      cadena = "VII";
      break;
    case 8:
      cadena = "VIII";
      break;
    case 9:
      cadena = "IX";
      break;
    case 10:
      cadena = "X";
      break;
  }
  return cadena;
}

export default romano;
