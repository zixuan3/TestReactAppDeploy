import React from 'react';
import './control_bar.css';
import { NavLink } from "react-router-dom";


export default class ControlBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div id="ControlBarWrapper">
                <div className="controlBarWrapper">
                    <NavLink className='resetFilters' to="/quiz">
                        QUIZ
                    </NavLink>
                    <div className='resetFilters' onClick={this.props.onResetFilters}>
                        重置筛选条件
                    </div>
                </div>
            </div>
        )
    }   
}