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
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Review from './dashboard/bookings/Review';
import Profile from './dashboard/students/Profile';
import Sessions from './dashboard/students/Sessions';
import Password from './dashboard/students/Password';
import Pricing from './dashboard/students/Pricing';
import Login from './dashboard/Login';
import Signup from './dashboard/Signup';
import Experts from './dashboard/students/Experts';
import BookAppointment from './dashboard/bookAppointment/index';
import BookAppointmentCategory from './dashboard/bookAppointment/Category';
import BookAppointmentMode from './dashboard/bookAppointment/Mode';
import Navigation from './dashboard/students/components/Navigation';

function App() {
  const [visible, setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState('No');

  const checkLogIn = () => {
    if (localStorage.getItem('loginData')) {
      setIsLogin(true)
    }
  }

  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log("change to local storage!");
      setIsLogin('Yes')

    })
    window.addEventListener('logout', () => {
      console.log("change to local storage!2");
      setIsLogin('Na')

    })
  }, [isLogin]); // <- add the count variable here


  return (
    <BrowserRouter basePath="/">
      <ScrollToTop />
      {localStorage.getItem('loginData') ? (
        <Navigation toggleMobileNav={() => setVisible(!visible)} />
      ) : (
        <Nav toggleMobileNav={() => setVisible(!visible)} />
      )}
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
        <Route path={'/profile'} component={Profile} />
        <Route path={'/sessions'} component={Sessions} />
        <Route path={'/password'} component={Password} />
        <Route path={'/pricing'} component={Pricing} />
        <Route path={'/login'} component={Login} />
        <Route path={'/signup'} component={Signup} />
        <Route path={'/dashboard/experts'} component={Experts} />
        <Route path={'/bookAppointment'} component={BookAppointment} exact />
        <Route
          path={'/bookAppointment/category'}
          component={BookAppointmentCategory}
        />
        <Route path={'/bookAppointment/mode'} component={BookAppointmentMode} />
        <Route component={NotFound} />
      </Switch>

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
