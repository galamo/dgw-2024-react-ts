import Image from "../../../ui/image";
import { Hostage } from "../service";

export default function HostageCard(props: Hostage) {
    return <div style={{ padding: "20px", border: "1px solid black" }}>
        <h2>{props.name} </h2>
        <h3 style={{ textAlign: "center" }}>{props.age}</h3>
        <Image url={props.image} />
    </div>

}