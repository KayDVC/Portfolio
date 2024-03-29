// Site Navigation and Routing
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import {  memo } from 'react';

// Contexts
import { ThemeContextProvider } from './contexts/ThemeContext';
import { useThemeContext } from './contexts/ThemeContext'

// All Styles
import '../styles/global_styles.css'
import '../styles/component_styles.css'
import '../styles/section_styles.css'
import '../styles/animations.css'

// Pages
import Main from '../pages/Main';

// Individual Components
import Header from '../pages/components/large/Header';

const PageLayout = () => {
    const { getTheme } = useThemeContext();

    let theme = getTheme();

    return (
        <div className={`page-container background ${theme} `}>
            <Header />
            <Outlet />
        </div>
    )
}

const PageMemo = memo(PageLayout);

const SiteLayout = () => {
    return (
        <Router>
            <ThemeContextProvider> 
                <div className='site-container'>
                    <Routes>
                        <Route path='/' element={<PageMemo/>}>
                            <Route index element={<Main />} />
                        </Route>
                    </Routes>
                </div>
            </ThemeContextProvider>
        </Router>
    )
}

export default memo(SiteLayout)