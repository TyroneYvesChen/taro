const colorList = [
  '#2B7AEA',
  '#FE4660',
  '#3CB394',
  '#7C54C7',
  '#DAA231',
  '#888'
]

export const getBlockList = (startLine, endLine) => {
  let arr = []
  for (let i = startLine; i <= endLine; i++) {
    arr.push({
      label: i + 'X' + i,
      lineNum: i,
      min: 1,
      max: i * i,
      bgColor: colorList[i - startLine] || '#888'
    })
  }

  return arr
}
