import {ToyReact, Component} from './ToyReact.js';
// for(let i of [1, 2, 3])
//     console.log(i)
// console.log("main")

//webpac-dev-server

class MyComponent extends Component{
    render(){
        return <div>cool</div>
    }


}



let a = <MyComponent name='a' id="ida">
    <span>Hello</span>
    <span>world</span>
    <span>!</span>

</MyComponent>

ToyReact.render(
    a,
    document.body
);

let b = <div name='a' id="ida">
    <span>Hello</span>
    <span>world</span>
    <span>!</span>

</div>

document.body.appendChild(b);

