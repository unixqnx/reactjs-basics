import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            age: props.initialAge,
            status: 10
        };

        setTimeout(
            ()=>this.setState({status:20})
            ,3000);

            this.onMakeOlder = this.onMakeOlder.bind(this);
    }

    onMakeOlder(){
        this.setState(
            {
                age: ++this.state.age
            }
        );
        console.log(this.age);
    }

    render(){
        return(
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, and your age is {this.state.age} years.</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button className="btn btn-primary" onClick={this.onMakeOlder}>Make me older!</button>
                {/* <button className="btn btn-primary" onClick={()=>this.onMakeOlder()}>Make me older!</button> */}
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
};