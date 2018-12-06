import React, { Component } from 'react'
import autosize from 'autosize'
import { withResults } from './context/ResultsProvider'
import './textform.css'

class TextForm extends Component {

    componentDidMount() {
        this.textarea.focus()
        autosize(this.textarea)
    }

    render() {
        console.log(this.props)
        const style = {
            maxHeight: "200px",
            minHeight: "100px",
            minWidth: "300px",
            width: "70%",
            height: "100px",
            resize: "none",
            padding: "9px",
            boxSizing: "border-box",
            fontSize: "inherit",
            marginLeft: "10px"
        }

        return (
            <div>
                <div id="examples">

                </div>
                <form id="textInput" onSubmit={this.props.handleSubmit}>
                    <textarea
                        type="text"
                            name="content"
                            onChange={this.props.handleChange}
                            value={this.props.content}
                            placeholder="You can enter as few as 100 words, but more words will give you more accurate analysis"
                            style={style}
                            ref={c => (this.textarea = c)}
                            rows={1}
                    />
                    <button id="analyzebutton" className="btn btn-primary">Analyze</button>
                </form>
            </div>
        )
    }
}

export default withResults(TextForm)