import React from 'react'
import LoadingGIF from '../../assets/loading.gif'
import './Loading.scss'

const Loading = () => (
    <div className="loading-container">
        <img src={LoadingGIF} alt="LOADING" className="loading" />
        <span className="loading-label">Cargando...</span>
    </div>
)

export default Loading
