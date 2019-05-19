import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';




class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMessage:'' }; 
    // }
        // -------^^^^^SAME THING^^^^^^------------
    state = { lat: null, errorMessage:''};

    //  --------------------------------------------

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude, errorMessage:'' }), 
            (err) => this.setState({ errorMessage:err.message })
          );
    }
    


    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div><Spinner message="Please accept location rquest" /></div>;
    }
}



ReactDOM.render(<App />, document.querySelector("#root"));


