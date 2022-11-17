const StateTester = artifacts.require("StateTester");
const D = console.log;

async function deployBatch(count) {
    const contracts = [];
    for (let i = 0; i < count; i++) {
        contracts.push(await StateTester.new());
    }
    return contracts;
}

async function changeState(contract, size, mode) {
    await contract.sets(size, mode);
}

async function main() {
    const testers = await deployBatch(11);
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    const write = async ()=>{
        for (let i = 0; i < testers.length; i++) {
            const tester = testers[i];
            await changeState(tester, 128, primes[i]);
        }
        primes.reverse();
    }
    await write();
    await write();
}

module.exports = function (result) {
    return main()
        .then(result).catch(result);
}
