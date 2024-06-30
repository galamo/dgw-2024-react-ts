import { useState } from "react";
import Image from "../../../ui/image";
import { Hostage } from "../service";
import { Button } from 'primereact/button';


export default function HostageCard(props: Hostage) {
    const [counter, setCounter] = useState(0)
    function iKnowHimCounter() {
        setCounter(counter + 1)
    }
    return <div style={{ padding: "20px", border: "1px solid black" }}>
        <h2>{props.name} </h2>
        <h3 style={{ textAlign: "center" }}>{props.age}</h3>
        <Image url={props.image} />
        <h3> known by {counter} users</h3>
        <Button label={"I know him"} icon="pi pi-check" onClick={iKnowHimCounter} />

    </div >

}