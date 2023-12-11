import "./ApartmentDescriptionTab.css"

export const ApartmentDescriptionTab = ({text}) => {

    return (
        <div id="detail-description" className="tabs__item show">
            <div className="detail-description-block">
                {text}
            </div>
        </div>
    )
}
