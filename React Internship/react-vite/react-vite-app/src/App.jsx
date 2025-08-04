import { Routes, Route } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import React from "react";
import withSuspense from "./hoc/suspense";
import VectorBackground from "./components/VectorBackground";

const Home = withSuspense(React.lazy(()=>import("./pages/Home")));   // React.lazy only works with default
const About = withSuspense(React.lazy(()=> import ("./pages/About")));  
const Contact = withSuspense(React.lazy(()=> import("./pages/Contact")));
const NoPage = withSuspense(React.lazy(()=> import("./pages/NoPage")));

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden relative">
        
        <div className="fixed inset-0 -z-10 w-full h-full">
          <VectorBackground className="w-full h-full object-cover" /> 
        </div>
      
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />

          </Route>
        </Routes>
    </div>
  );
};

export default App;
