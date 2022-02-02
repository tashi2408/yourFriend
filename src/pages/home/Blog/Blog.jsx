import './Blog.css';
import Posts from '../../../posts';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="blogmaincss">
      <div class="wrapper">
        <h1 className="primary-heading ">Latest on Your Friend Blog</h1>
        <main>
          {Posts.map((post) => (
            <div class="singleBlog" key={post.id}>
              <img src={post.image} alt={post.title}></img>
              <div class="blogContent">
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '30px',
          }}
        >
          <Link to="/blog" className="btn">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
