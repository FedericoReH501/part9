export type BodyRequest = {
  daily_exercises: number[];
  target: number;
};
const bodyIsComplete = (data: BodyRequest) => {
  let result: boolean = true;
  if (!data.daily_exercises || !data.target) {
    result = false;
  }
  console.log("body is complete:", result);
  return result;
};

const arrayIsNumeric = (param: number[]): boolean => {
  let result: boolean = true;
  param.forEach((n) => {
    if (isNaN(n)) {
      result = false;
    }
  });
  console.log("array is numeric:", result);
  return result;
};
export const bodyIsValid = (data: BodyRequest): void => {
  if (!bodyIsComplete(data)) {
    throw new Error("parameters missing");
  } else if (!arrayIsNumeric(data.daily_exercises || !isNaN(data.target))) {
    throw new Error("malformatted parameters");
  }
};
