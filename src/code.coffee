import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-terminal'
import 'ace-builds/src-noconflict/theme-kuroir'
import 'ace-builds/src-noconflict/theme-github_dark'
import 'ace-builds/src-noconflict/theme-monokai'
import DragDrop from './DragAndDrop';
import './CodeStyles.css'
import Copy from './Copy';





export default class Code extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            theme: 'terminal',
            code: '// your code goes here',
            mode: 'c_cpp',
            result: { message: 'Compile and Execute the code to see output', language: ``,res:`` },
            language: 'c'
        }

        this.onChange = this.onChange.bind(this);
    }

    getChildCode = (childcode, extension) => {
        if (extension === "c" || extension === "cpp") {
            this.setState({
                mode: 'c_cpp',
                language: extension
            })
        }
        else if (extension === "py") {
            this.setState({
                mode: 'python',
                language: 'python'
            })
        }
        else if (extension === 'java') {
            this.setState({ mode: 'java', language: extension })
        }

        this.setState({
            code: childcode
        })
    }

    onChange(newValue) {
        this.setState({
            code: newValue
        })
        console.log(newValue);
    }

    gettheme() {
        return this.state.theme;
    }

    themeChangeHandler = (event) => {
        this.setState({
            theme: event.target.value
        })
    }

    getCode() {
        return this.state.code;
    }

    modeChangeHandler = (event) => {
        //setting the language 
        this.setState({
            language: event.target.value
        })

        //setting the intellisence mode
        if (event.target.value === 'c' || event.target.value === 'cpp') {
            this.setState({
                mode: 'c_cpp'
            })
        }
        else {
            this.setState({
                mode: event.target.value
            })
        }
    }

    getMode() {
        return this.state.mode;
    }
  
    async send() {
        try {
            
            const jsonData = {
                language: this.state.language,
                content: this.state.code,
                stdin: ""
            }
           
            const response = await fetch('http://localhost:55000/api/v1/code/compile', {
                method: 'POST',
                body: JSON.stringify(jsonData),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            this.result.res = data.result.stdout;
            
            console.log("hello");
          
      

        
            
        } catch (error) {
            console.error('Error:', error);
        }
    }
   
    
    
    render() {
        return (
            <div>
                <div className='pt-5'>
                    <div className='flex justify-evenly text-blue-800 text-lg'>
                        <div className='theme-select outline outline-offset-2 outline-pink-400 rounded-md p-1'>
                            <label for="theme" className='pr-3'>Theme</label>

                            <select name="theme" id="theme" onChange={this.themeChangeHandler}>
                                <option value="terminal">Terminal</option>
                                <option value="kuroir">Kuroir</option>
                                <option value="github_dark">Github Dark</option>
                                <option value="monokai">Monokai</option>
                            </select>
                        </div>
                        <div className='mode-select outline outline-offset-2 outline-pink-400 rounded-md p-1'>
                            <label for="mode" className='pr-5'>Language</label>

                            <select name="mode" id="mode" value={this.state.language} onChange={this.modeChangeHandler}>
                                <option value="c">C</option>
                                <option value="cpp">C++</option>
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                            </select>
                        </div>

                    </div>
                    <div className='ace-editor relative'>
                        <AceEditor
                            placeholder=""
                            mode={this.getMode()}
                            theme={this.gettheme()}
                            width='100%'
                            height='600px'
                            name="blah2"
                            onLoad={this.onLoad}
                            onChange={this.onChange}
                            fontSize={20}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={this.getCode()}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: false,
                                enableSnippets: true,
                                showLineNumbers: true,
                                tabSize: 2,
                            }} />

                        <Copy code={this.state.code} />

                    </div>
                    <div className='flex justify-center mt-2 mb-2'>
                        <div className=' flex justify-evenly w-[50%]'>
                            <button className=' border-2 border-blue-500 rounded-2xl p-2  hover:text-white hover:bg-blue-500 transition-all ease-in-out' onClick={(e) => { console.log("send called"); this.send(); }}>Compile and Execute</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='h-52 w-[90%] bg-slate-900 mt-9 border-blue-950 text-white'>
                            <div>{this.state.result.message.split('\n').map(line => <h3 className=' text-md'>{line}</h3>)}</div>
                            {/* <h3 className=' text-md'>Output: {this.state.result.message}</h3> */}
                            <h1 className=' text-lg'>Language: {this.state.result.res}</h1>
                        </div>
                    </div>
                    <div>
                        hello
                    </div>
                </div>
                <div>
                    <DragDrop parentCallBack={this.getChildCode} />
                </div>
            </div>
        );
    }

}