import Layout from "../Compnents/Layout";
import React from "react";

const Project = () => {
  return (
    <Layout>
      <div className="flex justify-evenly border-white p-5 m-0.5 flex-col">
        <div className="font-bold text-4xl text-center mb-2">
          {/* crud opration */}
          CRUD Application
        </div>
        <div className=" p-4 flex flex-col gap-2  ">
          <div>
            <p className=" text-2xl text-green-600 font-bold">Description</p>
          </div>
          <div className="flex gap-4 ">
            <div className="border-2 p-2 flex-1 rounded-3xl bg-amber-200">
              <p className="text-2xl font-bold">Tech:-</p>
              <div>
                <div>HTML</div>
                <div>Tailwind</div>
                <div>JavaScript</div>
                <div>React Js</div>
                <div>Node js</div>
                <div>Mongo Db</div>
              </div>
            </div>
            <div className="border-2 p-2 flex-1 rounded-3xl bg-amber-200">
              <p className="text-2xl font-bold ">Feature:-</p>
              <div>
                <div>* Customer Profiles (CRUD operations)</div>
                <div>
                  * Authentication & Authorization (JWT, role-based access)
                </div>
                <div>
                  * Search & Filter Customers(by name, email, status, etc.){" "}
                </div>
                <di>
                  *Dashboard & Analytics (customer stats, recent activities)
                </di>
                <div> * Email Notifications (optional)User </div>
                <div> *Management (admin,employees)</div>
              </div>
            </div>
          </div>
        </div>
        {/* crud opration is end */}

        {/* Eccomerce Project is start */}
        <div className="font-bold text-4xl text-center mb-2">Eccomerce</div>
        <div className="border-none p-4 flex flex-col gap-4">
          <div>
            <p className="font-bold text-2xl text-green-600">Description</p>
          </div>
          <div className="flex gap-4">
            <div className="rounded-3xl p-2 flex-1 bg-amber-200 border-2">
              <p className="font-bold text-2xl">Tech</p>

              <div className="flex">
                {/* First Column */}
                <div className="flex flex-col flex-1 gap-2">
                  <div>HTML</div>
                  <div>Tailwind</div>
                  <div>JavaScript</div>
                  <div>React Js</div>
                  <div>Node js</div>
                </div>
                {/* Second Column */}
                <div className="flex flex-col flex-1 gap-2">
                  <div>Mongo Db</div>
                  <div>Express Js</div>
                  <div>TypeScript</div>
                  <div>Redux-Toolkit</div>
                  <div>JWT Authentication</div>
                </div>
              </div>
            </div>
            <div className=" p-2 flex-1 border-2 bg-amber-200 rounded-3xl">
              <p className="font-bold text-2xl">Feature</p>
              <div>
                <div>
                  * Developed and Design Ecommerce Website on Mern Stack
                  technology Where Everything Mange Dynamically.{" "}
                </div>
                <div>
                  * In this Project using MongoDB, React Js, Express JS, Nodejs,
                  Bootstrap and also Maintain our code on MVC Patter Based
                  architecture.
                </div>
                <div>
                  * Some Content of Website Like Login ,Signup, Admin Dashboard,
                  User Dashboard, JWT Authentication, Hashing Password, Product
                  Management, API etc.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* eccomerce is end */}

        {/* Doctor oppint Appliaction */}
        <div className="font-bold text-4xl text-center mb-2">
          Doctor Oppointment App
        </div>
        <div className="border-none p-4 flex flex-col gap-4">
          <div>
            <p className="font-bold text-2xl text-green-600">Description</p>
          </div>
          <div className="flex gap-4">
            {/* <div className="border-2 p-2 flex-1">
              <p className="font-bold text-2xl">Tech</p>
              
            </div> */}
            <div className="rounded-3xl p-2 flex-1 bg-amber-200 border-2">
              <p className="font-bold text-2xl">Tech</p>

              <div className="flex">
                {/* First Column */}
                <div className="flex flex-col flex-1 gap-2">
                  <div>HTML</div>
                  <div>Tailwind</div>
                  <div>JavaScript</div>
                  <div>React Js</div>
                  <div>Node js</div>
                </div>
                {/* Second Column */}
                <div className="flex flex-col flex-1 gap-2">
                  <div>Mongo Db</div>
                  <div>Express Js</div>
                  <div>TypeScript</div>
                  <div>Redux-Toolkit</div>
                  <div>JWT Authentication</div>
                </div>
              </div>
            </div>
            <div className="border-2 p-2 flex-1 bg-amber-200 rounded-3xl">
              <div>
                <div className="font-bold text-2xl">Feature:-</div>
                <div> * User Authentication & Authorization</div>
                <div>* User Profile Management</div>
                <div>* Doctor Listings & Filters</div>
                <div>* Appointment Booking</div>
                <div>* Appointment Management</div>
                <div>* Doctor Dashboard</div>
                <div>* Admin Panel</div>
                <div>* Email & SMS Notifications</div>
                <div>* Payments Integration</div>
                <div>* Search & Filters</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
