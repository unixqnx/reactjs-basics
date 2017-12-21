import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{

    constructor(props){
        super(props);
        this.age = props.age;

        this.onMakeOlder = this.onMakeOlder.bind(this);
    }

    onMakeOlder(){
        this.age++;
        console.log(this.age);
    }

    render(){
        return(
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, and your age is {this.age} years.</p>
                <hr/>
                <button className="btn btn-primary" onClick={this.onMakeOlder}>Make me older!</button>
                <button className="btn btn-primary" onClick={()=>this.onMakeOlder()}>Make me older!</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};