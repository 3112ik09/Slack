
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter , Router , Route , Routes} from "react-router-dom";
import Chat from './Chat';
import './SidebarOption';

import Login from './Login';
import { useStateValue } from "./StateProvider";
function App() {

  const [{user}, dispatch] = useStateValue(); 
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (<Login/>):
          (<>
            {/* Headder  */}
            <Header/>

            <div className='app__body'>
              <Sidebar/>
                  <Routes>
                      <Route path="/room/" element={<><Chat/></>} />
                      <Route path="/room/:roomId" element={<><Chat/></>} />
                      <Route path="/Home" element={<><Chat/></>} />
                      <Route path="/" element={<>main Screen</>} />
                      <Route path="*" element={<></>}/>
                  </Routes>
            </div>
            {/* Side bar  */}
            {/* react rooter */} 
        
          </>)
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
