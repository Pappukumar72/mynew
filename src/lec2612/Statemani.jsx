import * as React from "react";
class StateExample1 extends React.Component{
    state = {
        first: false,
        second: true,
        txt: "Initial Value",
        cls : "red"
    };
    constructor() {
        super();
        setTimeout(() => {
            this.setState({first: true,second: false, txt: "Update Value", clr: "blue"});
        },10000);
        setTimeout(() => {
            this.setState({first: true, second: false, txt: "Updated value", clr: "green"});
        },15000);

    }
    render() {
        const{first, second,txt,clr} = this
        return(
            <div>
                <button disabled={first}>Button 1</button>
                <button disabled={second}>Button 2</button>
                <label style={{color: clr}}>{txt}</label>
                <input value={txt}/>
            </div>
        );
    }
}
export default StateExample1;
