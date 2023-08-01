
import AddNote from './AddNote';
import LandingPage from './LandingPage';
import LeftNavbar from './LeftNavbar';
import NoteItem from './NoteItem';
import Notes from './Notes';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";


const Home = () => {
  const location = useLocation();
  
  return (
    <div>
      <LeftNavbar/>
      <div className="m-l-r-t-b">
      {location.pathname==='/home'&&<AddNote/>}
      </div>
        {/* <Routes>
          <Route exact path='/home/allNotes' element={<Notes/>}>
          </Route>
          <Route exact path='/home/trash' element={<LandingPage/>}>
          </Route>
        </Routes> */} 
    </div>
  )
}

export default Home
