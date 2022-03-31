import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Season1 from './components/MaskedSingers/Season 1/Season1';
import NavigationBar from './components/NavigationBar/NavigationBar';
import MainPage from './components/MaskedSingers/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Season2 from './components/MaskedSingers/Season 2/Season2';
import Season3 from './components/MaskedSingers/Season 3/Season3';
import Season4 from './components/MaskedSingers/Season 4/Season4';
import Season5 from './components/MaskedSingers/Season 5/Season5';
import Season6 from './components/MaskedSingers/Season 6/Season6';
import Season7 from './components/MaskedSingers/Season 7/Season7';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/season1' element={<Season1 />} />
        <Route path='/season2' element={<Season2 />} />
        <Route path='/season3' element={<Season3 />} />
        <Route path='/season4' element={<Season4 />} />
        <Route path='/season5' element={<Season5 />} />
        <Route path='/season6' element={<Season6 />} />
        <Route path='/season7' element={<Season7 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
