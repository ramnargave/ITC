import Contact from "./components/contact-page/Contact";
import Home from "./components/home/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from "./components/pages/blog-page/Blog";
import BlogSingle from "./components/pages/blogsingle/BlogSingle";
import Header from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import History from "./components/pages/history/History";
import Gallery from "./components/pages/gallery/Gallery";
import Testing from "./components/pages/testing/Testing";
import Training from "./components/pages/training/Training";




function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/singleblog" element={<BlogSingle/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="/testing" element={<Testing/>}/>
        <Route path="/training" element={<Training/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App