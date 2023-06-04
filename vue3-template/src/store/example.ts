import { defineStore } from 'pinia'

/**
 * 注意点：
 *  1、第一个参数是store唯一Id
 *  2、推荐使用完整类型推断的箭头函数，所有声明的属性都会自动推断其类型。
 */
export const useExampleStore = defineStore('example', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      name: 'Example',
      age: 25,
      isStudy: true
    }
  }
})
