import "./ApartmentPrice.css"

export const ApartmentPrice = ({price, pricesqm, priceMortgage}) => {

    return (
        <div className="catalog-detail-props">
            <div className="catalog-detail-props__top">
                <div className="catalog-detail-props__top-header">
                    <div className="catalog-detail-props__actions">
                        <div className="catalog-detail-props__action-favorite" data-tippy-content="Добавить в избранное">
                            <img src="/fav.png"/>
                        </div>
                    </div>
                </div>

                <div className="catalog-detail-props__top-block">

                    <div className="catalog-detail-props__top-price">
                        <div className="catalog-detail-props__top-price-title">Цена</div>
                        <span className="value" id="currency-target-value">{price}</span>
                        <span className="unit"><span className="unit-change">₽</span></span>
                    </div>
                    <div className="catalog-detail-props__top-price-alt">
                        <span className="value" id="currency-target-value-alt">{pricesqm}</span>
                        <span className="unit" id="currency-target-value-alt-unit">₽ за м²</span>
                    </div>
                    <div className="catalog-detail-props__top-mortgage">В ипотеку от <a href="javascript:nothing()">{priceMortgage}₽</a> в месяц
                    </div>
                </div>

                <div className="catalog-detail-props__top-block catalog-detail-props__top-block-callback">
                    <button className="catalog-detail-props__callback" id="catalog-detail-props-callback-order">Заказать показ</button>
                    <button className="catalog-detail-props__online-callback" id="catalog-detail-props-callback-online"> ONLINE консультация</button>

                </div>
            </div>
        </div>
    )
}
