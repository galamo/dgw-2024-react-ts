import { useState, useRef } from "react"


export default function Search() {

    const [data, setData] = useState<string>("")

    const isDatavalid = data.length < 3 && data.length > 0

    return <div style={{ width: "300px", display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
        <h3> Search </h3>
        <input value={data} type="text" onChange={(e) => {
            setData(e.target.value)
        }} />
        {isDatavalid && <span style={{ color: "red" }}> Search is not valid </span>}
        <div>
            Here is the search reuslt: {data}
        </div>
    </div>
}

export function LoginRef() {
    console.log("is this running ueRef??")
    const userNameRef = useRef<any>()
    const passwordRef = useRef<any>()

    return <div style={{ width: "300px", display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
        <h3> Login Ref </h3>
        User name <input ref={userNameRef} onChange={(e) => {
            console.log(e.target.value)
        }} type="text" />
        Password <input ref={passwordRef} type="text" />
        <button style={{ background: userNameRef?.current?.value || "yellow" }} onClick={() => {
            alert(userNameRef.current.value + " " + passwordRef.current.value)
        }} > Click here ! </button>
    </div>
}