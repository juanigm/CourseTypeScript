
//enum Role { ADMIN, READ_ONLY, AUTHOR };

enum Role { ADMIN = "ADMIN", READ_ONLY = 5, AUTHOR = "AUTHOR" };

const person2 = {
    name: "Juani",
    age: 22,
    hobbies: ["cook", "football"],
    role: Role.ADMIN
}

if(person2.role === Role.ADMIN){
    console.log("Is Admin");
}

