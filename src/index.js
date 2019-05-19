import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { lat: null };

//         window.navigator.geolocation.getCurrentPosition(
//             (position) => console.log(position),
           
//             (err) => console.log(err)
//           );
        
    
//     }
    
   
//     render() {
      
//         return <div>Latitude: </div>;
//     }
// }


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
        return <div>Loading!</div>;
    }
}



ReactDOM.render(<App />, document.querySelector("#root"));


