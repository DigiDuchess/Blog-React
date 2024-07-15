import React from "react";
import Feed from "./Feed";
 const Home =({posts,fetchError ,isLoading}) => {
  console.log('poats from home',posts)
   return (
    <main className=" Home">
      {isLoading && <p className="statusMsg">Loading Posts...</p>}

      {!isLoading && fetchError && <p className="statusMsg" style={{color:"red"}}>{fetchError}</p>}

      {!isLoading && !fetchError && (posts && posts.length ? <Feed posts={posts}/> : <p className="statusMsg">No Post to Display</p>)}
     </main>
   )
 }
  export default Home