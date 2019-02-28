var a = []
for (var i = 0; i < 5; i++) {
  a[i] = (function (i) {
    return function () {
      console.log(i)
    }
  })(i)
}

a[2]()
a[3]()
