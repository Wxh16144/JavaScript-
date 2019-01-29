// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//   let resarr = []
//   try {
//     nums.forEach((item, index, arr) => {
//       arr.slice(index + 1).forEach((newitem, newindex, newarr) => {
//         if (newitem + item === target) {
//           resarr.push(index, newindex + index + 1)
//           throw new Error('ok')
//         }
//       })
//     })
//     resarr = [0, 0]
//   } catch (error) {}
//   return resarr
// }
// console.log(twoSum([3, 2, 4], 6))
// // 2 4
// // 3 7
// // 5 6

// 创建构造函数HashTable
class HashTable {
  constructor() {
    this.size = 0 // 初始化哈希表的记录条数size
    this.res = {} //创建对象用于接受键值对
  }
  // 添加关键字，无返回值
  add(key, value) {
    //判断哈希表中是否存在key，若不存在，则size加1，且赋值
    if (!this.containKey(key)) {
      this.size++
    }
    // 如果之前不存在，赋值； 如果之前存在，覆盖。
    this.res[key] = value
  }
  // 删除关键字, 如果哈希表中包含key，并且delete返回true则删除，并使得size减1
  remove(key) {
    if (this.containKey(key) && delete this.res[key]) {
      this.size--
    }
  }
  // 哈希表中是否包含key，返回一个布尔值
  containKey(key) {
    return key in this.res
  }
  // 哈希表中是否包含value，返回一个布尔值
  containValue(value) {
    // 遍历对象中的属性值，判断是否和给定value相等
    for (var prop in this.res) {
      if (this.res[prop] === value) {
        return true
      }
    }
    return false
  }
  // 根据键获取value,如果不存在就返回null
  getValue(key) {
    return this.containKey(key) ? this.res[key] : null
  }
  // 获取哈希表中的所有value, 返回一个数组
  getAllValues() {
    var values = []
    for (var prop in this.res) {
      values.push(this.res[prop])
    }
    return values
  }
  // 根据值获取哈希表中的key，如果不存在就返回null
  getKey(value) {
    for (var prop in this.res) {
      if (this.res[prop] === value) {
        return prop
      }
    }
    // 遍历结束没有return，就返回null
    return null
  }
  // 获取哈希表中所有的key,返回一个数组
  getAllKeys() {
    var keys = []
    for (var prop in this.res) {
      keys.push(prop)
    }
    return keys
  }
  // 获取哈希表中记录的条数，返回一个数值
  getSize() {
    return this.size
  }
  // 清空哈希表，无返回值
  clear() {
    this.size = 0
    this.res = {}
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const queryIndex = function(nums, result) {
  const hashTable = new HashTable()
  let resarr = []

  // 扫描一遍，存储下标和值
  nums.forEach((item, index) => hashTable.add(index, item))

  for (var j = 0, len = nums.length; j < len; j++) {
    let sub = []
    if (hashTable.containValue(result - arr[j]) && result !== 2 * arr[j]) {
      // 获取两个下标，跳出循环
      sub.push(j)
      let antherIndex = Number(hashTable.getKey(result - arr[j]))
      sub.push(antherIndex)
    }
    if (sub.length !== 0) {
      resarr.push(sub)
    }
  }
  return resarr
}
console.log(queryIndex([1, 5, 7, 3, 8], 15)) // 2, 4
console.log(queryIndex([8, 18, 28, 12, 29, 17], 46)) // 2, 4
console.log(queryIndex([8, 18, 28, 12, 29, 17], 2)) // -1
