"use client"

import "./ApartmentGalleryPopup.css"
import {useState} from "react";


export const ApartmentGalleryPopup = ({imagePathPrefix, imagesList, currentImageIndex=-1, hideLightBoxButton}) => {
    if (currentImageIndex === -1) {
        return ""
    }

    const [currentPhotoSN, setCurrentPhotoSN] = useState(currentImageIndex);
    const totalImages = imagesList.length
    const nextImage = () => {
        setCurrentPhotoSN(
            ((currentPhotoSN + 1) >= totalImages) ? 0 : currentPhotoSN + 1
        )
    }
    const prevImage = () => {
        setCurrentPhotoSN(
            ((currentPhotoSN - 1) < 0) ? totalImages - 1 : currentPhotoSN - 1
        )
    }


    let currentImage = imagePathPrefix + imagesList[currentPhotoSN]

    return (

        <div id="lightbox">
            <button onClick={prevImage}>Предыдущее</button>
            <img id="lightbox-img" src={currentImage} onClick={hideLightBoxButton}/>
            <button onClick={nextImage}>Следующее</button>
        </div>

    )
}

