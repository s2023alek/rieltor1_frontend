import "./ApartmentProperties.css"

export const ApartmentProperties = ({
                                        num_of_rooms,
                                        area,
                                        price,
                                        price_sqm,
                                        level,
                                        levels,
                                        status,
                                        microdistrict,
                                        street,
                                        sea_distance,
                                        viewFromWindow,
                                        renovationType,
                                        bathroomType,
                                        is_studio
                                    }) => {

    if (is_studio) {
        num_of_rooms = "Студия"
    }

    return (


        <div className="description-props__wrapper desc">
            <div className="description-props">
                <div className="description-props__column">
                    <dl className="description-props__item">
                        <dt className="description-prop__name">Кол-во комнат</dt>
                        <dd className="description-prop__value">{num_of_rooms}</dd>
                    </dl>
                    <dl className="description-props__item">
                        <dt className="description-prop__name">Общая площадь</dt>
                        <dd className="description-prop__value">{area}&nbsp;м²</dd>
                    </dl>
                    <dl className="description-props__item">
                        <dt className="description-prop__name">Цена</dt>
                        <dd className="description-prop__value">{price}₽</dd>
                    </dl>
                    <dl className="description-props__item">
                        <dt className="description-prop__name">Цена за м²</dt>
                        <dd className="description-prop__value">{price_sqm}₽</dd>
                    </dl>
                    <dl className="description-props__item">
                        <dt className="description-prop__name">Этаж</dt>
                        <dd className="description-prop__value">{level}&nbsp;
                            <span className="fwn">из&nbsp;{levels}</span></dd>
                    </dl>
                    <dl className="description-props__item">
                        <dt className="description-prop__name">Статус</dt>
                        <dd className="description-prop__value">{status}</dd>
                    </dl>
                </div>

                <div className="description-props__column">
                    <dl className="description-props__item">
                        <dt className="description-prop__name">Микрорайон</dt>
                        <dd className="description-prop__value">
                            <a href="???" title={microdistrict}>{microdistrict}</a></dd>
                    </dl>
                    <dl className="description-props__item">
                        <dt className="description-prop__name">Улица</dt>
                        <dd className="description-prop__value">{street}</dd>
                    </dl>
                    <dl className="description-props__item">
                        <dt className="description-prop__name">До моря</dt>
                        <dd className="description-prop__value">{sea_distance}&nbsp;м</dd>
                    </dl>
                    <dl className="description-props__item">
                        <dt className="description-prop__name">Вид из окон</dt>
                        <dd className="description-prop__value">{viewFromWindow}</dd>
                    </dl>
                    <dl className="description-props__item">
                        <dt className="description-prop__name">Ремонт</dt>
                        <dd className="description-prop__value">{renovationType}</dd>
                    </dl>
                    <dl className="description-props__item">
                        <dt className="description-prop__name">Санузел</dt>
                        <dd className="description-prop__value">{bathroomType}</dd>
                    </dl>
                </div>
            </div>
        </div>

    )
}
