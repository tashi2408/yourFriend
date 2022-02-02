import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './blog.css';
import Posts from '../../posts';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Blog = () => {
  const { id } = useParams();
  const Found = Posts.find((post) => post.id == id);
  const NotFound = `
  # Sorry, We couldn't find that post
  Check the sidebar to see the available posts.
  `;
  const whatsappMessage = `Please visit our site ${window.location}`;
  return (
    <>
      <div className="blog">
        <div class="wrapper">
          <article>
            <img
              src={Found ? Found.image : '//placekitten.com/g/800/300'}
              alt="ok"
              draggable={false}
            />
            <ul class="social">
              <li>
                <span>Share this post: </span>
              </li>
              <li>
                <span class="facebook">
                  <BsFacebook
                    cursor={'pointer'}
                    color="royalblue"
                    size={30}
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${window.location}`,
                        '_blank'
                      )
                    }
                  />
                </span>
              </li>
              <li>
                <span class="whatsapp">
                  <IoLogoWhatsapp
                    color="green"
                    size={30}
                    cursor={'pointer'}
                    onClick={() =>
                      window.open(
                        `https://api.whatsapp.com/send?text=${whatsappMessage}`
                      )
                    }
                  />
                </span>
              </li>
            </ul>
            <ReactMarkdown
              children={Found ? Found.markdown : NotFound}
              remarkPlugins={[remarkGfm]}
            />
          </article>
          <aside>
            <div class="read-more">
              <h3>Read more</h3>
              <ul>
                {Posts.map((post) => {
                  if (id == post.id) return null;
                  return (
                    <Link to={`/blog/${post.id}`}>
                      <li>
                        <img
                          src="//placekitten.com/g/60/60"
                          alt="no caption"
                          draggable={false}
                        />
                        <span class="title">{post.title}</span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <img
              src="//placekitten.com/g/300/300"
              alt="get help"
              draggable={false}
            />
          </aside>
        </div>
      </div>
    </>
  );
};

export default Blog;
