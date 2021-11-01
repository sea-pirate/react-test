/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {

;// CONCATENATED MODULE: ./src/some-components.jsx
//import React from "React";
//export class MyExternalComponent
class MyExternalComponent extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("p", null, "Wow, this works! ", this.props.party && "Let's have a party!");
  }

}

const testStr = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createElement("pre", null, "Hi hi 2.0"))); //module.exports = { MyExternalComponent };


;// CONCATENATED MODULE: ./src/test.jsx
// import React from "React";
// import ReactDOM from "ReactDOM";
 // css-loader



class Element extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h1", null, "Hi there");
  }

}

;
const StrElement = /*#__PURE__*/React.createElement("pre", null, "Hi hi"); // is just a "string"

class Text extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("p", null, this.props.text);
  }

}

;

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Element, null), StrElement, /*#__PURE__*/React.createElement(Text, {
      text: "herro"
    }), /*#__PURE__*/React.createElement(Text, {
      text: "text"
    }), /*#__PURE__*/React.createElement(MyExternalComponent, {
      party: true
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// extracted by mini-css-extract-plugin

})();

/******/ })()
;