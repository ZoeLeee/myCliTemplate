import React from "react";
import ReactDOM from "react-dom";

interface Props {}

const App: React.FC<Props> = () => {
  return <div>Typescript Hello World</div>;
};


ReactDOM.render(<App />, document.getElementById('app'));