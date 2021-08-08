import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'I am intercontinental, cuz!', body: 'lorem ipsum...', author: 'bear', id: 1 },
    { title: 'Welcome to the party!', body: 'lorem ipsum...', author: 'cub', id: 2 },
    { title: 'California love!', body: 'lorem ipsum...', author: 'guppy', id: 3 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'panda', id: 4 }
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'bear')} title="Bear's Blogs!" />
    </div>
  );
}
 
export default Home;