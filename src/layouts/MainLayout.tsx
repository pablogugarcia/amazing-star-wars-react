import React from 'react'
import styles from './MainLayout.module.css'

interface MainLayoutProps {
    children: JSX.Element
    title: string
}

const MainLayout = ({ children, title }: MainLayoutProps): JSX.Element => (
    <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {children}
    </div>
)

export default MainLayout
