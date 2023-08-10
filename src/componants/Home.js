import AddNote from './AddNote';
import LeftNavbar from './LeftNavbar';
import { useLocation } from "react-router-dom";
import UserProfileIcon from './UserProfileIcon';


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
