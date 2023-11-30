import React from 'react'
import {Link} from 'react-router-dom';
const Layout = () => {
  return (
    <div>
     <ul>
      <li>
        <Link to="/">Home</Link>
</li>
<li>
    <Link to="/blogs">Blogs</Link>
</li>
<li>
    <Link to="/vlogs">Vlogs</Link>
</li>
</ul>
    </div>
    
  )
}


export default Layout;
