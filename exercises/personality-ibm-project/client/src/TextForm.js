import React, { Component } from 'react'
import autosize from 'autosize'

class TextForm extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.textarea.focus()
        autosize(this.textarea)
    }

    render() {
        const style = {
            maxHeight: "200px",
            minHeight: "38px",
            width: "400px",
            resize: "none",
            padding: "9px",
            boxSizing: "border-box",
            fontSize: "inherit"
        }

        return (
            <div>
                <form id="textInput" onSubmit={this.props.handleSubmit}>
                    <textarea
                            name="content"
                            onChange={this.props.handleChange}
                            value={this.props.content}
                            placeholder="You can enter as few as 100 words, but more words will give you more accurate analysis"
                            style={style}
                            ref={c => (this.textarea = c)}
                            rows={1}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default TextForm