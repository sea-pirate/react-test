// import React from "React";
// import ReactDOM from "ReactDOM";
// import css from "./test.css"; // css-loader
import * as ExtCom from "./some-components.jsx";
class Element extends React.Component { render() { return (<h1>Hi there</h1>); } };
const StrElement = <pre>Hi hi</pre>; // is just a "string"
class Text extends React.Component { render() { return (<p>{this.props.text}</p>); } };
class App extends React.Component {
    render() {
        return (
            <div>
                <Element />
                { StrElement  }
                <Text text="herro" />
                <Text text="text" />
                {/* ExtCom.testStr */}
                <ExtCom.MyExternalComponent party={true} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));