import './Dashboard.scss';
import Sidebar from "@components/sidebar/Sidebar.jsx";
import {Navigate, Outlet} from "react-router";
import {useSelector} from "react-redux";
import {deserializeUser} from "@controllers";
// go to parent route: https://stackoverflow.com/questions/71163869/how-to-go-back-to-parent-route-from-child-route-in-nested-route
function Dashboard() {
    const authSate = useSelector(state=>state.auth);
    const user = deserializeUser(authSate.user);
    return (
      <>
          {
              user?
                <section className="d-flex flex-column  flex-lg-row">
                  <div className="p-2 dashboard__sidebar" >
                      <Sidebar/>
                  </div>
                  <div className="p-2 flex-grow-1">
                      <Outlet/>
                  </div>
                </section>:
                  <Navigate to="../wp-admin"/>
          }


      </>
    );
}

export  default  Dashboard;
