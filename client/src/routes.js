import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AuthPage } from './pages/AuthPage'
import { Header } from './components/Header'
import { NotFound } from './pages/NotFound'
import { Footer } from './components/Footer'
import { AdminPanel } from './pages/AdminPanel'
import { Personal } from './pages/Personal'
import { AboutUsPage } from './pages/AboutUsPage'
import { CoursePage } from './pages/CoursePage'
import { News } from './pages/News'
import {NewsCart} from './components/NewsCart'

import { Video } from './pages/Video'
import {VideoCart} from './components/video/VideoCart'

import EnglishMechanical from './pages/English_Mechanical'
import EnglishIT from './pages/English_IT'


import English from './pages/English'
import Test from './pages/test/Test'
import Leveldetection from './pages/test/Level_detection'
import Englishtest from './pages/test/Engilsh_test'
import ITEnglishtest from './pages/test/IT_English_test'

import PricePage from './pages/PricePage'


export const useRoutes = (isAuthenticated) => {
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);
  const data = JSON.parse(localStorage.getItem('userData'));
  useEffect(() => {
    if (data) {
      setUser(data.username);
    }
    if (data && data.userEmail === 'admin@gmail.com') {
      setAdmin(true)
    }
  }, [data]);

  if (!isAuthenticated) {
    return (<>
      <Header props={admin} user={user} />
      <Routes>
        {admin && (
          <Route path="/admin" exact element={<AdminPanel />} />

        )}

        <Route path="/" element={<HomePage />} />
        <Route path='/AuthPage' exact element={<Personal />} />
        <Route path="/about" exact element={<AboutUsPage />} />
        <Route path="/price" exact element={<PricePage/>} />

        <Route path='/news' element={<News/>} />
        <Route path='/news/:id' element={<NewsCart/>} />

        <Route path='/video' element={<Video/>} />
        <Route path='/video/:id' element={<VideoCart/>} />

        <Route path='/courses' element={<CoursePage />} />
        <Route path='/courses/english' element={<English />} />
        <Route path='/courses/englishforit' element={<EnglishIT />} />
        <Route path='/courses/englishfromechanical' element={<EnglishMechanical />} />

        <Route path='/test' element={<Test />} />
        <Route path='/test/level' element={<Leveldetection />} />
        <Route path='/test/english' exact element={<Englishtest />} />
        <Route path='/test/it_test' element={<ITEnglishtest />} />

      </Routes>
      <Footer />
    </>
    );
  }

  return (
    <>
      <Header user={null} />

      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/AuthPage" exact element={<AuthPage />} />
        <Route path="/about" exact element={<AboutUsPage />} />
        <Route path='/courses' exact element={<CoursePage />} />
        <Route path='/courses/english' element={<English />} />
        <Route path='/courses/englishforit' element={<EnglishIT />} />
        <Route path='/courses/englishfromechanical' element={<EnglishMechanical />} />
        <Route path="/price" exact element={<PricePage/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/news/:id' element={<NewsCart/>} />

        <Route path='/test/level' element={<Leveldetection />} />
      </Routes>
      < Footer />
    </>
  );
};

