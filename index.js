class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        let perimeter = 0
        for (let i = 0; i < this.countSides; i++) {
            perimeter += this.array[i]
        }
        return perimeter
    }
}

class Triangle extends Polygon {

    get isValid() {
        const array = this.array;
        if (array[0] + array[1] <= array[2]) {
            return false
        } else if (array[0] + array[2] <= array[1]) {
            return false
        } else if (array[1] + array[2] <= array[0]) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        const array = this.array;
        const side1 = array[0]

        for (let i = 0; i < array.length; i++) {
            if (side1 != array[i]) {
                return false
            }
        }
        return true
    }

    get area() {
        const array = this.array
        return array[0] * array[2]
    }
}