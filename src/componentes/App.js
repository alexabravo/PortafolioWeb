import React from "react";
import Header from "./Header";
import About from "./About";
import Trabajos from "./trabajos";

class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <About/>
                <Trabajos/>
            </div>
        )
    }
}

export default App;