import React from 'react'

const UglyForm = () => {
    const { title, description, imgURL, handleChange, handleSubmit } = props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Title"
                ></input>
                <input type="text"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    placeholder="Description"
                ></input>
                <input type="text"
                    name="imgURL"
                    value={imgURL}
                    onChange={handleChange}
                    placeholder="Image URL"
                ></input>
                <button onClick={this.handleChange}>Submit</button>
            </form>
        </div>
    )

}


export default UglyForm