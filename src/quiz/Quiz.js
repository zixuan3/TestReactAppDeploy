import './Quiz.css';
import React from 'react';
import Result from './Result.js';   
import QuestionsData from './QuestionsData.js';
import QuizQuestions from './QuizQuestions.js';


function Quiz() {
  return (
    <div className="Quiz">
        <QuizWrapper />
    </div>
  );
}


function get_originality(num) {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(false);
    }
    arr[num] = true;
    return arr;
}


function get_completion(num) {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(false);
    }
    arr[num] = true;
    return arr;
}


function get_era(num) {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(false);
    }
    arr[num] = true;
    return arr;
}


function get_type(num) {
    let arr = [];
    for (let i = 0; i < 16; i++) {
        arr.push(false);
    }
    arr[num] = true;
    return arr;
}


class QuizWrapper extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answerCount: [],
            result: '',
        };
        
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.handleSkip = this.handleSkip.bind(this);
        this.handleQuit = this.handleQuit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }
    
    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (false) {
        //while (0 !== currentIndex) {
            
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex = -1;
            
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }
    
    componentDidMount() {
        const shuffledAnswerOptions = QuestionsData.map((question) => this.shuffleArray(question.answers));
        
        this.setState({
            question: QuestionsData[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }
    
    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        this.setState({
            counter: counter,
            questionId: questionId,
            question: QuestionsData[counter].question,
            answerOptions: QuestionsData[counter].answers,
            answer: ''
        });
    }
    
    setUserAnswer(answer) {
        console.log(answer);
        this.setState((state) => ({
            answerCount: [
                ...state.answerCount,
                answer
            ],
            answer: answer
        }));
    }
    
    getResults() {
        return this.state.answerCount;
    }
    
    setResults(result) {
        this.setState({result: result});
    }
    
    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < QuestionsData.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }
    
    handleSkip() {
        this.setUserAnswer('0');
        if (this.state.questionId < QuestionsData.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }
    
    handleQuit() {
        for (let i = this.state.questionId; i <= QuestionsData.length; i++) {
            this.setUserAnswer('0');
        }
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
    
    handleBack() {
        if (this.state.counter !== 0) {
            const counter = this.state.counter - 1;
            const questionId = this.state.questionId - 1;
            let answerCount = this.state.answerCount;
            answerCount.pop();
            this.setState({
                counter: counter,
                questionId: questionId,
                question: QuestionsData[counter].question,
                answerOptions: QuestionsData[counter].answers,
                answer: '',
                answerCount: answerCount
            });
        }
    }
    
    renderQuiz() {
        return (
            <QuizQuestions
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={QuestionsData.length}
                onAnswerSelected={this.handleAnswerSelected}
                onSkip={this.handleSkip}
                onQuit={this.handleQuit}
                onBack={this.handleBack}
            />
        );
    }
    
    renderResult() {
        const ORIGINALITY = get_originality(this.state.result[0]);
        const COMPLETION = get_completion(this.state.result[1]);
        const ERA = get_era(this.state.result[2]);
        const TYPE = get_type(this.state.result[3]);
        //console.log(ORIGINALITY);
        //console.log(COMPLETION);
        //console.log(ERA);
        //console.log(TYPE);
        return (
            <Result result={this.state.result}
                    originality={ORIGINALITY}
                    completion={COMPLETION}
                    era={ERA}
                    type={TYPE}/>
        );
    }
    
    render() {
        return (
            <div className="QuizQuestionsWrapper">
                <div className="container">
                    {this.state.result ? this.renderResult() : this.renderQuiz()}
                </div>
            </div>
        )
    }
}

export default Quiz;