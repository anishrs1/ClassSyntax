
class Computer{
    constructor(brand, OS, type){
        this.brand = brand;
        this.OS = OS;
        this.type = type;
        
    }
    powerOn(){
        return `${this.brand} ${this.type} powers on with ${this.OS}.`;
    }

    static staticMethod(arr){
        let results = [];
        for(let i = 0;i<arr.length;i++){
            results[i] = arr[i].powerOn();
        }
        return results;    
    }
}

try {
	module.exports = Computer;
} catch {
	module.exports = null;
}

//console.log(Computer.staticMethod(arr)); 

