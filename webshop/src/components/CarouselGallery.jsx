import Carousel from 'react-bootstrap/Carousel';
// import { useState } from 'react';

function CarouselGallery() {



    // const [images, setImages] = useState([
    //     {src: "https://picsum.photos/id/237/200/300", alt: "", header: "", text: "},
    //     {src: "https://picsum.photos/id/237/200/300", alt: "", header: "", text: "},
    //     {src: "https://picsum.photos/id/237/200/300", alt: "", header: "", text: "},
    //     {src: "https://picsum.photos/id/237/200/300", alt: "", header: "", text: "},
    // ]);
  const images = [
    {src: "https://picsum.photos/id/237/200/300", alt: "", header: "", text: "},
    {src: "https://picsum.photos/id/237/200/300", alt: "", header: "", text: "},
    {src: "https://picsum.photos/id/237/200/300", alt: "", header: "", text: "},
    {src: "https://picsum.photos/id/237/200/300", alt: "", header: "", text: "},
  ]    
 
  return (
    <Carousel>
      { images.map(element =>
       <Carousel.Item>
         <img
           src="holder.js/800x400?text=First slide&bg=373940"
           alt="First slide"
         />
         <Carousel.Caption>
           <h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
       )}
    <Carousel/>
  );
}


export default CarouselGallery;