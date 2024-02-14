interface ValidData {
  weight: number
  height: number
}

const argsAreValid = (data: any): boolean => {
  let result: boolean = true
  console.log(data)
  for (let index = 0; index < data.length; index++) {
    const e = data[index]
    console.log("argsArevalid data:", e)
    if (isNaN(e)) {
      result = false
    }
  }

  return result
}

export const parseEntries = (args: any): ValidData => {
  if (args.length > 2) throw new Error("too many arguments")
  if (args.length < 2) throw new Error("not enough arguments")
  if (argsAreValid(args)) {
    return {
      weight: Number(args[1]),
      height: Number(args[0]),
    }
  } else {
    throw new Error("you must enter valid numbers!")
  }
}
