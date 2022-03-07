import React from "react";
import Banner from "./banners/Banner";
import LearningCategorySec from "./banners/LearningCategorySec";
import OurMethodSec from "./banners/OurMethodSec";
import RecentCourseSec from "./banners/RecentCourseSec";
import OnlineTraining from "./banners/OnlineTraining";
import OnlineFeatureSec from "./banners/OnlineFeatureSec";
// import SiteFeatureSec from "./banners/SiteFeatureSec";
// import TestimonialsSec from "../components/TestimonialsSec";

const AllBanners = () => {
  return (
    <div>
      <Banner />
      <LearningCategorySec />
      <OurMethodSec />
      <RecentCourseSec />
      <OnlineTraining />
      <OnlineFeatureSec />
      {/* <SiteFeatureSec /> */}
      {/* <TestimonialsSec /> */}
    </div>
  );
};

export default AllBanners;
