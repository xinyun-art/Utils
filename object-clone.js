/**
 * 对象浅克隆
 * @param  {Object|Array} targetSr 被克隆的对象
 * @return {Object|Array} cloneSr 克隆出的新对象
 */
function shadowClone(targetSr) {
  let cloneSr = targetSr instanceof Array ? [] : {}
  for (let key in targetSr) {
    cloneSr[key] = targetSr[key]
  }
  return cloneSr
}

/**
 * 对象浅克隆2
 * @param  {Object} targetSr 被克隆的对象
 * @return {Object} cloneSr 克隆出的新对象
 */
function shadowClone2(targetSr) {
  let sr = targetSr instanceof Array ? [] : {}
  let cloneSr = Object.assign(sr, targetSr)
  return cloneSr
}

/**
 * 对象浅克隆3
 * @param  {Object|Array} targetSr 被克隆的对象
 * @return {Object|Array} cloneSr 克隆出的新对象
 */
function shadowClone3(targetSr) {
  let cloneSr = targetSr instanceof Array ? [...targetSr] : { ...targetSr }
  return cloneSr
}

/**
 * 对象深克隆 未完成，待以后处理
 * @param {Object|Array} targetSr 要克隆的对象
 * @return {Object|Array} cloneSr 克隆出的新对象
 */
function deepClone(targetSr) {
  let cloneSr = targetSr instanceof Array ? [] : {}
  for (let key in targetSr) {
    // 此if语句可用三目表达式优化使其更简洁
    if (typeof targetSr[key] === 'object') {
      cloneSr[key] = deepClone(targetSr[key])
    } else {
      cloneSr[key] = targetSr[key]
    }
  }
  return cloneSr
}

/**
 * 对象深克隆2 未完成，待以后处理
 * 此函数参考 [OSCHINA](https://my.oschina.net/u/4270977/blog/4268783)
 * @param {Object|Array} obj 要克隆的对象
 * @return {Object|Array} result 克隆出的新对象
 */
function deepClone2(obj) {
  // 非引用类型及函数将直接返回
  if (typeof obj !== 'object') return obj
  const result = obj instanceof Array ? [] : {}
  for (let key in obj) {
    result[key] = deepClone(obj[key])
  }
  return result
}

/**
 * 对象深克隆3 未完成，待以后处理
 * @param {Object|Array} targetSr 要克隆的对象
 * @return {Object|Array} cloneSr 克隆出的新对象
 */
function deepClone3(targetSr) {
  return JSON.parse(JSON.stringify(targetSr))
}
