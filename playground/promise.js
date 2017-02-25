function addPromise (a, b) {
  return new Promise (function (resolve, reject) {
    setTimeout(function (){
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b); 
      } else {
        console.log("Must provide two numbers");
      }
    }, 1000)
  })
}

addPromise(4, 5).then(function(result) {
  console.log('result', result); 
}, function (err) {
  console.log('error', err); 
})
