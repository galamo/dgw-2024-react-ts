import { useEffect, useState } from "react"

type ImageProps = {
    url: string,
    width?: number,
    height?: number
}
export default function CustomImage(props: ImageProps) {
    const NotAvailableImage = "https://t3.ftcdn.net/jpg/01/38/48/40/360_F_138484065_1enzXuW8NlkppNxSv4hVUrYoeF8qgoeY.jpg"
    const { url = NotAvailableImage, height = 150, width = 150 } = props
    console.log(url)
    const [currentImage] = useImageLoaded(url)
    return <img src={currentImage} width={width} height={height} />
}

function useImageLoaded(initImage: string) {
    const [currentImage, setCurrentImage] = useState(initImage)

    useEffect(() => {
        function testImageLoaded() {
            const imageDom = new Image();
            imageDom.src = initImage
            imageDom.onerror = () => {
                setCurrentImage("https://t3.ftcdn.net/jpg/01/38/48/40/360_F_138484065_1enzXuW8NlkppNxSv4hVUrYoeF8qgoeY.jpg")
            }
        }
        testImageLoaded()
    }, [])

    return [currentImage]

}