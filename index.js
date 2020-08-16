// Add your functions here
function map(arr, cb) {
  let array = []
  for (const v of arr) {
    array.push(cb(v))
  }
  return array
}
function reduce(arr, cb, s) {
  let total
  if (s) {
    total = s
    for (const v of arr) {
      total = cb(v, total)
    }
  } else {
    total = arr[0]
    for (const v of arr.splice(1)) {
      total = cb(v, total)
    }
  }

  return total
}
