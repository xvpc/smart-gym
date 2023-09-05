import React from 'react'

// Mui
import { Tooltip } from '@mui/material'

// Framer Motion
import { motion } from 'framer-motion';

// Styles
import styles from "@/styles/Home.module.css";

export default function Coaches({coachesTitle, coaches}: {coachesTitle: string, coaches: any[any]}) {
    
    return (
        <div className='container d-flex flex-column justify-content-center algin-items-center gap-4'>
            <h2 className='p-0 m-0 fw-bold text-center'>{coachesTitle}</h2>
            <div className='container px-0 row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-3 justify-content-center align-self-center'>
                {
                    coaches.map((item: any, index: number) => {
                        return(
                            <motion.div whileHover={{opacity: 0.8}} initial={{opacity: 1}}  key={index} style={{cursor: "pointer"}} className='overflow-hidden'>
                                <div className={`h-100 w-100 rounded ${styles.cardPattern} d-flex flex-row justify-content-start algin-items-center`}>
                                    <img
                                        className='w-25 h-100'
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                    />
                                    <div className='p-2 d-flex flex-column justify-content-around algin-items-center gap-2'>
                                        <Tooltip title={item.name || ""} arrow>
                                            <h6 className='p-0 m-0 fw-bold text-truncate'>{item.name || ""}</h6>
                                        </Tooltip>
                                        <p className='p-0 m-0 text-white-50 text-wrap ps-2' title={item.name || ""}>{item.title || ""}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}
