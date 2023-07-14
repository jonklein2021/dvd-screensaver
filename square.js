export default class Square {
    constructor(squareElement) {
        this.element = squareElement;
        this.reset();
    }

    get x() {
        return parseFloat(getComputedStyle(this.element).getPropertyValue("--x"));
    }
    
    get y() {
        return parseFloat(getComputedStyle(this.element).getPropertyValue("--y"));
    }

    set x(newX) {
        this.element.style.setProperty("--x", newX);
    }
    
    set y(newY) {
        this.element.style.setProperty("--y", newY);
    }

    rect() {
        return this.element.getBoundingClientRect();
    }

    reset() {
        this.x = Math.random() * 100;
        this.y = Math.random() * 100;
        this.direction = { x: 0 };
        while (Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9) {
            const heading = 2*Math.random()*Math.PI;
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
        }
        this.velocity = 0.025;
    }

    update(delta) {
        const rect = this.rect();

        this.x += (this.direction.x * this.velocity * delta);
        this.y += (this.direction.y * this.velocity * delta);
        
        if (rect.right >= window.innerWidth || rect.left <= 0) {
            console.log(this.direction.x);
            this.direction.x *= -1;
            console.log(this.direction.x);
        }

        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
            console.log(this.direction.y);
            this.direction.y *= -1;
            console.log(this.direction.y);
        }
    }
}
