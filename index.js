// Your code here
class Polygon{
    constructor(eachSideOfObject){
        this.sides = eachSideOfObject;
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let sum = 0;
        for(let side of this.sides){
            sum += side
        }
        return sum
    }
}

class Triangle extends Polygon {

    get isValid(){
        if(this.sides.length == 3){
            const side1 = this.sides[0]
            const side2 = this.sides[1]
            const side3 = this.sides[2]

            if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
                return true
            }
            return false
        }
    }
}

class Square extends Polygon{
    
    get isValid(){
        if(this.sides.length == 4){
            const value = this.sides[0]
            for(let i = 0; i < this.sides.length; i++){
                if(value != this.sides[i]){
                    return false
                }

            }
            return true
        }  
    }

    get area(){
        return this.sides[0] ** 2
    }
}