import React from 'react'
import '../../../src/Common.css'
import { FaAngleDown, FaArrowDown, FaArrowRight } from 'react-icons/fa';

function index() {
    return (
        <>
            <div className='textInfynow text-light text-center '>
                <h1 >Infynow Business Solutions.</h1>
                <h5>we strive for your exellence.</h5>
                <div style={{ marginTop: '3%' }}>

                    <a href='#one' className='knowMore'>Let's Go</a>
                    <br />
                    <br />
                    <FaAngleDown className='fs-2' />
                </div>
            </div>
        </>
    )
}

export default index