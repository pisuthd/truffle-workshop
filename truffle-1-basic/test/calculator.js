const Calculator = artifacts.require("Calculator");

contract("Calculator", accounts => {

    let calculator

    before(async () => {

        calculator = await Calculator.new()

    })

    it("Able to update A and B", async () => {

        let originalA = await calculator.A()
        let originalB = await calculator.B()

        assert.equal(originalA, 0)
        assert.equal(originalB, 0)

        await calculator.setA(10)
        await calculator.setB(1)

        originalA = await calculator.A()
        originalB = await calculator.B()

        assert.equal(originalA, 10)
        assert.equal(originalB, 1)
    })


    it("Ensures combineAB() & subtractAB() are correct", async () => {

        const outputCombineAB = await calculator.combineAB()
        assert.equal(outputCombineAB, 11)

        const outputSubtractAB= await calculator.subtractAB()
        assert.equal(outputSubtractAB, 9)

    })

})