import "./ApartmentAddress.css"

export const ApartmentAddress = ({region, street, updated}) => {
    return (
        <div className="catalog-detail-location">
            <div className="catalog-detail-location__part">
                <img src="/location.svg"/>
                    <div className="catalog-detail-location__item catalog-detail-location__item-first">{region}</div>
                    <div className="catalog-detail-location__item">{street}</div>
                    <div className="catalog-detail-location__item catalog-detail-location__show-on-map">
                        <a className="catalog-detail-location__link" href="#detail-map">на карте</a>
                    </div>
            </div>

            <div className="catalog-detail-location__part catalog-detail-location__aside-part">
                <span className="catalog-detail-location__update">Обновлено: {updated}</span>
            </div>
        </div>
    )
}
