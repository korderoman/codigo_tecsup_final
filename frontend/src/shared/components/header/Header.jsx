import {NavLink} from "react-router-dom";
import  './Header.scss';
import {
    faBars
} from "@fortawesome/free-solid-svg-icons/faBars";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Header(){
    const menus = [ 'home', 'news','documents', 'contact'];
     return (
      <>
          <nav className='navbar navbar-expand-lg header__navbar'>
              <div className='container-fluid'>
                  <div className='container d-flex justify-content-between'>
                      <NavLink  to={'/home'}  className='navbar-brand'>
                          <img className='header__logo' src="./images/logo/mustache_logo.png" alt="logo"/>
                      </NavLink>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#menu_main" aria-controls="menu_main" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span className="text-white">
                        <FontAwesomeIcon icon={faBars}/>
                    </span>
                  </button>
                  </div>
                  <div className="collapse navbar-collapse header__navbar" id="menu_main">
                      <ul className="navbar-nav">
                          {
                              menus.map((m,i)=>{
                                  return (
                                      <li key={'menu-'+i} className='nav-item header__li'>
                                          <NavLink to={"/"+m} className={({isActive})=>isActive ?"header__link--active":"header__link--no-active"}>
                                              <span className="px-2">{m}</span>
                                          </NavLink>
                                      </li>
                                  )
                              })
                          }
                      </ul>
                  </div>
              </div>
          </nav>
      </>
    );
}

export  default Header;
