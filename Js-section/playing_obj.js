const users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

console.log(users[1].name)

console.log(users[0].name)

console.log(users[1].name)


function playing_objects(users){
    for (let i = 0 ; i <users.length; i++){
        console.log(users[i].name, users[i].age)
    }

}
playing_objects(users)