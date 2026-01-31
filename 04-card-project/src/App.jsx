import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <div className="parent">
        <Card name="Amazon" />
        <Card />
      </div>
    </div>
  );
};

export default App;
