import React, { useState } from 'react'
import { useThemeContext } from '../../../common/contexts/ThemeContext' ;
import './../../../styles/component_styles.css'
import './../../../styles/section_styles.css'
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline'

/**
 *   @details : Creates a circular graphic inspired by typical light switches. Clicking the graphic causes a site-wide theme update (if necessary).
 */

const ThemeSwitcher = () => {
    const { getTheme, toggleTheme } = useThemeContext() ;
    const [pushed, setPushed] = useState(false) ;
    
    let theme = getTheme() ;
    
    let handleThemeChange = () => {
        setPushed(prevState => {
            return !prevState
        })
    }
    
    return (
        <div className={`theme_switch outer ${theme}`} onClick={() => { handleThemeChange() ; toggleTheme() ; }}>
            <div className={'theme_switch inner'}>
                <SunIcon className={`graphic small ${theme}`} />
                <MoonIcon className={`graphic small ${theme}`} />
            </div>
            <div className={`theme_switch selector ${theme} ${pushed ? "slide" : ""}`} onAnimationEnd={handleThemeChange} />
        </div>
    )
}

export default ThemeSwitcher