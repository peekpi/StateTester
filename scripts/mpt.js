const ProvethVerifier = artifacts.require("ProvethVerifier");
const testcases = require('./testcases.json')
const D = console.log;
async function main() {
    D("testcase size:", testcases.length);
    const mpt = await ProvethVerifier.deployed();
    for(let i = 0; i < testcases.length; i++) {
        const tcase = testcases[i];
        const expect = tcase.result;
        const inputs = tcase.inputs;
        const ret = tcase.return;
        const r = await mpt.MPTProof.call(inputs.rootHash, inputs.keys, inputs.proof);
        D(i, expect, r==ret);
        if(r!=ret)
            throw `error: ${i} ${expect} ${r} ${ret}`
    }
}

module.exports = function (result) {
    return main()
        .then(result).catch(result);
}
