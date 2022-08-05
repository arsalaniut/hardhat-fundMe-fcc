const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhatconfig")
const d = "8"
const i_ans = "200000000000"
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    if (chainId == 31337) {
        log("this is local network deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [d, i_ans],
        })
        log("mocks deployed....")
        log(
            "-------------------------------------------------------------------------"
        )
    }
}
module.exports.tags = ["all", "mocks"]
