// Your code here

class Polygon{
    constructor(array){
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter(){
        let total = 0
        for (const side of this.sides){
            total += side
        }
        return total
    }

}

class Triangle extends Polygon{
    get isValid(){
        for (let i=0; i <this.sides.length; i++){
            if (this.sides[i] === this.sides[i+1]){
                return true}
            else{
                return false
            }
        }
    }
}

class Square extends Polygon{
    get isValid(){
        for (let i=0; i <this.sides.length; i++){
            if (this.sides[i] === this.sides[i+1]){
                return true}
            else{
                return false
            }
        }
    }
    get area(){
        return this.sides[0]*this.sides[1]
    }
}