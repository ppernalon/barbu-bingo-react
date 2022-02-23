import React, { useState } from 'react'
import Menu from './Menu'
import "./Layout.css"

const Layout = ({children}) => {
    const [childrenHeight, setChildrenHeight] = useState((window.screen.height - 40)*0.8)
    const [menuHeight, setMenuHeight] = useState((window.screen.height - 40)*0.2)

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