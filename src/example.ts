
// #1

function concat(first: string, second: string): string {
  return first + second;
}

concat('Hello ', 'World') // -> Hello World;

// #2

interface MyAwesomeInterface {
  howIDoIt: string,
  simeArray: (string | number)[],
  withData: {howIDoIt: string, simeArray: (string | number)[]}[]
}

const MyHometask: MyAwesomeInterface = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// #3

interface MyArray<T> {
  [n: number]: T;
  
  reduce<U>(fn: (accumulator: T, currentValue: T) => U): U;
}

const tsArr: MyArray<number> = [1,2,3,4];

tsArr.reduce((acc, cur) => acc + cur);