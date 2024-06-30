
type ImageProps = {
    url: string,
    width?: number,
    height?: number
}
export default function Image(props: ImageProps) {
    const NotAvailableImage = "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg"
    const { url = NotAvailableImage, height = 150, width = 150 } = props

    return <img src={url || NotAvailableImage} width={width} height={height} />
}