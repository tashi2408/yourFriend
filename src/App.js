import Home from './pages/home/Home';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Footer from './components/footer/Footer';
import Post from './pages/blog/Post';
import BlogHome from './pages/blog/Home';
import ScrollToTop from './util/scrollToTop';

function App() {
  return (
    <BrowserRouter basePath="/">
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route path={'/'} component={Home} exact />
        <Route path={'/test'} component={TestComp} />
        <Route path={'/blog'} component={BlogHome} exact />
        <Route path={'/blog/:id'} component={Post} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

const TestComp = () => <h1>Test Component</h1>;
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
