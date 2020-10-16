import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import React from "react";

const App = () => {
  return (
    <div>
      <Header />
      <Note title={"yuh"} content={"poopy"} />
      <Footer />
    </div>
  );
};

export default App;
