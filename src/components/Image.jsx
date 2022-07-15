import placeholderImage from '../images/image.png'

export const Image = ({image}) => {
  return (
    <div className="img-container mb-2">
        {
            // if image is null we use the placeholder image
            image ?
            <img src={image} alt="place holder" />
            :
            <img src={placeholderImage} alt="place holder" />
        }
    </div>
  )
}
