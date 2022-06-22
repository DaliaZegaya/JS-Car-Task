class Car {
    constructor (wheelsNum, engine, color) {
        this.wheelsNum= wheelsNum;
        this.engine= engine;
        this.color= color;
    }

    getInfo () {
        return `Wheels Number: ${this.wheelsNum} 
        Engine capacity: ${this.engine} 
        Color: ${this.color}`
    }
    static biggerEngine (array) {
        let maxObj= array[0]
        array.forEach ((item)=> {
            if (item.engine>maxObj.engine) {
                maxObj= item
            }
        }) 
        return console.log(maxObj); 

    }
}

class Suv extends Car {
    constructor (wheelsNum, engine, color, name) {
        super(wheelsNum, engine, color)
        this.name= name;
    }
    getInfo () {
        return `${super.getInfo()} Name: ${this.name}`

    } 
    resultToUpperCase () {
        return this.name[0].toUpperCase() + this.name.substring(1,this.name.length-1) + this.name[this.name.length-1].toUpperCase();
    }
    get result () {
        return this.resultToUpperCase()
    }
}
let suv= new Suv (8, 500, "red", "bmw")


class Jeep extends Car {
    constructor (wheelsNum, engine, color, name) {
        super(wheelsNum, engine, color)
        this.name= name;
    }
    getInfo () {
        return `${super.getInfo()} Name: ${this.name}`

    } 
    
}
let jeep= new Jeep (10, 1200, "blue", "lambo")

class Bus extends Car {
    constructor (wheelsNum, engine, color, name) {
        super(wheelsNum, engine, color)
        this.name= name;
    }
    getInfo () {
        return `${super.getInfo()} Name: ${this.name}`

    } 

}
let bus= new Bus (70, 800, "yellow", "kia")

Car.biggerEngine([suv, jeep, bus])

function formFunc() {
    let userCar;
    switch (mySelect.value) {
        case "suv": 
        userCar= new Suv (user_wheels.value, user_engine.value, user_color.value, user_name.value); 
        break;

        case "jeep": 
        userCar= new Jeep (user_wheels.value, user_engine.value, user_color.value, user_name.value); 
        break;

        case "bus": 
        userCar= new Bus (user_wheels.value, user_engine.value, user_color.value, user_name.value);
        break;

        default:
        return;
    }

    for (let key in userCar) {
        myTable.innerHTML+= `<th> ${key}:</th> <td>${userCar[key]}</td> `
    }
}
