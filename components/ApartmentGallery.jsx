"use client"

import "./ApartmentGallery.css"
import $ from 'jquery';
import {useEffect} from "react";
import {endpoint} from '@/utils/utils'

function prepareButtons() {
    //галерея
    $('.catalog-element-media__thumb').on("click", imageOnClick)
}

function imageOnClick() {
    $('.catalog-element-media__thumb').removeClass('active')
    $(this).addClass('active')
    let thisImgSrc = $(this).find('img').attr('src')
    $('#apartment-photo').attr('src', thisImgSrc)
}

function nextImageOnClick() {
    let last = $('.catalog-element-media__thumb.active')
    last.removeClass('active')
    let current = last.next()

    if (current.length<1) {
        current = $( "#catalog-element-media-thumbs-scroll .catalog-element-media__thumb:first-child" )
    }

    current.addClass('active')

    let thisImgSrc = current.find('img').attr('src')
    $('#apartment-photo').attr('src', thisImgSrc)
}

function prevImageOnClick() {
    let last = $('.catalog-element-media__thumb.active')
    last.removeClass('active')
    let current = last.prev()

    if (current.length<1) {
        current = $( "#catalog-element-media-thumbs-scroll .catalog-element-media__thumb:last-child" )
    }

    current.addClass('active')

    let thisImgSrc = current.find('img').attr('src')
    $('#apartment-photo').attr('src', thisImgSrc)
}

export const ApartmentGallery = ({imagesList}) => {
    let photosPath = endpoint+"/uploads/"

    let firstImage = photosPath + imagesList[0]

    useEffect(() => {
        $(function () {
            prepareButtons()
        });
    }, []);



    return (

        <div className="catalog-element-media">
            <div id="catalog-element-media" className="catalog-element-media__preview" data-index="1 / 4">
                <div className="catalog-element-media__preview-picture-container">
                    <picture>
                        <img id="apartment-photo" src={firstImage}/>
                    </picture>
                </div>

                <button className="catalog-element-media-controls catalog-element-media__resize">
                    Увеличить фото
                </button>

                <button className="catalog-element-media-controls catalog-element-media__slider-control prev catalog-element-media-prev" onClick={()=>{prevImageOnClick()}}>
                    &larr;
                </button>

                <button className="catalog-element-media-controls catalog-element-media__slider-control next catalog-element-media-next" onClick={()=>{nextImageOnClick()}}>
                    &rarr;
                </button>
            </div>

            <div className="catalog-element-media__thumbs">
                <div className="catalog-element-media__thumbs-layout" id="catalog-element-media-thumbs-container">
                    <div className="catalog-element-media__thumbs-scroll" id="catalog-element-media-thumbs-scroll">

                        {imagesList.map(item => {
                            let imageId = imagesList.indexOf(item)

                            return (
                                <div className="catalog-element-media__thumb" key={imageId} onClick={()=>{imageOnClick(imageId, this)}}>
                                    <picture className="catalog-element-media__thumb-picture">
                                        <img src={photosPath + item} className="catalog-element-media__thumb-image"/>
                                    </picture>
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className="catalog-element-media__plan" data-count="1">
                    <img src="/local/img/flat-plan.png"/>
                </div>

            </div>
        </div>


    )
}

