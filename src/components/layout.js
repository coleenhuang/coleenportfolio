 import React, { useState } from "react"
 import PropTypes from "prop-types"
 import { useTranslation } from 'react-i18next'
 import Header from "./header/header"
 import MobileNav from './header/MobileNav'
 import "./layout.css"

 const Layout = ({ children, i18n }) => {
    const [showMenu, setMenu] = useState(false);
    const toggleMenu = ()=>setMenu(showMenu?false:true)
    const { t } = useTranslation()
   return (
     <div>
         <Header toggleMenu={toggleMenu} showMenu={showMenu}/>
        <MobileNav open={showMenu} toggleMenu={toggleMenu}/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>
            {children}
          </main>
          <footer>
            © {new Date().getFullYear()}, {t(`site.footer`)}
          </footer>
       </div>
     </div>
   )
 }

 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }

 export default Layout
