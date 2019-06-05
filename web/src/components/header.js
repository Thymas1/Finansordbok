import {Link} from 'gatsby'
import React from 'react'




const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div>
    <div>
      <div>
        <Link to='/'>{siteTitle}</Link>
      </div>

    </div>
  </div>
)

export default Header
