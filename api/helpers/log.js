import chalk from "chalk";


export default {

    error(msg) {
        console.log(chalk.red(msg))
    },

    success(msg) {
        console.log(chalk.green(msg))
    },

    warning(msg) {
        console.log(chalk.yellow(msg))
    },

    info(msg) {
        console.log(chalk.blue(msg))
    }

}