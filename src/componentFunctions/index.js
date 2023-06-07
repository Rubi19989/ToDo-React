import { useState } from "react";
// import './index.css'

const ComponentFunction = () => {
    let [state, setState] = useState({ count: 0 })

    const sumar = () => {
        setState({ count: state.count + 1 });
    }

    const restar = () => {
        if (state.count > 0) {
            setState({ count: state.count - 1 });
        }
    }
    const multi = () => {
        setState({ count: state.count * 2 });

    }


    return (
        <>
            <div className="btns">
                <h1>BUTTONS</h1>
                <button className="btn1" onClick={() => sumar()}>  + </button>
                <button className="btn1" onClick={() => restar()}> - </button>
                <button className="btn1" onClick={() => multi()}>  * </button>
                {state.count}
            </div>
        </>
    );
}

export default ComponentFunction;