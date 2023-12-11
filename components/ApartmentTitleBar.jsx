import "./ApartmentTitleBar.css"

export const ApartmentTitleBar = ({id, title}) => {
    return (
        <div className="cr">
            <div className="detail__header">
                <div className="detail__id" data-id={id}></div>
                <h1 className="detail__title">{title}</h1>
            </div>
        </div>
    )
}
