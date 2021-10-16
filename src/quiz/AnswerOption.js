import './AnswerOption.css';
import React from 'react';

function AnswerOption(props) {
    return (
        <li className='answerOption'>
            <input
                type="radio"
                name="radioGroup"
                className='radio'
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label htmlFor={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    );
}

export default AnswerOption;