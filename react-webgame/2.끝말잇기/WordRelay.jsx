const React = require('react');
const {Component} = React;

const WordRelay = () =>{
    const [text,setText] = React.useState('Hello, webpack')

    return (
        <React.Fragment>
            <div>
                {text}
            </div>
        </React.Fragment>
    )
}

module.exports = WordRelay;