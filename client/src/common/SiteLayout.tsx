// Site Navigation and Routing
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

// Contexts
import { ThemeContextProvider } from './contexts/ThemeContext' ;
import { useThemeContext } from "./contexts/ThemeContext"

// All Styles
import '../styles/global_styles.css'
import '../styles/section_styles.css'
import '../styles/component_styles.css'
import '../styles/animations.css'

// Pages
import Main from '../pages/Main' ;
import Contact from '../pages/Contact' ;
import Projects from '../pages/Projects' ;

// Individual Components
import Header from "../pages/components/large/Header"
import Footer from "../pages/components/large/Footer"

const PageLayout = () => {
    const { getTheme } = useThemeContext() ;

    let theme = getTheme() ;

    return (
        <div className={`page-container background ${theme}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const SiteLayout = () => {
    return (
        <Router>
            <ThemeContextProvider> 
                <div className='site-container'>
                    <Routes>
                        <Route path='/' element={<PageLayout/>}>
                            <Route index element={<Main />} />
                            <Route path='contact' element={<Contact />} />
                            <Route path='projects' element={<Projects/>} />
                        </Route>
                    </Routes>
                </div>
            </ThemeContextProvider>
        </Router>
    )
}

export default SiteLayout