class Polygon {
  constructor(sides) {
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
    switch (false) {
      case (this.sides[0] + this.sides[1]) > this.sides[2]:
        return false
      case (this.sides[0] + this.sides[2]) > this.sides[2]:
        return false
      case (this.sides[1] + this.sides[2]) > this.sides[0]:
        return false
      default:
        return true
    }
  }
}

class Square extends Polygon {
  get isValid() {
    const avg = this.perimeter / 4
    let returnValue = true
    this.sides.forEach(side => {
      if (side !== avg) { returnValue = false }
    })
    return returnValue
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}

