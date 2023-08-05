import Login from "@pages/login/Login.jsx";
import {Navigate} from "react-router";
import {useSelector} from "react-redux";
import {deserializeUser} from "@controllers";

function Admin() {
    const authState = useSelector(state => state.auth);
    const user = deserializeUser(authState.user);
    return (
        <>
            {user && user?.uid ?
                <Navigate to='/dashboard'/>
                :
                <Login />
            }
        </>
    );
}

export  default Admin
