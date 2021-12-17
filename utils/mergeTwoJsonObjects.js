module.exports = (obj1, obj2, key) => {
  return obj1.map(x => {
    const data = obj2.find(y => y[key] === x[key])
    return {
      ...x.toObject(),
      ...data.toObject(),
    }
  })
}
