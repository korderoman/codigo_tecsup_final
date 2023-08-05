import Header from "../shared/components/header/Header.jsx";
import {Outlet} from "react-router";

function Layout(){
    return (
      <>
          <Header/>
          <main className='container-fluid'>
              <Outlet></Outlet>
          </main>
      </>
    );
}

export  default Layout;
