import React from "react";
import { render } from "react-dom";
//const css = require("./app.css");
import css from "./app.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Mahadeva</h1>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));