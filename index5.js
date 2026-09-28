// Пользователи

let users = [
    {
        login: "omor",
        password: "1234",
        name: "Омор"
    },
    {
        login: "admin",
        password: "1111",
        name: "Админ"
    },
    {
        login: "student",
        password: "2222",
        name: "Студент"
    },
    {
        login: "user",
        password: "3333",
        name: "Пользователь"
    },
    {
        login: "test",
        password: "4444",
        name: "Тест"
    }
];


// Авторизация

function loginUser() {

    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    let user = users.find(function(item) {
        return item.login == login && item.password == password;
    });

    if (user) {
        document.getElementById("result").innerHTML =
            "Здравствуйте, " + user.name + "!";
    } else {
        document.getElementById("result").innerHTML =
            "Неверный логин или пароль";
    }
}


// Сумма всех параметров

function sumAll() {

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }

    return sum;
}

console.log(sumAll(2, 5, 6, 7));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));