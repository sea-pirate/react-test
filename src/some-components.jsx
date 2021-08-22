//import React from "React";

//export class MyExternalComponent
class MyExternalComponent extends React.Component {
    render() {
        return <p>Wow, this works! { this.props.party && "Let's have a party!" }</p>
    }
}
const testStr = <pre>Hi hi 2.0</pre>;

//module.exports = { MyExternalComponent };
export { MyExternalComponent, testStr };