import React from 'react'
import Menu from './Menu'
import "./Layout.css"

const Layout = ({children}) => {    
    const childrenHeight = (window.innerHeight - 40)*0.90
    const menuHeight = (window.innerHeight - 40)*0.10

    return (
        <div className='LayoutContainer'>
            <div 
                className='LayoutChildren' 
                style={{height: childrenHeight}}
            > 
                { children }
            </div>
            <div
                style={{height: menuHeight}}
            >
              <Menu />  
            </div>          
        </div>
    )
}

export default Layout