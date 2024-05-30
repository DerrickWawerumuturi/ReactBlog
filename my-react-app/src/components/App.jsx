import React from "react";
import Blog from "./Blog";
import Header from "./Header";
import Footer from "./Footer";
import blogs from "../blogs";


function App() {
  return (
    <div>
      <Header />
      {blogs.map(info => 
          <Blog 
            key={info.id}
            title={info.title}
            description={info.description.substring(0, 100)}
          /> 
      )}
      <Footer />
    </div>
  )
}

export default App;