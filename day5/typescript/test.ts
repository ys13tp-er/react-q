const a: number = 1;
const str: string = 'abc'
const arr: [number, string, boolean | string | number, any?] = [1, '2', 'abc']
let u: undefined = undefined;
let n: null = null;
let obj: object = {
    name: 'yao',
    age: 18
}
const fn = (a: number, b: number): number => {
    console.log(1)
    return a + 1
}

const fn2 = (a: number, b: number): void => {
    console.log(1)
}

function error(message: string): never {
    throw new Error(message);
}