"use client"

import './ApartmentDetailsTabs.css'
import $ from 'jquery';
import {useEffect, useState} from "react";
import {ApartmentDescriptionTab} from "@/components/ApartmentDescriptionTab";
import {ApartmentLegalInfoTab} from "@/components/ApartmentLegalInfoTab";


export const ApartmentDetailsTabs = ({className, description, legalInformationList}) => {
    const [activeTab, setActiveTab] = useState("description");

    const handleTab1 = () => {
        setActiveTab("description");
    };
    const handleTab2 = () => {
        setActiveTab("legalInformation");
    };

    return (
        <div className={className}>

            <div className="detail__tabs tabs">
                <div className="tabs__layout">

                    <ul className="tabs__list" data-tab="">
                        <li className="tabs__list-item" onClick={handleTab1}>
                            <a data-target="detail-description" className={"tabs__list-toggle tabs__list-toggle--text "+((activeTab === 'description') ? "active" : "")}>Описание</a>
                        </li>
                        <li className="tabs__list-item" onClick={handleTab2}>
                            <a data-target="legal-services_" className={"tabs__list-toggle tabs__list-toggle--legal-services "+((activeTab === 'legalInformation') ? "active" : "")}>Юр.информация</a>
                        </li>
                    </ul>

                    <div className="tabs__blocks">


                        {activeTab === "description" &&
                            <ApartmentDescriptionTab text={description}/>}

                        {activeTab === "legalInformation" &&
                            <ApartmentLegalInfoTab legalInformationList={legalInformationList}/>
                        }


                    </div>

                </div>
            </div>

        </div>
    )
}
