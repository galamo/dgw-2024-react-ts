
export enum Colors {
    Red = "red",
    Blue = "blue",
    Green = "green",
    Yellow = "yellow"
}

type HeaderProps = {
    text: string
    color?: Colors
}

function Header(props: HeaderProps) {
    const { color = Colors.Yellow } = props
    if (!props.text) return;
    return <h1 style={{ color }} >{props.text}</h1>
}

function helper() { console.log("test") }
export { helper };
export default Header;