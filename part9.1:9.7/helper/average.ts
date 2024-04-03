export const average = (data: number[]): number => {
  const totalHours = data.reduce((accumulator, current) => {
    return accumulator + Number(current);
  }, 0);
  return totalHours / data.length;
};
