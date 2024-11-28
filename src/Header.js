import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return(
    <div className="HeaderApp">
            <h1>This is Header</h1>
        <nav>
            <p>this is nav</p>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search Bar</Link></li>
            <li><Link to="/moviereviews">Reviews</Link></li>
            </ul>
        </nav>
    </div>
    )
}
export default Header;