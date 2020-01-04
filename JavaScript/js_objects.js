var students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function print(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

print(students);

var users = {
    employees: [
        {'first_name': 'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function allUsers(obj){
    for(let x in users){
        console.log(x.toUpperCase());
        for(let i = 0; i < users[x].length; i++){
            let charCount = users[x].first_name.length + users[x].last_name.length;
            console.log(i+ 1 + ' - ' + users[x][i].first_name.toUpperCase() + ' , ' + users[x][i].last_name.toUpperCase() + ' - ' + charCount);
        }
    }
}