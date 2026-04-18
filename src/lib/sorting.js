

function bsort(array){
  let length = array.length
  for (let i=0; i <= length; i++) {
    for (let n=0; n<= length - i; n++){
      if (array[n] > array[n+1]) [array[n], array[n+1]] = [array[n+1], array[n]]
    }
  }
  return array
}

// recursion
// recursive case (llamar a la funcion otra vez)
// basecase (donde regresar)
// stack (orden de ejecución)
// LO MISMO PERO EN FUNCION RECURSIVA
function rbsort(array, n){
  let count = 0
  for (let i=0; i<n-1; i++){
    if (array[i] > array[i+1]) {
      [array[i], array[i+1]] = [array[i+1], array[i]]
      count++
    }
  }
  n--
  if (n < 1 || count < 0) return array
  array = bsort(array, n-1)
  return array
}


