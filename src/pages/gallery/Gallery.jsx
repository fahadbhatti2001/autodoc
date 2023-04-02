import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
  const galleryLength = 15
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Welcome to our gallery, where we will be showcasing images and videos of our latest work related to the automotive industry. We've collected sound samples of more than 500+ faulty engines
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((images, index) => {
            return (
              <article key={index}>
                <img src={images} alt={`Gallery Image ${index + 1}`} />
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Gallery
