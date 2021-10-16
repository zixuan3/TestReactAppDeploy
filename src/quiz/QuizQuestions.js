import React from 'react';
import Question from './Question.js';
import QuestionCount from './QuestionCount.js';
import AnswerOption from './AnswerOption.js';
import './QuizQuestions.css';

function QuizQuestions(props) {
    function renderAnswerOptions(key) {
        return(
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }
    
    return (
        <div key={props.questionId}>
                <QuestionCount
                    counter={props.questionId}
                    total={props.questionTotal}
                />
                <Question content={props.question} />
                <ul>
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
                <div className='flex-row'>
                    <div className='anniu' id='back' onClick={props.onBack}>
                        BACK
                    </div>
                    <div className='anniu' id='skip' onClick={props.onSkip}>
                        SKIP
                    </div>
                    <div className='anniu' id='quit' onClick={props.onQuit}>
                        QUIT
                    </div>
                </div>
            </div>
    );
}

export default QuizQuestions;