import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
//------------------------------------------------
        setTimeout(
            ()=>this.setState({status:1})
            ,3000);
//------------------------------------------------
            this.onMakeOlder = this.onMakeOlder.bind(this);
            this.onChangeLinkName = this.onChangeLinkName.bind(this);
            this.onHandleChange = this.onHandleChange.bind(this);
//------------------------------------------------
            console.log("Constructor");
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReciveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate", nextProps, nextState);
        // if(nextState.status === 1){
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate", nextProps,  nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
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

    onHandleChange(event){
        this.setState(
        {
            homeLink:event.target.value
        }
    );
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
                <input type="text" value={this.state.homeLink} onChange={this.onHandleChange}/>
                <button className="btn btn-primary" onClick={this.onChangeLinkName}>Change header</button>                
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};