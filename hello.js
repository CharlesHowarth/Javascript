// let password = "123456"

// if (password.length < 8) {
//     console.log("password is too short")
// }
// else {
//     console.log(password)
// }

// let testvalue = 15;

// if (testvalue % 3 == 0 && testvalue % 5 == 0) {
//     console.log("divisble by 3 and 5")
// }
// else if (testvalue % 3 == 0) {
//     console.log("divisble by 3")
// }
// else if (testvalue % 5 == 0) {
//     console.log("div by 5)")
// }
// else {
//     console.log("not divisible by 3 or 5")
// }


// const num_func = (ipnum) => {
//     console.log(ipnum + 1)
// }

// num_func(22)

// const mathm = (num1, num2, oper) => {
//     if (oper=="+") {
//         let result = num1 + num2;
//         console.log(`Result of ${num1} ${oper} ${num2} is ${result}`);
//     }
//     else if (oper=="-") {
//         let result = num1 - num2;
//         console.log(`Result of ${num1} ${oper} ${num2} is ${result}`);
//     }
//     else if (oper=="x") {
//         let result = num1 * num2;
//         console.log(`Result of ${num1} ${oper} ${num2} is ${result}`);
//     }
//     else if (oper=="/") {
//         let result = num1 / num2;
//         console.log(`Result of ${num1} ${oper} ${num2} is ${result}`);
//     }


// }


// mathm(100,5,"-")


// const stradd = (str1, str2) => {
//     console.log(str1 + str2)
// }

// stradd("abc","def")

let result = 0

for (i=0; i<1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        result = result + i;
    }
}

console.log(result)