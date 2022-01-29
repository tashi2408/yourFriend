import Home from './pages/home/Home';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Footer from './components/footer/Footer';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <BrowserRouter basePath="/">
      <Nav />
      <Switch>
        <Route path={'/'} component={Home} exact />
        <Route path={'/test'} component={TestComp} />
        <Route path={'/blog/:slug'} component={Blog} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

const TestComp = () => <h1>Test Component</h1>;
const NotFound = () => (
  <h1 style={{ margin: '50vh 0', textAlign: 'center' }}>404 | Not Found</h1>
);

export default App;
