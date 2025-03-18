import { useState } from 'react'
import Modal from 'react-modal'

const galleryItems = [
  {
    id: 1,
    title: 'Volaille Fraîche',
    src: 'https://i.pinimg.com/736x/f5/83/9c/f5839cbcff665c511e1b36f4fa459a7b.jpg',
  },
  {
    id: 2,
    title: 'Œufs Bio',
    src: 'https://i.pinimg.com/736x/eb/1c/f0/eb1cf0ca27281b9ce3a8957a362c788d.jpg',
  },
  {
    id: 3,
    title: 'Poulets Élevés en Plein Air',
    src: 'https://i.pinimg.com/736x/3e/46/cc/3e46cc565db92ac8c68ad07a0e7115db.jpg',
  },
  {
    id: 4,
    title: ' Produits Fermiers',
    src: 'https://i.pinimg.com/736x/4d/12/20/4d12206c43bd552010225d250dd4b74b.jpg',
  },
  {
    id: 5,
    title: 'Volaille de Qualité',
    src: 'https://i.pinimg.com/736x/6c/6c/b0/6c6cb07b08d3731e381fdb18aa9d8c1a.jpg',
  },
  {
    id: 6,
    title: 'Poulet de Chair',
    src: 'https://i.pinimg.com/736x/4b/1a/e3/4b1ae34b8170afb03fdfdf22bbc8ae02.jpg',
  },
]

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (index) => {
    setCurrentImageIndex(index)
    setModalIsOpen(true)
  }

  const closeModal = () => setModalIsOpen(false)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
  }

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length
    )
  }

  // Autoplay function
  const startAutoplay = () => {
    setInterval(() => {
      nextImage()
    }, 3000) // Change image every 3 seconds
  }

  return (
    <div className='gallery'>
      <h1> Ce Que Nous Offrons</h1>
      <p>
        Notre galerie présente la variété de produits de volaille frais et biologiques que nous proposons.
      </p>

      <div className='gallery-images'>
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className='gallery-item'
            onClick={() => openModal(index)}
          >
            <img src={item.src} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Image Modal'
        className='modal-content'
        overlayClassName='modal-overlay'
        onAfterOpen={startAutoplay}
      >
        <div className='modal-gallery'>
          <button className='close-button' onClick={closeModal}>
            X
          </button>
          <div className='modal-image-container'>
            <img src={galleryItems[currentImageIndex].src} alt='Gallery' />
            <h3>{galleryItems[currentImageIndex].title}</h3>
          </div>
          <div className='modal-navigation'>
            <button className='button-style' onClick={prevImage}>
              Précédent
            </button>
            <button className='button-style' onClick={nextImage}>
             Suivant
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Gallery
