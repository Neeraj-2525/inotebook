import AddNote from './AddNote';
import { useLocation } from "react-router-dom";


const Home = (props) => {
  const location = useLocation();

  return (
    <div>
      <div className="m-l-r-t-b">
        {location.pathname === '/home' && <AddNote showAlert={props.showAlert} />}
      </div>
    </div>
  )
}

export default Home
