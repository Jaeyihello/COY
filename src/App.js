import { BrowserRouter, Route, Routes } from "react-router-dom";

import Title from './routes/Title';
import Home from './Home';

import Classroom from './routes/Classroom';
import Hallway from './routes/Hallway';
import Art from './routes/Art';
import Music from './routes/Music';
import Library from './routes/Library';
import Gym from './routes/Gym';

import Weekend from "./routes/Weekend"
import Answer from "./routes/Answer";
import Ending from "./routes/Ending";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/home" element={<Home />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/hallway" element={<Hallway />} />
          <Route path="/library" element={<Library />} />
          <Route path="/music" element={<Music />} />
          <Route path="/art" element={<Art />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/answer" element={<Answer/>}/>;
          <Route path="/ending" element={<Ending/>}/>;
          <Route path="/weekend" element={<Weekend/>}/>;
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;