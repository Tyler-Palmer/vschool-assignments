import React from 'react'
import { withPhotos } from '../../context/PhotoProvider' 
import Photo from './Photo'
import './style.css'

const PhotoList = props => {
    const { handleChange, handleSubmit, title, imgUrl } = props
    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={title} 
                        name="title" 
                        onChange={handleChange} 
                        placeholder="Title"/>
                    <input 
                        type="text" 
                        value={imgUrl} 
                        name="imgUrl" 
                        onChange={handleChange} 
                        placeholder="ImgUrl"/>
                    <button>Submit</button>
                </form>
            </div>
            <div className="photo-grid">
                { props.photos.map(photo => <Photo {...photo} key={photo._id}/>) }
            </div>
        </div>
    )
}

export default withPhotos(PhotoList)