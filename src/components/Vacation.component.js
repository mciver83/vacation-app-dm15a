import React, { Component } from 'react';

export default class Vacation extends Component {

    componentWillReceiveProps(props) {
        console.log(11111111, props);
    }

    render() {
        let { name, image, activities } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <img className="vacation-image" src={image} />
                { activities.map((activity, index) => {
                    return  <p>{activity}</p>
                })}
            </div>
        )
    }
}