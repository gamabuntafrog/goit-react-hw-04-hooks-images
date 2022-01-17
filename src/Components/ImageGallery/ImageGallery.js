import React, { useState, useEffect } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Loader from "../Loader";
import Modal from "../Modal";
import imagesApi from "../../services/images-api";

const ImageGallery = ({imageName}) => {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState([]);
  const [totalHits, setTotalHits] = useState(0)

  const plusPage = () => {
    setPage(prev => prev + 1)
  }

  useEffect(() => {
    if (!imageName.trim()) {
      return
    }
    setStatus('pending')

    imagesApi.fetchImages(imageName, 1)
      .then((res) => {
        if (res.totalHits === 0) {
          setStatus('empty')
        } else {
          setImages(res.hits);
          setTotalHits(res.totalHits);
          setStatus('resolved')
        }
      })
  }, [imageName])

  useEffect(() => {
    if (page === 1) {
      return
    }

    imagesApi.fetchImages(imageName, page).then((res) => {
      setImages(prev => prev.concat(res.hits));
      setStatus('resolved')
    });
  
  }, [page])

  const openModal = (img) => {
    const modalImg = images.filter((e) => {
      return e.webformatURL === img;
    });
    setModalImage(modalImg[0])
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(prev => !prev)
  }
  
    if (status === "idle") {
      return <div>Введите название картинки</div>;
    }

    if (status === "pending") {
      return <Loader />;
    }

    if (status === "empty") {
      return <h1>Not found :(</h1>;
    }

    if (status === "resolved") {
      return (
        <div>
          <ul className="ImageGallery">
            {images.map((img, i) => {
              return (
                <ImageGalleryItem
                  openModal={openModal}
                  key={i}
                  img={img.webformatURL}
                />
              );
            })}
          </ul>
          {totalHits > page * 12 && <Button onClick={plusPage} />}
          {showModal && (
            <Modal toggleModal={toggleModal}>
              <img src={modalImage.largeImageURL} alt={modalImage.tags} />
            </Modal>
          )}
        </div>
      );
    }
  
}
export default ImageGallery;


