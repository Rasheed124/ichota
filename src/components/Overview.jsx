import React from "react";
import { Link } from "react-router";

const Overview = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className=" flex flex-col gap-y-10 px-4">
        {/* About */}
        <div className="">
          <h3 className="font-bold pb-3 text-lg xl:text-xl">About iChota</h3>
          <p>
            iChota is a growing eCommerce platform designed to make shopping
            convenient, seamless, and accessible for our users. Built on
            Flutter, our app offers a user-friendly experience with cutting-edge
            technology integrations. We’re on the hunt for a talented Full Stack
            Developer to help us scale, improve functionality, and maintain a
            high-performing app across Android and iOS platforms.
          </p>
        </div>
        {/* About */}
        <div>
          <h3 className="font-bold pb-4 text-lg xl:text-xl">Job Overview</h3>
          <p>
            We are looking for a skilled Full Stack Developer with expertise in
            Flutter to join our team. You will be responsible for the
            development, deployment, and maintenance of our eCommerce app,
            ensuring it runs smoothly across all devices. Additionally, you’ll
            work closely with the product team to implement new features,
            optimize app performance, and integrate third-party services.
          </p>
        </div>
        {/* About */}
        <div>
          <h3 className="font-bold pb-4 text-lg xl:text-xl">
            Key Responsibilities
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Develop, test, and maintain the iChota eCommerce app using Flutter
              for both Android and iOS platforms.
            </li>
            <li>
              Stay up-to-date with industry trends, emerging technologies, and
              best practices in mobile development and eCommerce.
            </li>
            <li>
              Collaborate with the product team to design and implement new
              features and enhancements.
            </li>
            <li>
              Integrate third-party services and APIs such as Twilio,
              Sendinblue, Branch.io, and Google Ads for in-app communication,
              marketing, and analytics.
            </li>
            <li>
              Troubleshoot and debug application issues, ensuring timely
              resolutions.
            </li>
            <li>
              Manage app deployments on Google Play Console and Apple Developer
              platforms, including updates, versioning, and troubleshooting.
              Work with Firebase for authentication, database management, cloud
              functions, and app analytics.
            </li>
            <li>
              Implement secure and scalable backend solutions to support
              front-end features. Ensure the app meets performance, quality, and
              responsiveness standards.
            </li>
          </ul>
        </div>
        {/* About */}
        <div>
          <h3 className="font-bold pb-4 text-lg xl:text-xl">
            Required Skills & Qualifications
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Proficiency in Flutter with a minimum of 3+ years of experience
              building and deploying mobile applications for Android and iOS.
            </li>
            <li>
              Strong experience with Firebase services, including Firestore,
              Authentication, Cloud Functions, and Analytics.
            </li>
            <li>
              Experience managing app releases on Google Play Console and Apple
              Developer platforms.
            </li>
            <li>
              Experience integrating third-party APIs and SDKs such as Twilio
              (SMS, Voice), Branch.io (Deep Linking), and Sendinblue (Email &
              SMS campaigns).
            </li>
            <li>Strong understanding of RESTful APIs and backend services.</li>
            <li>
              Familiarity with managing mobile app permissions, notifications,
              and in-app purchases.
            </li>
            <li>
              Knowledge of Google Ads integration and tracking for in-app
              analytics and marketing.
            </li>
            <li>Familiarity with version control systems like Git.</li>
            <li>Experience working in Agile/Scrum development environments.</li>
            <li>
              Strong problem-solving skills, attention to detail, and ability to
              work independently or in a team.
            </li>
          </ul>
        </div>
        {/* About */}
        <div>
          <h3 className="font-bold pb-4 text-lg xl:text-xl">
            Preferred Qualifications
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Experience with other backend frameworks such as Node.js or
              Django.
            </li>
            <li>Knowledge of mobile app security best practices.</li>
            <li>
              Familiarity with cloud services like Google Cloud Platform (GCP)
              or AWS.
            </li>
            <li>
              Experience optimizing app performance for various devices and
              network conditions.
            </li>
            <li>
              UI/UX design experience or a good understanding of user-centered
              design principles.
            </li>
          </ul>
        </div>
        {/* About */}
        <div>
          <h3 className="font-bold pb-4 text-lg xl:text-xl">Benefits</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Competitive salary and performance-based incentives.</li>
            <li>Remote work environment.</li>
            <li>
              Opportunities for career growth and professional development.
            </li>
            <li>Collaborative and innovative team culture.</li>
            <li>Access to industry-leading tools and technologies.</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link
          onClick={scrollToTop} // Trigger scroll function
          to={"/apply"}
          className="inline-block rounded-full  border border-current px-8 py-3 text-sm font-medium bg-[#1167B1] text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-white/80"
          href="#"
        >
          Apply
        </Link>
      </div>
    </>
  );
};

export default Overview;
