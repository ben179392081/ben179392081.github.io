var ben179392081 = {
  chunk: function (array, size = 1) {
    var temp = new Array(Math.ceil(array.length / size))
    var a = 0
    for (var i = 0; i < array.length; i++) {
      temp[a] ? temp[a] : temp[a] = []
      temp[a].push(array[i])
      if (temp[a].length == size) {
        a++
      }
    }
    return temp
  },
  compact: function (array) {
    var temp = []
    var tempIndex = 0
    for (var i = 0; i < array.length; i++) {
      var value = array[i]
      if (value) {
        temp[tempIndex++] = value
      }
    }
    return temp
  },
  difference: function (array, ...value) {
    var arr = [].concat(...value)
    var temp = []
    for (var i = 0; i < array.length; i++) {
      if (!arr.includes(array[i])) {
        temp.push(array[i])
      }
    }
    return temp
  },
  uniq: function (array) {
    var temp = []
    for (var i = 0; i < array.length; i++) {
      if (!temp.includes(array[i])) {
        temp.push(array[i])
      }
    }
    return temp
  },

}
