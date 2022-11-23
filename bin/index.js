import chalk from 'chalk';
import inquirer from 'inquirer';
console.log("\n");
const welcome = chalk.bgWhite("=========================================\n_________CALCULATOR BY MAHAD BAIG________\n=========================================");
console.log(welcome);
console.log("\n");
let first_number = await inquirer.prompt([{
        name: "firstNumber",
        type: "number",
        message: "Enter First Number"
    }]);
let operation = await inquirer.prompt([{
        name: "operation",
        type: "input",
        message: "Enter Operation to perform"
    }]);
let second_number = await inquirer.prompt([{
        name: "secondNumber",
        type: "number",
        message: "Enter Second Number"
    }]);
if (operation.operation == '/') {
    let result = first_number.firstNumber / second_number.secondNumber;
    console.log(chalk.greenBright(first_number.firstNumber + " " + operation.operation + " " + second_number.secondNumber + " = " + result));
}
else if (operation.operation == '*') {
    let result = first_number.firstNumber * second_number.secondNumber;
    console.log(chalk.greenBright(first_number.firstNumber + " " + operation.operation + " " + second_number.secondNumber + " = " + result));
}
else if (operation.operation == '-') {
    let result = first_number.firstNumber - second_number.secondNumber;
    console.log(chalk.greenBright(first_number.firstNumber + " " + operation.operation + " " + second_number.secondNumber + " = " + result));
}
else if (operation.operation == '+') {
    let result = first_number.firstNumber + second_number.secondNumber;
    console.log(chalk.greenBright(first_number.firstNumber + " " + operation.operation + " " + second_number.secondNumber + " = " + result));
}
else {
    console.log(chalk.white(chalk.bgRed(" Please Enter One of these four operation [ / , * , + , - ] ")));
}
