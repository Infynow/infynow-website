import '../../../src/Common.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowRight } from 'react-icons/fa';
import video from '../../Images/videoProd.png';



function Index() {
    const img = {
        webImage: 'https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5374063-4496032.png',
        appImage: 'https://cdn3d.iconscout.com/3d/premium/thumb/app-development-6849309-5618483.png',
        softImage: 'https://cdn3d.iconscout.com/3d/premium/thumb/web-layout-8533773-6716436.png?f=webp',
        digitalImage: 'https://cdn3d.iconscout.com/3d/premium/thumb/ui-design-7199320-5846532.png',
        videoImage: 'https://e7.pngegg.com/pngimages/271/306/png-clipart-video-editing-software-film-editing-computer-icons-video-quality-angle-video-editing.png',
    }

    return (
        <>
            <div>
                <h2 className='ServiceHead text-light ms-3 p-3'>Services We Offer</h2>
                <div className='underLine ms-5'></div>
                <div>
                    <Row className='mx-auto w-75'>
                        <Col sm={6} className='text-center'>
                            <img src={img.webImage} className='img-fluid' />
                        </Col>
                        <Col sm={6} className='text-light' style={{ marginTop: '9%' }}>
                            <h2 className='heading'>Website Development</h2>
                            <hr className='text-light w-75' />
                            <p className='descp'>a Website can act as your online brochure/catalog which saves your money on printing costs. Having a website will make promoting your firm less expensive and you will reach more customers not just in your city but worldwide. </p>
                            <a href='#' className='gotoService mt-5'>View more <FaArrowRight /></a>

                        </Col>
                    </Row>


                    <Row className='mx-auto w-75' style={{ marginTop: '7%' }}>
                        <Col sm={6} className='text-light' style={{ marginTop: '9%' }}>
                            <h2 className='heading'>Application Development</h2>
                            <hr className='text-light w-75' />
                            <p className='descp'>In recent times Mobile Applications have alternate the way we do businesses, these apps have shaped it easier for customers to get business access very fast. And also businesses are turning to mobile apps to grow their strategies to get a higher customer base. </p>
                            <a href='#' className='gotoService mt-5'>View more <FaArrowRight /></a>

                        </Col>
                        <Col sm={6} className='text-center mt-3'>
                            <img src={img.appImage} className='img-fluid' />

                        </Col>
                    </Row>

                    <Row className='mx-auto w-75' style={{ marginTop: '7%' }}>
                        <Col sm={6} className='text-center mt-3' >
                            <img src={img.digitalImage} className='img-fluid' />

                        </Col>
                        <Col sm={6} className='text-light' style={{ marginTop: '9%' }}>
                            <h2 className='heading'>Digital Marketing</h2>
                            <hr className='text-light w-75' />
                            <p className='descp'>Now a day’s marketplace has become more digital as technology continues to evolve. Marketing is usually about connecting together with your audience within the right place at the right time which means you need to meet them where they're already spending time. </p>
                            <a href='#' className='gotoService mt-5'>View more <FaArrowRight /></a>

                        </Col>
                    </Row>


                    <Row className='mx-auto w-75' style={{ marginTop: '7%' }}>
                        <Col sm={6} className='text-light' style={{ marginTop: '9%' }}>
                            <h2 className='heading'>Software Solutions</h2>
                            <hr className='text-light w-75' />
                            <p className='descp'>Software development is the solution that is specially developed with the process of creating, designing, grouping, and maintaining software for specific users or organizations. </p>
                            <a href='#' className='gotoService mt-5'>View more <FaArrowRight /></a>

                        </Col>
                        <Col sm={6} className='text-center mt-3'>
                            <img src={img.softImage} className='img-fluid' />

                        </Col>
                    </Row>


                    <Row className='mx-auto w-75' style={{ marginTop: '7%' }}>
                        <Col sm={6} className='text-center mt-5' >
                            <img src={video} className='img-fluid' />

                        </Col>
                        <Col sm={6} className='text-light' style={{ marginTop: '9%' }}>
                            <h2 className='heading'>Digital Marketing</h2>
                            <hr className='text-light w-75' />
                            <p className='descp'>Now a day’s marketplace has become more digital as technology continues to evolve. Marketing is usually about connecting together with your audience within the right place at the right time which means you need to meet them where they're already spending time. </p>
                            <a href='#' className='gotoService mt-5'>View more <FaArrowRight /></a>

                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default Index