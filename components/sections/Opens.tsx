import React from 'react'

// Framer Motion
import { motion } from "framer-motion"

export default function Opens({opens}: {opens: string}) {

    return (
        <div id="opens" className='d-flex flex-column justify-content-center algin-items-center gap-4'>
            <h2 className='m-0 p-0 fw-bold text-center'>{opens}</h2>
            <motion.ul
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ y: 0, x: 0, opacity: 0 }}
                className='container row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 py-3 justify-content-center align-items-center m-auto'>
                <li className='text-white text-start text-center'>Monday <span className='text-secondary'>10AM-10PM</span></li>
                <li className='text-white text-start text-center'>Tuesday <span className='text-secondary'>10AM-10PM</span></li>
                <li className='text-white text-start text-center'>Wednesday <span className='text-secondary'>10AM-10PM</span></li>
                <li className='text-white text-start text-center'>Thursday <span className='text-secondary'>10AM-10PM</span></li>
                <li className='text-white text-start text-center'>Friday <span className='text-secondary'>10AM-10PM</span></li>
                <li className='text-white text-start text-center'>Saturday <span className='text-secondary'>10AM-10PM</span></li>
                <li className='text-white text-start text-center'>Sunday <span className='text-secondary'>10AM-10PM</span></li>
            </motion.ul>
        </div>
    )
}
