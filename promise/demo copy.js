
    function f1(v) {
      console.log(v+2)
      return new Promise((resolve) => {
        setTimeout(()=> resolve(3))
      })
    }
    function f2(v) {
      console.log(v)
    }

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    }).then(f1).then(f2)
