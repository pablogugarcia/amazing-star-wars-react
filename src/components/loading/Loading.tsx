import React from 'react'
import './Loading.scss'

import LoadingGIF from '../../assets/loading.gif'

const Loading = (): JSX.Element => (
    <div className="loading-container">
        <img src={LoadingGIF} alt="LOADING" className="loading" />
        <span className="loading-label">Loading...</span>
    </div>
)

export default Loading
