import Header from "../ui/header";
import Image from "../ui/image";
import css from "./style.module.css";

export default function NabBar() {
    return <div className={css.navBarMain}>
        <div style={{ alignSelf: "center" }}>
            <Header text="Bring Them Home Now" />
        </div>
        <Image width={300} url="https://images.squarespace-cdn.com/content/626b1d6da8041758967df200/1651536983716-8LXF11JXMY0VM9ZTMZMF/Flag.jpg?content-type=image%2Fjpeg" />
    </div>
}