import { Routes, Route} from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favourites from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
function App() {
  // path could be localhost:3000/path
  return (
    <Layout>
      {/* earlier used div to wrap, now created layout to wrap the output  */}
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/New_meetups" element={<NewMeetups />} />
          <Route path="/Favourites" element={<Favourites />} />
        </Routes>
    </Layout>
  );
}

export default App;
