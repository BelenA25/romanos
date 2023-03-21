function romano(a) {
  let cadena = "";
  const decena = Math.floor(a / 10);
  const unidad = Math.floor((a - (decena * 10)));
  switch (decena) {
    case 1:
      cadena = "X";
      break;
    case 2:
      cadena = "XX";
      break;
    case 3:
      cadena = "XXX";
      break;
    case 4:
      cadena = "XL";
      break;
    case 5:
      cadena = "L";
      break;
    case 6:
      cadena = "LX";
      break;
    case 7:
      cadena = "LXX";
      break;
    case 8:
      cadena = "LXXX";
      break;
    case 9:
      cadena = "XC";
      break;
  }
  switch (unidad) {
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
  }
  return cadena;
}

export default romano;
