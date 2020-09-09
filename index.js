
function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(firstHalf, secondHalf) {
  let sortedArray = []
  while (firstHalf.length || secondHalf.length) {
    if (firstHalf[0] < secondHalf[0]) {
      sortedArray.push(findMinAndRemoveSorted(firstHalf))
    } else {
      sortedArray.push(findMinAndRemoveSorted(secondHalf))
    }
  }
  return sortedArray
}

function mergeSort(array) {
  if (array.length < 2) {
    return array
  } else {
    let firstHalf = array.slice(0, array.length / 2)
    let secondHalf = array.slice(array.length / 2)
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}