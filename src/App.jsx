import React, { useState } from 'react';
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
     { id: 1, src: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    { id: 2, src: 'https://images.unsplash.com/photo-1675055477411-31cfa13b4798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' },
     { id: 3, src: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 4, src: 'https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' },
    { id: 5, src: 'https://images.unsplash.com/photo-1675060176173-83bd72adc58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' },
     { id: 6, src: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
    { id: 7, src: 'https://images.unsplash.com/photo-1675055477411-31cfa13b4798?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' },
     { id: 8, src: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' },
    { id: 9, src: 'https://plus.unsplash.com/premium_photo-1663040077027-d74f3beaa46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' },
    { id: 10, src: 'https://images.unsplash.com/photo-1675060176173-83bd72adc58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' },
   ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  const handleClickOut = e => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  }
  const handleKeyDown = (e) => {
     if(showModal) {
        if (e.key === "ArrowRight") {
          handlePreviousImage();
        } else if (e.key === "ArrowLeft") {
          handleNextImage();
        }
     }
 }
  return (
    <div tabIndex={0} onKeyDown = { handleKeyDown}>
      <h1>Image Gallery</h1>
      <div className="image-grid" >
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            onClick={() => handleImageClick(index)}
            alt="Gallery Image"
          />
        ))}
      </div>
      {showModal && (
        <div className="modal" onClick = { handleClickOut }>
          <div className="modal-content">
            <button className="arrow-button left" onClick={handlePreviousImage}>
              {'<'}
            </button>
            <img src={images[selectedImageIndex].src} alt="Modal Image" />
            <button className="arrow-button right" onClick={handleNextImage}>
              {'>'}
            </button>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

