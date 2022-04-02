import '../../pages/home/Blog/Blog.css';
import Posts from '../../posts';
import { Link } from 'react-router-dom';
const BlogHome = () => {
  return (
    <div
      className="blogmaincss"
      style={{
        height: 'calc(100vh - 146px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="wrapper">
        <h1 className="primary-heading ">The Your Friend Blog</h1>
        <main>
          {Posts.map((post) => (
            <div className="singleBlog" key={post.id}>
              <img src={post.image} alt={post.title}></img>
              <div className="blogContent">
                <h3>
                  {post.title}
                  <span>Article</span>
                </h3>
                {/* <p>
                  Impact<a href="/">by covid 19</a> | <a href="/">Insight</a>
                </p> */}
                <Link to={`/blog/${post.id}`} className="btn">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default BlogHome;
