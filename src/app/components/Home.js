import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
    render(){

        console.log(this.props);
        let text = "Something!";
        return(
            <div>
                <p>In a new Component!</p>
                <p>{text}</p>
                <p>Your name is {this.props.name}, and your age is {this.props.age} years.</p>
                <p>User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i)=><li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};