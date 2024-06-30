import axios from "axios"

export type Hostage = {
    age: string,
    name: string,
    image: string,
    isIDF: boolean
}

const API_URL = "http://129.159.129.38:8080"
export async function getHostagesApi(filter: string): Promise<Array<Hostage>> {
    const result = await axios.get(`${API_URL}/hostages/${filter}`)
    result.data[0].image = "EMPTY IMAGE" // this is for demonstarting the NotAvailable image 
    return result.data
}