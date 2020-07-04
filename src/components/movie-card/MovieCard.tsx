import React, { useRef, useState, useEffect } from 'react'
import { TimelineLite } from 'gsap'

import './MovieCard.scss'
import { MovieCardProps } from './MovieCard.model'

const MovieCard = ({ text }: MovieCardProps): JSX.Element => {
    const content = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = new TimelineLite()

        tl.to(content.current, text.split('').length / 2, { top: '-170%' })
    }, [])

    return (
        <div className="container">
            <section className="crawl">
                <div className="content" ref={content}>
                    <p>{text}</p>
                </div>
            </section>
        </div>
    )
}

export default MovieCard
