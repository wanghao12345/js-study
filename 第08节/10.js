/**
 * 手写promise
 * @type {Promise<any>}
 */
var promise = new Promise((resolve, reject) => {
  if (true) {
    resolve(value)
  } else {
    reject(value)
  }
})

promise.then(function (value) {
  // success
}, function (value) {
  // failure
})
