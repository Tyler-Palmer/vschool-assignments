import React from 'react'

const InputForm = props => {
        let {firstName, lastName, email, pob, phone, favFood, about, handleChange, handleSubmit} = props
        const isEnabled = 
            firstName.length < 3 ||
            lastName.length < 3 ||
            email.length < 3 ||
            pob.length < 3 ||
            phone.length < 3 ||
            favFood.length < 3 ||
            about.length < 3;
        return(
            <div id="inputContainer">
                <form onSubmit={handleSubmit} id="inputBox">
                    <input  type="text" 
                            name="firstName" 
                            placeholder="First Name" 
                            value={firstName}
                            onChange={handleChange}
                            className="column1"/>
                    <input  type="text" 
                            name="lastName" 
                            placeholder="Last Name" 
                            value={lastName}
                            onChange={handleChange}
                            className="column2"/>
                    <input  type="text" 
                            name="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={handleChange}
                            className="column1"/>
                    <input  type="text" 
                            name="pob" 
                            placeholder="Place of Birth" 
                            value={pob}
                            onChange={handleChange}
                            className="column2"/>
                    <input  type="number" 
                            name="phone" 
                            placeholder="Phone #" 
                            value={phone}
                            onChange={handleChange}
                            className="column1"/>
                    <input  type="text" 
                            name="favFood" 
                            placeholder="Favorite Food" 
                            value={favFood}
                            onChange={handleChange}
                            className="column2"/>
                    <input  type="text" 
                            name="about" 
                            placeholder="Tell us about yourself" 
                            value={about}
                            onChange={handleChange}
                            className="row4"
                            id="about"/>
                    <div className="button-container">
                        <button disabled={isEnabled} className="row5">Submit</button>
                    </div>
                </form>
            </div>
        )
}


export default InputForm