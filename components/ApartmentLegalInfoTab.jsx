import "./ApartmentLegalInfoTab.css"
import {ApartmentLegalInfoItem} from "@/components/ApartmentLegalInfoItem";


export const ApartmentLegalInfoTab = ({legalInformationList}) => {

    return (

        <div className="tabs__item detail-similar-block show" id="legal-services_">
            <div className="legal-services__title">
                <h3>Недорогая квартира у моря: варианты приобретения</h3>
            </div>

            <div id="legal-services" className="legal-services">
                <div className="legal-services__main">
                    <ul className="legal-services__list">

                        {
                            legalInformationList.map(item => {
                                return (
                                   <ApartmentLegalInfoItem data={item}/>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>


    )
}

