function showNum(i) {
  return function () {
    console.log(i)
  }
}

var a = []
for (var i = 0; i < 5; i++) {
  a[i] = showNum(i)
}

a[2]()
a[3]()
