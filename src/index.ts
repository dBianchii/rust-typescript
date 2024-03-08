class Area {
	constructor(public width: number, public height: number) {}
	getArea() {
		return this.width * this.height;
	}
}

class Rectangle implements Area {
	constructor(public width: number, public height: number) {}
	getArea() {
		return this.width * this.height;
	}
}

class Circle implements Area {
	constructor(public radius: number) {}
	getArea() {
		return Math.PI * this.radius * this.radius;
	}
}

const rectangle = new Rectangle(10, 20);

console.log(rectangle.getArea()); // 200
