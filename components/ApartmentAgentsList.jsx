import "./ApartmentAgentsList.css"
import {endpoint} from '@/utils/utils'

export const ApartmentAgentsList = ({agentsList}) => {

    //id,name,phone,role,photoPath

    return (
        <div className="catalog-detail-agents catalog-detail-agents--default" id="catalog-detail-agents">

            {agentsList.map(item => {
                let photoPath = endpoint + "/uploads/" + item.photoPath
                let whatsappUrl = "https://api.whatsapp.com/send?phone=" + item.phone + "&amp;text=Здравствуйте,%20Антон.%20Я%20хочу%20узнать%20подробнее%20об%20объекте%20https://www.vincent-realty.ru/offers/apartments/ekonom/nedorogaya-kvartira-u-morya/"

                return (

                    <div className="catalog-detail-agents__item">
                        <a href="/agents/1" className="catalog-detail-agents__media" rel="nofollow">
                            <img src={photoPath} alt={item.name} className="catalog-detail-agents__media"/>
                        </a>
                        <div className="catalog-detail-agents__detail">
                            <div className="catalog-detail-agents__top">
                                <a className="catalog-detail-agents__link" href="/agents/1" rel="nofollow">{item.name}</a>
                                <span className="catalog-detail-agents__work-position">{item.role}</span>
                            </div>
                            <div className="catalog-detail-agents__btm">

                                <div className="catalog-detail-agents__agent-action-buttons">
                                    <button className="catalog-detail-agents__agent-action-button catalog-detail-agents__agent-action-button--message js-catalog-detail-agents-callback-action" data-manager-id="1411">
                                        <img width="18px" height="18px" src="/email.svg"/>
                                    </button>

                                    <a className="catalog-detail-agents__agent-action-button catalog-detail-agents__agent-action-button--whatsapp" target="_blank" rel="nofollow" href={whatsappUrl}>
                                        <img src="/whatsapp.svg" width="18px" height="18px"/>
                                    </a>

                                    <a data-tippy-content={item.phone} href={"tel:" + item.phone}
                                       className="catalog-detail-agents__agent-action-button catalog-detail-agents__agent-action-button--phone">
                                        <img src="/phone.svg" width="18px" height="18px"/>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>

                )
            })}

        </div>
    )
}
