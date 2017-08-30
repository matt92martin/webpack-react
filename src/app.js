import React, { Component } from 'react'
import { connect } from 'react-redux'


class App extends Component{

    render(){
        return (
            <div>
                Wow it works!
            </div>
        );
    }
}


export default connect()(App)