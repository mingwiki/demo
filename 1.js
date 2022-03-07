const cache = (() => {
  const store = {}
  return {
    get(key) {
      return store[key]
    },
    set(key, val) {
      store[key] = val
    },
    remove(key) {
      delete store[key]
    }
  }
})()
console.log(cache) 
cache.set('name', '饥人谷') 
cache.get('name'); // '饥人谷' cache.remove('name')