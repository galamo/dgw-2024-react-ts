import { useEffect, useState } from "react"
import { getHostagesApi } from "./service"
import HostageCard from "./hostageCard"

type HostageArray = Awaited<ReturnType<typeof getHostagesApi>>

export default function Hostages() {
    const [hostages, setHostages] = useState<HostageArray>([])
    useEffect(() => {

        async function getHostages() {
            try {
                const result = await getHostagesApi()
                setHostages(result)
            } catch (error) {
                alert("Something went wrong!")
            }
        }
        getHostages()

    }, [])

    return <div>
        <h1> Hostages </h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {hostages.map(singleHostage => { return <HostageCard {...singleHostage} /> })}
        </div>
    </div>

}