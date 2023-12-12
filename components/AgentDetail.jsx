import "./AgentDetail.css"

import {endpoint} from "@/utils/utils";

export const AgentDetail = ({phone, name, role, photoPath, sellingTypesList, classNameOfPropertyList}) => {

    let whatsappUrl = "https://api.whatsapp.com/send?phone=" + phone + "&amp;text=Здравствуйте"

    photoPath = endpoint + "/uploads/" + photoPath

    return (
        <div className="cr">
            <div className="user-detail__header" data-scroll-check="0">
                <div className="user-detail__card user-detail-card">
                    <div className="user-detail-card__layout cf">
                        <div className="user-detail-card__photo-wrap">
                            <img className="user-detail-card__photo" src={photoPath} alt=""/>
                        </div>
                        <div className="user-detail-card__detail">
                            <div className="user-detail-card__name fwb">
                                <h1>{name}</h1>
                            </div>
                            <div className="user-detail-card__work-position">{role}</div>
                            <div className="user-detail-card__buttons">
                                <a href={"tel:" + phone} className=" orange" data-alt="Позвонить">
                                    <button className="user-detail-card__button">
                                        <span className="title">{phone}</span>
                                    </button>
                                </a>
                                <button className="user-detail-card__button">
                                    <span className="title">Написать</span>
                                </button>
                                <a className="user-detail-card__whatsapp" target="_blank" rel="nofollow" href={whatsappUrl}>
                                    <img src="/whatsapp.svg" width="18px" height="18px"/>
                                </a>
                            </div>

                        </div>
                        <div className="user-detail-card__stat">
                            <div className="fix-block">
                                <div className="txt-lg user-detail-card__spec-title">Специализация</div>
                                <ul className="user-detail-card__spec">
                                    {classNameOfPropertyList.map(item => {
                                        return (
                                            <li className="main-spec">{item.title}</li>
                                        )
                                    })}
                                </ul>
                                <ul className="user-detail-card__group">
                                    <li>
                                        <div className="">Продажа</div>
                                        {sellingTypesList.map(item => {
                                            return (
                                                <div>{item.title}</div>
                                            )
                                        })}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
