export const argsAreValid = (data: string[]): boolean => {
  let result: boolean = true;
  for (let index = 2; index < data.length; index++) {
    const e = data[index];
    if (isNaN(Number(e))) {
      result = false;
    }
  }

  return result;
};
