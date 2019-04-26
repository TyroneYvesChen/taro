export const getBlockList = (startLine, endLine) => {
  let arr = []
  for (let i = startLine; i <= endLine; i++) {
    arr.push({
      label: i + 'X' + i,
      lineNum: i,
      min: 1,
      max: i * i
    })
  }

  return arr
}
