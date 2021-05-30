import classes from './header.module.css'
import {NavLink} from 'react-router-dom'
const Header=()=>{
  return (
      <header className={classes.header}>
      <nav>
          <ul>
              <li>
                  <NavLink to="/" >
                    Home    
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/OtherPage' >
                      OtherPage
                  </NavLink>
              </li>
          </ul>
      </nav>
      </header>
  )
}

export default Header;