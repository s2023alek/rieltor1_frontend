import {
    AgentDetail

} from '@/components'

import './styles.css'


export const metadata = {
    title: 'Агенство недвижимости Сочи',
    description: "Агенство недвижимости Сочи"
}


export default async function Page() {
    const res = await fetch('http://localhost:8080/agents/1', {cache: "no-store"})
    //{"id":"1","photoPath":"1701598276_5e5bbf2784c97e500920.jpg","role":"","classOfPropertyList":[{"title":""}],"sellingTypesList":[{"title":""}],"name":"","phone":"+7111111111"}

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()

    return (
        <div className="main">

            <AgentDetail name={data.name} role={data.role} phone={data.phone} photoPath={data.photoPath} classNameOfPropertyList={data.classOfPropertyList} sellingTypesList={data.sellingTypesList}/>

        </div>
    )
}