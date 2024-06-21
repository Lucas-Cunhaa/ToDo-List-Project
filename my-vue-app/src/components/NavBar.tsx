import { Link } from "react-router-dom" 
import React, { ReactNode } from 'react'


interface NavBarProps {
    children: ReactNode;
    link: string;
  }

const NavBar: React.FC<NavBarProps> = ( { children, link }    ) => {
    return (
        <nav>
            <Link to={link}>{children}</Link>
        </nav>
    )
}
export default NavBar