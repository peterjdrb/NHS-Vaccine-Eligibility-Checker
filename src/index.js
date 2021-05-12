const check = require('./check')

const sleep = seconds => new Promise(resolve => setTimeout(resolve, seconds*1000));

const main = async() => {
    await check.NHSVaccine()
}

main()