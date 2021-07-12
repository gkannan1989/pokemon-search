function padWithZeros(number, length) {
  let my_string = `${number}`;
  while (my_string.length < length) {
    my_string = `0${my_string}`;
  }
  return my_string;
}

export default padWithZeros;
