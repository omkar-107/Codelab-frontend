import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-terminal'
import 'ace-builds/src-noconflict/theme-kuroir'
import 'ace-builds/src-noconflict/theme-github_dark'
import 'ace-builds/src-noconflict/theme-monokai'
import './CodeStyles.css'
import Copy from './Copy';
import axios from 'axios';



export default class Code extends React.Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            theme: 'terminal',
            code: '// your code goes here',
            mode: 'c_cpp',
            result:'Compile and Execute the code to see output'
        }

        this.onChange = this.onChange.bind(this);
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
        this.setState({
            mode: event.target.value
        })
    }

    getMode() {
        return this.state.mode;
    }

    async send() {
        try {
            const tobesent = JSON.stringify({ code: this.state.code, mode: this.state.mode });
            const options = {
                headers: { "content-type": "application/json" }
            }

            // const response = await fetch('http://localhost:5000/api/endpoint1', {
            //     method: 'POST',
            //     body: JSON.stringify(jsonData),
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // }).then(resp => resp.json()).then(data => console.log(data)).catch(err => console.log(err));


            await axios.post('http://localhost:5000/api/endpoint1', tobesent, options).then((res) => {
                console.log(res); this.setState({ result: res.data });
            }).catch((err) => console.log(err));



            // const wasmBytes = await response.arrayBuffer();
            // const wasmModule = new WebAssembly.Module(wasmBytes);
            // const wasmInstance = new WebAssembly.Instance(wasmModule);
            // const result = wasmInstance.exports.function_name();
            // this.setState({ result });

        } catch (error) {
            console.error('Error:', error);
        }
    }


    render() {
        return (
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

                        <select name="mode" id="mode" onChange={this.modeChangeHandler}>
                            <option value="c_cpp">C/C++</option>
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
                <div className='h-40 w-full mt-9 border-blue-950' >
                    <h1 className=' text-lg'>Output: {this.state.result.message}</h1>
                    <h1 className=' text-lg'>Language: {this.state.result.language}</h1>
                </div>
            </div>
        );
    }
}