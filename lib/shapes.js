class BaseShape{
    color;
    text;
    svgString;

    setText(text){
        this.text = text
    }

    setColor(color){
        this.color = color
    }

    render(){
        return this.svgString
    }
}

class Triangle extends BaseShape{

    
    render(){

        this.svgString = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><!-- Triangle --><polygon points="50,10 10,90 90,90" fill="${this.color}" /><!-- Text --><text x="32" y="70" fill="white" font-size="20">${this.text}</text></svg>`

        return this.svgString

    }

}

class Square extends BaseShape{

    render(){

        this.svgString = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><!-- Square --><rect x="10" y="10" width="80" height="80" fill="${this.color}" /><!-- Text --><text x="34" y="56" fill="white" font-size="16">${this.text}</text></svg>`

        return this.svgString
    }
}

class Circle extends BaseShape{
    render(){
        return this.svgString = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><!-- Circle --><circle cx="50" cy="50" r="40" fill="${this.color}" /><!-- Text --><text x="35" y="55" fill="white" font-size="16">${this.text}</text></svg>`
    }
}

module.exports = {Triangle, Square, Circle, BaseShape}