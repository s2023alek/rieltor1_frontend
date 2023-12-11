import {
    ApartmentTitleBar,
    ApartmentAddress,
    ApartmentGallery,
    ApartmentPrice,
    ApartmentAgentsList,
    ApartmentProperties,
    ApartmentDetailsTabs,
    ApartmentDescriptionTab,
    ApartmentLegalInfoTab
} from '@/components'

import './styles.css'


export const metadata = {
    title: 'Агенство недвижимости Сочи',
    description: "Агенство недвижимости Сочи"
}


export default async function Page(params) {
    const res = await fetch('http://localhost:8080/apartment/1', {cache: "no-store"})
    //{id, title, num_of_rooms, area, price, price_sqm, level, levels, street, sea_distance, is_studio, latitude, longitude, description, mod_date, active, status, status2, microdistrict, viewFromWindow, renovationType, bathroomType, apartmentClass, photosList, legalInformationList:[{title,tags:[string],documents:[string],warnings:[string]}], agentsList:[{id,name,phone,role,photoPath}] }

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    return (
        <div className="main">
            <div className="detail">

                <ApartmentTitleBar id={data.id} title={data.title}/>

                <div className="cr">
                    <ApartmentAddress region={data.microdistrict} street={data.street} updated={data.mod_date}/>
                    <ApartmentGallery imagesList={data.photosList}/>
                    <div className="c3 catalog-detail-aside">

                        <ApartmentPrice price={data.price} pricesqm={data.price_sqm} priceMortgage={'???'}/>

                        <ApartmentAgentsList agentsList={data.agentsList}/>

                    </div>

                    <ApartmentProperties street={data.street} is_studio={data.is_studio} viewFromWindow={data.viewFromWindow} level={data.level} area={data.area} levels={data.levels} price={data.price} price_sqm={data.price_sqm} bathroomType={data.bathroomType} microdistrict={data.microdistrict} num_of_rooms={data.num_of_rooms} renovationType={data.renovationType} sea_distance={data.sea_distance} status={data.status}/>

                    <ApartmentDetailsTabs className={'detail__tabs'}>

                        <ApartmentDescriptionTab text={data.description}/>

                        <ApartmentLegalInfoTab legalInformationList={data.legalInformationList}/>

                    </ApartmentDetailsTabs>


                </div>
            </div>
        </div>
    )
}