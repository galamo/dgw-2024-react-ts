import { useEffect, useState } from "react"
import { getHostagesApi } from "./service"
import HostageCard from "./hostageCard"
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';


type HostageArray = Awaited<ReturnType<typeof getHostagesApi>>

export default function Hostages() {
    const [isLoading, setIsLoading] = useState(true)
    const [hostages, setHostages] = useState<HostageArray>([])
    const [filter, setFilter] = useState<string>("")

    useEffect(() => {
        async function getHostages() {
            try {
                setIsLoading(true)
                const result = await getHostagesApi(filter)
                setHostages(result)
            } catch (error) {
                alert("Something went wrong!")
            } finally {
                setIsLoading(false)
            }
        }
        getHostages()
    }, [filter])

    function handleFilter() {
        if (filter === "") {
            setFilter("idf")
        } else {
            setFilter("")
        }
    }

    const labelButton = filter === "idf" ? "All" : "IDF"
    return <div style={{ margin: "auto", width: "80%", textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }}> Hostages  <Button label={labelButton} icon="pi pi-check"
            onClick={handleFilter} /></h1>
        <SpinnerWrapper isLoading={isLoading}>
            <HostagesList hostages={hostages} />
        </SpinnerWrapper>
    </div>

}

function HostagesList(props: { hostages: HostageArray }) {
    return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {props.hostages.map(singleHostage => { return <HostageCard key={singleHostage.name + singleHostage.age} {...singleHostage} /> })}
    </div>
}

function SpinnerWrapper(props: { isLoading: boolean, children: React.ReactElement }) {
    const { isLoading, children } = props
    return isLoading ? <ProgressSpinner /> : children

}