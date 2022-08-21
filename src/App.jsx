import React from 'react'
import BodyContainer from './components/assets/BodyContainer';
import BGTopImg from './components/assets/BGTopImg';
import Navbar from './components/assets/Navbar';
import Loading from './components/assets/Loading'
import LandingPage from './components/pages/LandingPage';
import { useMain } from './components/assets/MainState';
import { Route, Routes } from 'react-router';
import AboutPage from './components/pages/AboutPage';
import WorkPage from './components/pages/WorkPage';
import ContactPage from './components/pages/ContactPage';
import Playground from './components/pages/Playground';

const App = () => {
    const {user} = useMain()
    console.log(user);
    return (
        <>
          {/* {user} */}
          <BodyContainer>
            <BGTopImg />
            <Navbar />
            <Loading />
            <Routes>
            <Route path='/' element={<><LandingPage /></>} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/work' element={<WorkPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/playground' element={<Playground />} />
            </Routes>
        </BodyContainer>
        </>
    )
}

export default App