const check = require('./check')

const sleep = seconds => new Promise(resolve => setTimeout(resolve, seconds*1000));

const main = async() => {
    while (true) {
        await check.NHSVaccine()
        await sleep(30)
    }
}

main()