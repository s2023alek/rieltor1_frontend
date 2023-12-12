"use client"

import "./ApartmentGallery.css"
import {useState} from "react";
import {endpoint} from '@/utils/utils'


export const ApartmentGallery = ({imagesList}) => {
    const [currentPhotoSN, setCurrentPhotoSN] = useState(0);
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

    const selectImage = (sn) => {
        setCurrentPhotoSN(sn)
    }

    let photosPath = endpoint + "/uploads/"

    let currentImage = photosPath + imagesList[currentPhotoSN]

    return (

        <div className="catalog-element-media">
            <div id="catalog-element-media" className="catalog-element-media__preview" data-index="1 / 4">
                <div className="catalog-element-media__preview-picture-container">
                    <picture>
                        <img id="apartment-photo" src={currentImage}/>
                    </picture>
                </div>

                <button className="catalog-element-media-controls catalog-element-media__resize">
                    Увеличить фото
                </button>

                <button className="catalog-element-media-controls catalog-element-media__slider-control prev catalog-element-media-prev" onClick={prevImage}>
                    &larr;
                </button>

                <button className="catalog-element-media-controls catalog-element-media__slider-control next catalog-element-media-next" onClick={nextImage}>
                    &rarr;
                </button>
            </div>

            <div className="catalog-element-media__thumbs">
                <div className="catalog-element-media__thumbs-layout" id="catalog-element-media-thumbs-container">
                    <div className="catalog-element-media__thumbs-scroll" id="catalog-element-media-thumbs-scroll">

                        {imagesList.map(item => {
                            let imageId = imagesList.indexOf(item)

                            return (
                                <div className={"catalog-element-media__thumb " + ((currentPhotoSN === imageId) ? "active" : "")} sn={imageId} onClick={() => {
                                    selectImage(imageId)
                                }}>
                                    <picture className="catalog-element-media__thumb-picture">
                                        <img src={photosPath + item} className="catalog-element-media__thumb-image"/>
                                    </picture>
                                </div>
                            )
                        })}

                    </div>
                </div>


                <div className="catalog-element-media__plan" data-count="0">
                    <img src="/flat-plan.png"/>
                </div>


            </div>
        </div>


    )
}

