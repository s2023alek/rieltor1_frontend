export const ApartmentLegalInfoItem = ({data}) => {

    let warnings = ''
    if (data.warnings) {
        warnings = (<div className="legal-services__desc">
            {
                data.warnings.map(item => {
                    return (
                        <div>{item}<br/></div>
                    )
                })
            }
        </div>)
    }

    return (

        <li className="legal-services__item">

            <ul className="legal-services-path">
                {
                    data?.tags.map(item => {
                        return (
                            <li className="legal-services-path__item">{item}</li>
                        )
                    })
                }

            </ul>

            <h4 className="legal-services__item-title">{data.title}</h4>

            {warnings}

            <ul className="legal-services-doc">

                {
                    data?.documents.map(item => {
                        return (
                            <li className="legal-services-doc__item">
                                <div className="legal-services-doc__name">{item}</div>
                            </li>
                        )
                    })
                }

            </ul>

        </li>

    )
}

