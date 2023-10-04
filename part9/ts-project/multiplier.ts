export type Operation = 'multiply' | 'add' | 'divide';
type result= number|string

export const calculator = (a: number, b: number, op: Operation):result => {
  if (op === 'multiply') {
    return a * b;
  } else if (op === 'add') {
    return a + b;
  } else if (op === 'divide') {
    if (b === 0) {
      throw new Error("can't divide  by 0!")
      // return "can't be divided by 0!"
    }
    return a / b;
  }
  return "invalid operation"
};
try {
  console.log("the result is",calculator(8,4, 'divide'))
  }
catch (e: unknown) {
  if (e instanceof Error) {
    console.log("error is :",e.message)
  }
  }