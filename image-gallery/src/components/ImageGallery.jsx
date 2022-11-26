import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft,faCircleChevronRight,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './Images.css'

const ImageGallery = (props) => {
    const { allImages } = props;
    const [slideNumber,setSlideNumber] = useState(0);
    const [openModel,setOpenModel] = useState(false);

    const handleOpenModal = (index) => {
      setSlideNumber(index)
      setOpenModel(true)
    }

    const handleCloseModal = () => {
        setOpenModel(false);
    }

    const prevSlide = () => {
       slideNumber === 0 
       ? setSlideNumber(allImages.length - 1)
       : setSlideNumber(slideNumber - 1)
    }


    const nextSlide = () => {
       
       slideNumber + 1 === allImages.length
       ? setSlideNumber(0)
       : setSlideNumber(slideNumber + 1)
       
    }

  return (
    <>
      {openModel && 
        <div className='slider-wrap'>
             <FontAwesomeIcon  icon={ faCircleXmark } className="btnClose" onClick={handleCloseModal} />
             <FontAwesomeIcon  icon={ faCircleChevronLeft } className="btnPrev" onClick={prevSlide}  /> 
             <FontAwesomeIcon  icon={ faCircleChevronRight } className="btnNext" onClick={nextSlide}  />
             <div className='fullScreenImage'>
                      <img src={allImages[slideNumber].image}  alt= {allImages[slideNumber].name} /> 
             </div>
        </div>
   }
    <div className='gallery-wrap'>
          {
            allImages &&  allImages.map((slide,index) => {
                return (

                    <div className='single' key={index}   onClick= {() => handleOpenModal(index)} >
                            
                            <img  src={slide.image} alt={slide.name} />
                            <div className='carname'>Image by : {slide.name}</div>
                             
                    </div>

                )
            })
          }
    </div>
    </>
  )
}

export default ImageGallery;