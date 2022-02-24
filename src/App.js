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
import Webinars from './pages/Webinar/Webinar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Review from './dashboard/bookings/Review';
import Sessions from './dashboard/students/Sessions';
import Pricing from './dashboard/students/Pricing';
import Login from './dashboard/Login';
import Signup from './dashboard/Signup';
import Experts from './dashboard/students/Experts';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <BrowserRouter basePath="/">
      <ScrollToTop />
      <Nav toggleMobileNav={() => setVisible(!visible)} />
      <OffCanvas isVisible={visible} />
      <Switch>
        <Route path={'/'} component={Home} exact />
        <Route path={'/blog'} component={BlogHome} exact />
        <Route path={'/team'} component={Team} />
        <Route path={'/about'} component={About} />
        <Route path={'/internships'} component={Internships} />
        <Route path={'/campaigns'} component={Campaigns} />
        <Route path={'/webinars'} component={Webinars} />
        <Route path={'/blog/:id'} component={Post} />
        <Route path={'/dashboard/bookings'} component={Review} />
        <Route path={'/sessions'} component={Sessions} />
        <Route path={'/pricing'} component={Pricing} />
        <Route path={'/login'} component={Login} />
        <Route path={'/signup'} component={Signup} />
        <Route path={'/dashboard/experts'} component={Experts} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

const OffCanvas = ({ isVisible }) => {
  if (!isVisible) return null;
  const LinksList = [
    {
      name: 'About',
      ref: '/about',
    },
    {
      name: 'Team',
      ref: '/about',
    },
    {
      name: 'Blog',
      ref: '/about',
    },
    {
      name: 'Events',
      items: [
        {
          name: 'Internships',
          ref: '/internships',
        },
        {
          name: 'Campaigns',
          ref: '/campaigns',
        },
        {
          name: 'Webinars',
          ref: '/webinars',
        },
      ],
    },
  ];
  return (
    <div className="off-nav colorBar">
      <div class="wrapper">
        <div class="list">
          {LinksList.map((link) => (
            <div>
              <Link to={link.ref || undefined}>
                <span>{link.name}</span>
              </Link>
              <div style={{ paddingLeft: 30 }}>
                {link.items &&
                  link.items.map((ll) => (
                    <Link to={ll.ref}>
                      <span>{ll.name}</span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
