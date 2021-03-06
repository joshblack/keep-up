import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Room from './Room';
import Rooms from './Rooms';
import SignUp from './SignUp';
import NotFound from './NotFound';
import ServerError from './ServerError';
import Onboard from './Onboard';
import HomeForm from './HomeForm';
import RoomForm from './RoomForm';
import Task from './Task';
import Tasks from './Tasks';
import OnboardPart2 from './OnboardPart2';

const App = () => (
  <Router>
    <div className="content">
      <h1>Keep Up</h1>
      <hr />
      <div className="nav-menu">
        <Route path="/home" component={Home} />
        <Route path="/home/edit" component={HomeForm} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:room" component={Room} />
        <Route path="rooms/:room/edit" component={RoomForm} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/tasks/:task" component={Task} />
        {/* <Route path="tasks/:task/edit" component={TaskFormc} /> */}
        <Route path="/whoops" component={NotFound} />
        <Route path="/server-error" component={ServerError} />
        <Route path="/onboarding/" component={Onboard} />
        <Route path="/onboarding/:step" component={OnboardPart2} />
      </div>
    </div>
  </Router>
);

export default App;
