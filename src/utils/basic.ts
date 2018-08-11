
function isObjEmpty(obj: object) {
  for(const prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false
    }
  }
  return JSON.stringify(obj) === JSON.stringify({})
}

function isArrEmpty(arr: any) {
  if (!Array.isArray(arr) || !arr.length) {
    return true
  }
  return false
}

export {
  isArrEmpty,
  isObjEmpty,
}