
class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild(vchild) {
        vchild.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}
class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content)
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

export class Component {
    setAttribute(name, value) {
        this[name] = value;
    }
    mountTo(parent) {
        let vdom = this.render();
        vdom.mountTo(parent);
    }
}

export let ToyReact = {
    createElement(type, attributes, ...children) {
        // console.log(arguments);
        // debugger;
        // return document.createElement(type);
        let element;
        if(type === "string") 
            element = new ElementWrapper(type)
        else
            element = new type;
            
        // let element = document.createElement(type)
        for(let name in attributes) {
            //element[name] = attributes[name];  wrong
            element.setAttribute(name, attributes[name]);
        }
        for(let child of children) {
            if(typeof child === "string")
                child = new TextWrapper(child);
            element.appendChild(child)
        }
        return element;
    },
    render(vdom,element) {
        element.mountTo(element)
        document.appendChild(vdom);
    }
}