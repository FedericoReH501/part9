export const argsAreValid = (data: any): boolean => {
  let result: boolean = true
  for (let index = 2; index < data.length; index++) {
    const e = data[index]
    if (isNaN(e)) {
      result = false
    }
  }

  return result
}
