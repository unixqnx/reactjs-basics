import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            age: props.initialAge,
            status: 10,
            homeLink: "Changed Link"
        };

        setTimeout(
            ()=>this.setState({status:20})
            ,3000);

            this.onMakeOlder = this.onMakeOlder.bind(this);
            this.onChangeLinkName = this.onChangeLinkName.bind(this);            
    }

    onMakeOlder(){
        this.setState(
            {
                age: ++this.state.age
            }
        );
        console.log(this.age);
    }

    onChangeLinkName(){
        this.props.changeLink(this.state.homeLink);
    }


    render(){
        return(
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, and your age is {this.state.age} years.</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button className="btn btn-primary" onClick={this.onMakeOlder}>Make me older!</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.onChangeLinkName}>Change header</button>                
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func
};