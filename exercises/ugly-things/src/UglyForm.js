import React from 'react'

const UglyForm = (props) => {
    const { uglyTitle, uglyDescription, uglyImgUrl, handleChange, handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="uglyTitle"
                    value={uglyTitle}
                    onChange={handleChange}
                    placeholder="Title"
                ></input>
                <input type="text"
                    name="uglyDescription"
                    value={uglyDescription}
                    onChange={handleChange}
                    placeholder="Description"
                ></input>
                <input type="text"
                    name="uglyImgURL"
                    value={uglyImgUrl}
                    onChange={handleChange}
                    placeholder="Image URL"
                ></input>
                <button>Submit</button>
            </form>
        </div>
    )

}


export default UglyForm