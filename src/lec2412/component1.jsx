import * as React from "react";
class Xyz extends React.component1{
    render() {
        return(
            <div>
                <h1>Component1</h1>
                <h2>component2</h2>
                <h3>component3</h3>
                <Abc/>

            </div>
        );
    }
}
class Abc extends React.component1{
    render() {
        return(
            <div>
                <Aaa/>
                <h1>Component1</h1>
                <h2>component2</h2>
                <h3>component3</h3> 
            </div>
        );
    }
}
class Aaa extends React.Component1{
    render() {
        return(
            <div>
                <h1>Component1</h1>
                <h2>component2</h2>
                <h3>component3</h3> 
            </div>
        );
    }
}
export default Xyz;