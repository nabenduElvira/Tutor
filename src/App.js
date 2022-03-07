import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import BecomeTutorSec from "./components/BecomeTutorSec";
import FooterCopyrightSec from "./components/FooterCopyrightSec";
import FooterSec from "./components/FooterSec";
import Home from "./screens/Home";
import TutorListingSec from "./screens/TutorListingSec";
import TutorDetailsSec from "./screens/TutorDetailsSec";
import CourseListingSec from "./screens/CourseListingSec";
import CourseDetailsSec from "./screens/CourseDetailsSec";
import ContactUsScreen from "./screens/ContactUsScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import TermsScreen from "./screens/TermsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UpdateProfileScreen from "./screens/UpdateProfileScreen";
import EditProfile from "./screens/teacher-profile/EditProfile";
/* Dashboard */
import DashboardScreen from "./screens/users/dashboard/DashboardScreen";
import HomeworkScreen from "./screens/users/dashboard/HomeworkScreen";
// import LessonsScreen from "./screens/users/dashboard/LessonsScreen";
import TeachersScreen from "./screens/users/dashboard/TeachersScreen";
/* Setting */
import GeneralScreen from "./screens/users/settings/GeneralScreen";
import ProfilePhotoScreen from "./screens/users/settings/ProfilePhotoScreen";
import LanguageScreen from "./screens/users/settings/LanguageScreen";
import PasswordScreen from "./screens/users/settings/PasswordScreen";
// import NotificationScreen from "./screens/users/settings/NotificationScreen";
// import PaymentScreen from "./screens/users/settings/PaymentScreen";
import DeactivateScreen from "./screens/users/settings/DeactivateScreen";
import Videocall from "./screens/videocall/Videocall";
// import Videocall2 from "./screens/Videocall2";
import SchedulerScreen from "./screens/scheduler/SchedulerScreen";
// classes
import Teacherclasslist from "./screens/TeacherclassList";
import Classlisting from "./screens/ClassListing";
import ForgotPassword from "./screens/ForgotPassword";
import SiteFeatureSec from "./components/banners/SiteFeatureSec";
import Requestteacher from "./screens/RequestTeacher";
import Jobslist from "./screens/JobsList";
import Joblists from "./screens/JobLists";
import Requestreply from "./screens/RequestReply";
import Studentjob from "./screens/StudentJob";
import Privatelessons from "./screens/PrivateLessons";


const App = () => {
  return (
    <Router>
      <Header />
      <LoginScreen />
      <RegisterScreen />
      <ForgotPassword />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tutor-list" component={TutorListingSec} />
        <Route path="/tutor-details" component={TutorDetailsSec} />
        <Route path="/course-list" component={CourseListingSec} />
        <Route path="/course-details" component={CourseDetailsSec} />
        <Route path="/contact-us" component={ContactUsScreen} />
        <Route path="/privacy-policy" component={PrivacyPolicyScreen} />
        <Route path="/terms" component={TermsScreen} />
        <Route path="/update-profile" component={UpdateProfileScreen} />
        <Route path="/profile" component={EditProfile} />
        <Route path="/request-teacher" component={Requestteacher}/>
        <Route path="/job-list" component={Jobslist}/>
        <Route path="/student-job-list" component={Studentjob}/>
        <Route path="/job-lists" component={Joblists}/>
        <Route path="/private-lessons" component={Privatelessons}/>
        <Route path="/request-reply" component={Requestreply}/>
        {/* Dashboard */}
        <Route path="/dashboard" component={DashboardScreen} />
        <Route path="/homework" component={HomeworkScreen} />
        {/* <Route path="/lessons" component={LessonsScreen} /> */}
        <Route path="/teachers" component={TeachersScreen} />
        {/* Setting */}
        <Route path="/general" component={GeneralScreen} />
        <Route path="/profile-photo" component={ProfilePhotoScreen} />
        <Route path="/language" component={LanguageScreen} />
        <Route path="/password" component={PasswordScreen} />
        {/* <Route path="/notification" component={NotificationScreen} /> */}
        {/* <Route path="/payment" component={PaymentScreen} /> */}
        <Route path="/deactivate" component={DeactivateScreen} />
        <Route path="/video" component={Videocall} />
        {/* <Route path="/test" component={Videocall2} /> */}
        <Route path="/scheduler" component={SchedulerScreen} />
        {/* Classes */}
        <Route path="/student-classes" component={Classlisting} />
        <Route path="/teacher-classes" component={Teacherclasslist} />
        <Route path="/how-it-works" component={SiteFeatureSec} />
      </Switch>
      <BecomeTutorSec />
      <FooterSec />
      <FooterCopyrightSec />
    </Router>
  );
};

export default App;
