"use client"

import './ApartmentDetailsTabs.css'
import $ from 'jquery';
import {useEffect} from "react";

function prepareButtons() {
    //табы
    $('.tabs__list-item').on("click", tabsOnClick)
}


function tabsOnClick() {
    $('.tabs__item').removeClass('show')
    $('.tabs__list-toggle').removeClass('active')
    $(this).find('a').addClass('active')

    switch ($(this).find('a').attr('data-target')) {
        case 'detail-description':
            $('#detail-description').addClass('show')
            break

        case 'legal-services_':
            $('#legal-services_').addClass('show')
            break
    }
}


export const ApartmentDetailsTabs = ({
                                         as: Element = 'div',
                                         children,
                                         className,
                                         ...rest
                                     }) => {

    useEffect(() => {
        $(function () {
            prepareButtons()
        });
    }, []);

    return (
        <Element {...rest} className={`${className}`}>

            <div className="detail__tabs tabs">
                <div className="tabs__layout">

                    <ul className="tabs__list" data-tab="">
                        <li className="tabs__list-item">
                            <a data-target="detail-description" className="tabs__list-toggle tabs__list-toggle--text active">Описание</a>
                        </li>
                        <li className="tabs__list-item">
                            <a data-target="detail-similar" className="tabs__list-toggle tabs__list-toggle--similar">Похожие</a>
                        </li>
                        <li className="tabs__list-item">
                            <a data-target="legal-services_" className="tabs__list-toggle tabs__list-toggle--legal-services">Юр.информация</a>
                        </li>
                        <li className="tabs__list-item">
                            <a data-target="detail-map" className="tabs__list-toggle tabs__list-toggle--map">Карта</a>
                        </li>
                    </ul>

                    <div className="tabs__blocks">

                        {children}

                    </div>

                </div>
            </div>

        </Element>
    )
}
