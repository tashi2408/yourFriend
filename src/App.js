import Home from './pages/home/Home';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Footer from './components/footer/Footer';
import Post from './pages/blog/Post';
import BlogHome from './pages/blog/Home';
import ScrollToTop from './util/scrollToTop';
import Team from './pages/Team/OurTeam';
import About from './pages/Aboutus/About';
import Internships from './pages/Internship/Internship';
import Campaigns from './pages/Campaign/Campaign';

function App() {
  return (
    <BrowserRouter basePath="/">
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route path={'/'} component={Home} exact />
        <Route path={'/blog'} component={BlogHome} exact />
        <Route path={'/team'} component={Team} />
        <Route path={'/about'} component={About} />
        <Route path={'/internships'} component={Internships} />
        <Route path={'/campaigns'} component={Campaigns} />
        <Route path={'/webinars'} component={BlogHome} />
        <Route path={'/blog/:id'} component={Post} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

const NotFound = () => (
  <div
    style={{
      height: 'calc(100vh - 146px)',
      display: 'flex',
      flexFlow: 'column wrap',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <img src="//placekitten.com/g/600/400" alt="Not Found" />
    <h1>404 | Not Found</h1>
  </div>
);

export default App;
