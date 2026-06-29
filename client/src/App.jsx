import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Learn from './pages/Learn';
import Lesson from './pages/Lesson';
import AskSakhi from './pages/AskSakhi';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:moduleId" element={<Lesson />} />
          <Route path="/ask-sakhi" element={<AskSakhi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ChatBox />
    </Router>
  );
}

export default App;
