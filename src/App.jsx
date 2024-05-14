import Contact from "./components/contact-page/Contact";
import Home from "./components/home/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from "./components/pages/blog-page/Blog";
import BlogSingle from "./components/pages/blogsingle/BlogSingle";




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/singleblog" element={<BlogSingle/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App