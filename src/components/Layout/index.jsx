import "./index.scss"
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => { 
    return(
        <div className="App">
            <Sidebar />
            <div className="page">
                {/* Optional: Small top bar for search/profile */}
                <div className="top-bar">
                    {/* Search, profile, etc. */}
                </div>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    ) 
}

export default Layout