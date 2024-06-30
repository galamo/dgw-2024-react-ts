import { Link } from "react-router-dom";
import Header from "../ui/header";
import Image from "../ui/image";
import css from "./style.module.css";

export default function NabBar() {
    return <div className={css.navBarMain}>
        <div className={css.headerSection}>
            <Header text="Bring Them Home Now" />
        </div>
        <div>
            <Link to={"/hostages"}> Hostages </Link>
            <Link to={"/reports"}> Reports </Link>
            <Link to={"/"}> Home </Link>
            <Link to={"/login"}> login </Link>
            <Link to={"/donate"}> Donate </Link>
        </div>
        <div>
            <Image width={100} height={80} url="https://images.squarespace-cdn.com/content/626b1d6da8041758967df200/1651536983716-8LXF11JXMY0VM9ZTMZMF/Flag.jpg?content-type=image%2Fjpeg" />
        </div>
    </div>
}