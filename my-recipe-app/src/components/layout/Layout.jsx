import BottomBar from './BottomBar'
import Header from './Header'
import './Layout.css';

/**
 * Main layout wrapper for the application.
 * Includes Header, Main Content Area, and BottomBar.
 * @param {React.ReactNode} children - The page content to display.
 * @param {Function} onNavigate - Navigation handler passed to BottomBar.
 * @param {string} activePage - Current page state.
 * @param {Function} onSearch - Search handler passed to BottomBar.
 */
const Layout = ({ children, onNavigate, activePage, onSearch}) => {
  return (
    <div className='app-container'>
      
      <Header />

      <div className="content-wrapper">
        {children}
      </div>

      <BottomBar onNavigate={onNavigate} activePage={activePage} onSearch={onSearch} />
    </div>
  )
}

export default Layout