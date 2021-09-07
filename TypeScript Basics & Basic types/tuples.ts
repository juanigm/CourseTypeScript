const person1: {
    name: string;
    age: number;
    hobbies: string[]; //Define string array.
    role: [number, string] // Define Tuple. The position one will be of type number and second position will be of type string.
} = {
    name: "Juani",
    age: 22,
    hobbies: ["cook", "football"],
    role: [3, "Admin"] // I have to respect the type of each position and the size of the array.
}

