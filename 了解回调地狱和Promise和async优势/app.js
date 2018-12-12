const myRandom = (min = 1000, max = 3000) => {
  const { round, random } = Math
  return round(random() * (max - min) + min)
}

// 买水
function buyWater(callback) {
  console.log('我去买水了')
  setTimeout(() => {
    console.log('买水成功')
    // 买水成功后执行方法
    callback()
  }, myRandom())
}

// 倒入
function infunde(callback) {
  console.log('开始倒入')
  setTimeout(() => {
    console.log('倒入成功')
    // 倒入成功后执行方法
    callback()
  }, myRandom())
}
//  烧水
function boil(callback) {
  console.log('开始烧水')
  setTimeout(() => {
    console.log('烧水成功')
    // 烧水成功后执行方法
    callback()
  }, myRandom())
}

//  买水 =》 倒入锅中 =》烧水 =》 倒入壶里
// buyWater(() => {
//   infunde(() => {
//     boil(() => {
//       infunde(() => {
//         console.log('买水 =》 倒入锅中 =》烧水 =》 倒入壶里')
//       })
//     })
//   })
// })
// 这就是回调地狱

