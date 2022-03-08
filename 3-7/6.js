function orderBy(field, type) {
  if (type == 'asc') {
    return function (val1, val2) {
      return val1[field] > val2[field] ? 1 : -1
    }
  } else if (type == 'desc') {
    return function (val1, val2) {
      return val1[field] < val2[field] ? 1 : -1
    }
  }

}