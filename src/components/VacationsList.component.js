import React, { Component } from 'react';

import vacations from '../vacations';

import VacationContainer from './VacationContainer.component';

export default class VacationList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(vacations)
       return (
        vacations.map((vacation, index) => {
            return (
                <VacationContainer vacation={vacation}/>
            )
        })
       )
    }
}