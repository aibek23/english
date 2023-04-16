import React,{useState,useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {AuthPage} from './pages/AuthPage'
import { Header } from './components/Header'
import {NotFound} from './pages/NotFound'
import { Footer } from './components/Footer'
import {AdminPanel} from './pages/AdminPanel'
import { Personal } from './pages/Personal'
import { AboutUsPage } from './pages/AboutUsPage'
import { CoursePage } from './pages/CoursePage'
import English_Mechanical from './pages/English_Mechanical'
import English_IT from './pages/English_IT'


import English from './pages/English'
import Test from './pages/Test'


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
      <Header props={admin} user={user}  />
      <Routes>
          {admin && (
            <Route path="/admin" exact element={ <AdminPanel />}/>
     
          )}

        <Route path="/" element={<HomePage />}/>
         <Route path='/AuthPage' exact element={ <Personal/>}/>
        <Route path="/about" exact   element={<AboutUsPage />} />
        <Route path='/courses' element={<CoursePage/>}/>
        <Route path='/courses/english' element={<English/>}/>





        <Route path='/courses/englishforit' element={<English_IT/>}/>
        <Route path='/courses/englishfromechanical' element={<English_Mechanical/>} />
        <Route path='/test' element={<Test/>}/>
      </Routes>
      <Footer />
      </>
    );
  }

  return (
    <>
       <Header />

      <Routes>
        <Route path='*' element={<NotFound />}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/AuthPage" exact   element={<AuthPage />} />
        <Route path="/about" exact   element={<AboutUsPage />} />
        <Route path='/courses' exact element={<CoursePage/>}/>
        <Route path='/courses/english' element={<English/>}/>
        <Route path='/courses/englishforit' element={<English_IT/>}/>
        <Route path='/courses/englishfromechanical' element={<English_Mechanical/>} />
      </Routes>
      < Footer/>
    </>
  );
};

