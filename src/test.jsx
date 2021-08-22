import * as ExtCom from "./some-components";

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
                <ExtCom.MyExternalComponent party="true" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));