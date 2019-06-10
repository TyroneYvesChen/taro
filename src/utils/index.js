import { TYPE_COMMON, TYPE_ANIMAL } from '@constants/app'

// 普通模式下的颜色列表
const colorList = [
  '#2B7AEA',
  '#FE4660',
  '#3CB394',
  '#7C54C7',
  '#DAA231',
  '#888'
]

// 普通模式的数据
export const getBlockList = (startLine, endLine) => {
  let arr = []
  for (let i = startLine; i <= endLine; i++) {
    arr.push({
      type: TYPE_COMMON,
      label: i + 'X' + i,
      lineNum: i,
      min: 1,
      max: i * i,
      bgColor: colorList[i - startLine] || '#888',
      title: `以最快速度从1选到${i * i}`
    })
  }

  return arr
}

// 生成数组并且乱序
export const getRandomList = len =>
  Array(len)
    .fill(1)
    .map((v, i) => i)
    .sort((a, b) => (Math.random() > 0.5 ? -1 : 1))

export const randomNum = number => Math.floor(Math.random() * number + 1)
