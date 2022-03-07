const Cache = (()=>{
  const data = {}
  return {
    get(name){
      return data[name]
    },
    set(name,val){
      data[name] = val
    },
    remove(name){
      delete data[name]
    }
  }
})();