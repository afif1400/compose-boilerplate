import classes from './header.module.css'
import {NavLink} from 'react-router-dom'
const Header=()=>{
  return (
      <header className={classes.header}>
      <nav>
          <ul>
              <li>
                  <NavLink activeClassName={classes.active} exact to='/'>
                    Home    
                  </NavLink>
              </li>
              <li>
                  <NavLink  activeClassName={classes.active} to='/otherpage'>
                      OtherPage
                  </NavLink>
              </li>
          </ul>
      </nav>
      </header>
  )
}

export default Header;