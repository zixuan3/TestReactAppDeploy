import React from 'react';
import './Result.css';
import { NavLink } from "react-router-dom";

class Result extends React.Component {
    
    render() {
        return (
            <div className="displayCenter">
                <div className="SeeResultWrapper">
                    <NavLink className="SeeResult" to={{
                        pathname: '/',
                        aboutProps: {originality: this.props.originality,
                                completion_status: this.props.completion,
                                era: this.props.era,
                                type: this.props.type}
                    }}>
                        See Result
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Result;