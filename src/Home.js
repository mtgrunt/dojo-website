import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'I am intercontinental, cuz!', body: 'lorem ipsum...', author: 'Bear', id: 1 },
    { title: 'Welcome to the party!', body: 'lorem ipsum...', author: 'Cub', id: 2 },
    { title: 'California love!', body: 'lorem ipsum...', author: 'Guppy', id: 3 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Panda', id: 4 }
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
    </div>
  );
}
 
export default Home;