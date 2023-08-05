import './App.scss'
import { RouterProvider} from "react-router";
import router from "./router/router.jsx";

function App() {

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
