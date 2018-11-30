import React from 'react'
import { withUglyThings } from "./UglyThingsProvider"

const UglyForm = (props) => {
    const { uglyTitle, uglyDescription, uglyimgUrl, handleChange, handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="title"
                    value={uglyTitle}
                    onChange={handleChange}
                    placeholder="Title"
                ></input>
                <input type="text"
                    name="description"
                    value={uglyDescription}
                    onChange={handleChange}
                    placeholder="Description"
                ></input>
                <input type="text"
                    name="imgURL"
                    value={uglyimgUrl}
                    onChange={handleChange}
                    placeholder="Image URL"
                ></input>
                <button>Submit</button>
            </form>
        </div>
    )

}


export default withUglyThings(UglyForm)