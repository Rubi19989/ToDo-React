import { Component } from 'react'
// import './index.css'

class ComponentClase extends Component {
    state = { count: 0 }

    sumar() {

        this.setState({ count: this.state.count + 1 })
    }

    restar() {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }


    componentDidMount() {
        console.log("hola");
    }

    componentDidUpdate() {
        console.log("actualizado");
    }

    componentWillUnmount() {
        console.log("me mori");
    }



    render() {
        return (
            <>
                <div className="btns">
                    <h1>BUTTONS</h1>
                    <button className="btn1" onClick={() => this.sumar()}>  + </button>
                    <button className="btn1" onClick={() => this.restar()}> - </button>
                    {this.state.count}
                </div>
            </>
        );
    }
}

export default ComponentClase;