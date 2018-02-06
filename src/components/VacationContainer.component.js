import React, {Component} from 'react';

import Vacation from './Vacation.component';

export default class VacationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: true,
            name: props.name
        }

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleEditClick() {
        this.setState({edit: false})
    }

    handleInputChange(val) {
        this.setState({name: val})
    }

    render () {
        return (
            <div>
                {this.state.edit ? 
                    <button onClick={this.handleEditClick}>edit</button> : 
                    <div>
                        <input onChange={(e) => this.handleInputChange(e.target.value)} value={this.state.name} placeholder="name" />
                        <button>save</button>
                        <button>cancel</button>
                    </div>}
                <Vacation {...this.props.vacation} name={this.state.name}/>
            </div>
        )
    }
}