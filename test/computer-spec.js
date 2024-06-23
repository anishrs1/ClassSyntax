const assert = require("assert");

const Computer = require("../class/computer.js");

describe("Computer's powerOn() method", function () {
    it("should return the computer's attributes after calling powerOn()", function () {
        let laptop = new Computer('Lenovo', 'Windows', 'Portable');
        let laptopPowerOn = laptop.powerOn();

        let pc = new Computer('Macbook', 'MacOS', 'Desktop');
        let pcPowerOn = pc.powerOn();

        assert.equal(laptopPowerOn, `Lenovo Portable powers on with Windows.`);
        assert.equal(pcPowerOn, `Macbook Desktop powers on with MacOS.`);
        
    });

    it("should call PowerOn method for each computer in the array passed to static method.", function() {
        let laptop = new Computer('Lenovo', 'Windows', 'Portable');
        let pc = new Computer('Macbook', 'MacOS', 'Desktop');
        
        let laptopPowerOn = `Lenovo Portable powers on with Windows.`;
        let pcPowerOn = `Macbook Desktop powers on with MacOS.`;
        let powerOnResults = [laptopPowerOn, pcPowerOn];

        let computers = [laptop, pc];

        let staticMethodResults = Computer.staticMethod(computers);
        for(let i = 0;i<computers.length;i++){
            assert(staticMethodResults[i], powerOnResults[i]);
        }

    }); 

});
