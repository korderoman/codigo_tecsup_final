import './Sidebar.scss'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChartColumn,
    faFileSignature,
    faHeartCircleExclamation,
    faHeartPulse,
    faMicrochip,
    faBars, faRightFromBracket,
    faCloudArrowUp
} from "@fortawesome/free-solid-svg-icons" ;
import {onlogoutController} from "@controllers/auth.controller.jsx";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../../store/features/auth/auth.slice.jsx";

function Sidebar(){
    const dispatch = useDispatch();
    const onLogout=async()=>{
        await  onlogoutController();
        dispatch(deleteUser({user:null}));
        //props.setUser(null);
    }
    return (
        <>
            <section className="sidebar">
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <div className='d-flex w-100'>
                            <NavLink  to={'/home'}  className='navbar-brand w-25'>
                                <img className='sidebar__logo' src="./images/logo/mustache_logo.png" alt="logo"/>
                            </NavLink>
                            <div className="flex-fill d-flex justify-content-end">
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#menu_dashboard" aria-controls="menu_dashboard" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="text-white">
                                        <FontAwesomeIcon icon={faBars}/>
                                    </span>
                            </button>

                        </div>
                        <div className="collapse navbar-collapse" id="menu_dashboard">
                            <ul className="navbar-nav">
                                {menuData.map(m=>{
                                    return (
                                        ( m.id!=='logout' ?
                                                <li key={m.id} className="nav-item sidebar__li" >
                                                    <NavLink to={"/dashboard/"+m.id} className={({isActive})=>isActive ?"nav-link text-white active":"nav-link text-white"
                                                    } id={m.id} aria-current="page">
                                                        <FontAwesomeIcon icon={m.icon} />
                                                        <span className="ps-2">{m.key}</span>
                                                    </NavLink>
                                                </li>:
                                        <li key={m.id} className="nav-item sidebar__li">
                                            <a href="#" className="nav-link text-white" onClick={onLogout}>
                                                <FontAwesomeIcon icon={m.icon}/>
                                                <span className="ps-2">{m.key}</span>
                                            </a>
                                        </li>
                                        )
                                        );
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

        </>
    );
}
const menuData=[
    {
        key:'Posts',
        id: 'posts',
        icon: faChartColumn,
    },
    {
        key:'Media',
        id: 'media',
        icon: faMicrochip,
    },
    {
        key:'Pages',
        id: 'pages',
        icon: faFileSignature,
    },
    {
        key:'Comments',
        id: 'comments',
        icon: faHeartPulse,
    },
    {
        key:'Tools',
        id: 'tools',
        icon: faHeartCircleExclamation,
    },
    {
      key:'Upload',
      id:'upload',
      icon: faCloudArrowUp
    },
    {
        key:'Logout',
        id:'logout',
        icon:faRightFromBracket
    }
]

Sidebar.defaultProps = {
    menuData
}

export  default Sidebar
