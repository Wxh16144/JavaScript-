const myRandom = (min = 1000, max = 3000) => {
  const { round, random } = Math
  return round(random() * (max - min) + min)
}

// 买水
function buyWater() {
  return new Promise(reject => {
    console.log('我去买水了')
    setTimeout(() => {
      console.log('买水成功')
      // 买水成功后执行方法
      reject()
    }, myRandom())
  })
}

// 倒入
function infunde() {
  return new Promise(reject => {
    console.log('开始倒入')
    setTimeout(() => {
      console.log('倒入成功')
      // 倒入成功后执行方法
      reject()
    }, myRandom())
  })
}
//  烧水
function boil() {
  return new Promise(reject => {
    console.log('开始烧水')
    setTimeout(() => {
      console.log('烧水成功')
      // 烧水成功后执行方法
      reject()
    }, myRandom())
  })
}
// //  买水 =》 倒入锅中 =》烧水 =》 倒入壶里
// buyWater() // 执行买水
//   .then(() => {
//     return infunde()
//   }) // 买水成功后执行倒入
//   .then(() => {
//     return boil()
//   }) // 倒入成功后执行 烧水
//   .then(() => {
//     return infunde()
//   }) // 烧水成功后执行倒水
//   .then(() => {
//     console.log('买水 =》 倒入锅中 =》烧水 =》 倒入壶里') //倒水完成
//   })

async function myfn() {
  await buyWater() // 买水
  await infunde() // 倒入
  await boil() // 烧水
  await infunde() // 倒入
}

myfn().then(() => {
  console.log('买水 =》 倒入锅中 =》烧水 =》 倒入壶里')
})
