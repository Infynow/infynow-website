import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import pic4 from './pic4.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'

function Carousels() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic4} width={800} height={600} text="First"
          alt="First slide"
        />
        <Carousel.Caption>
        <p className="text-warning display-2">CAREER</p>
          <h3 className="text-white">"If you can DREAM it, you can DO it." </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2} width={800} height={600} text="First"
          alt="Second slide"
        />
        <Carousel.Caption>
        <p className="text-warning display-2">CAREER</p>
          <h3 className="text-white">“It's not what you achieve, it's what you overcome. That's what defines your career."</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3} width={800} height={600} text="First"
          alt="Third slide"
        />
        <Carousel.Caption>
        <p className="text-warning display-2">CAREER</p>
          <h3 className="text-white">“Work to become, not to acquire."</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;