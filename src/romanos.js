function romano(a) {
  let cadena = "";
  const decena = Math.floor(a/10);
	const unidad = Math.floor((a-(decena*10)));
  switch(decena){
    case 1:
      cadena = "X";
      break;
    case 2:
      cadena = "XX";
      break;
  }
  switch(unidad){
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
