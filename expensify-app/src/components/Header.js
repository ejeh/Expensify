import React from 'react'
// import { NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';

import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';



export const Header = ({ startLogout }) => {
  return (
    <header className = 'header'>
      <div className = 'content-container'>
      <div className  = 'header__content'>
      <Link className ='header__title' to='/dashboard'>
        <h1>Expensify</h1>
      </Link>

      {/* <NavLink to= '/' activeClassName = 'is-active' exact={true} >Login</NavLink> */}
      {/* <NavLink to= '/dashboard' activeClassName = 'is-active' >Dashboard</NavLink>     
        <NavLink to= '/create'  activeClassName = 'is-active'>Create</NavLink>   
        <NavLink to= '/edit' activeClassName = 'is-active'>Edit</NavLink> */}
      <button className = 'button header__button' onClick={startLogout}>Logout</button>   

      </div>
      </div>
    </header>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())

})

export default connect(undefined, mapDispatchToProps)(Header);