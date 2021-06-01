function genericFunction<T>(arg: T): T [] {
    let myGenericArray: T[] = [];
    myGenericArray.push(arg);

    return myGenericArray;
}

let stringFromGenericFunction = genericFunction<string>("Some string goes here");

console.log(stringFromGenericFunction[0]);
