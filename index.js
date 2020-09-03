// Your code here 	
class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b)
      }

}

class Triangle extends Polygon {
    get isValid() {
        let array = this.sides
        if (array[0] + array[1] < array[2]){
            return false;
        } else if (array[1] + array[2] < array[0]){
            return false;
        } else if (array[2] + array[0] < array[1]){
            return false;
        } else {
            return true;
        }
    }
} 

class Square extends Polygon {
    get isValid() {
        let array = this.sides
        let one = array[0]
        for(var i = 0; i < array.length; i++) {
            if(one != array[i]) {
                return false;
            }
        }
        return true;
    }

    get area() {
        let array = this.sides
        return array[0]*array[1]
    }
} 