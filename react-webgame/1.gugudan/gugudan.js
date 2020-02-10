class GuGuDan extends React.Component{

    state = {
        first : Math.ceil(Math.random() * 9),
        second : Math.ceil(Math.random() * 9),
        value : '',//입력창
        result : '',//결과값
        count : 0,//정답횟수
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        let resultTmp = this.state.first * this.state.second;
        if(parseInt(this.state.value) === resultTmp){
            this.setState((prevState) => {
                return {
                    result : "정답 : " + prevState.value,
                    first : Math.ceil(Math.random() * 9),
                    second : Math.ceil(Math.random() * 9),
                    value : ''
                };
            });

            this.setState((prevState) => {
                return{
                    count: prevState.count + 1,
                }
            });

           this.input.focus();
        }else{
            this.setState({
                result : "땡!",
                value : ''
            });
            this.input.focus();
        }
    }

    onChange = (e) =>{
        this.setState({value : e.target.value})
    }

    inputFocus = (c) => {this.input = c;}

    input;

    render(){
        console.log("render!");
        return(
            <React.Fragment>
                <div>{this.state.first} 곱하기 {this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input ref={this.inputFocus} type="number" value={this.state.value} 
                        onChange = {this.onChange}/>
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
                <div>정답 횟수 : {this.state.count}</div>
            </React.Fragment>
       );
        
    }

}

ReactDOM.render(<GuGuDan/>,document.querySelector('#root'));