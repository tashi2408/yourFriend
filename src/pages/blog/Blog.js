import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm';
import './blog.css';

const Blog = () => {
  const { id } = useParams();
  const Posts = [
    {
      id: 1,
      title: "Sample Title 1",
      markdown: `
  # This is, A *Sample* Title 1
  #### This is a __Sample__ SubTitle
  This is a very nice Sample ~post~.
  Sample Link: https://shivom.me
      `,
      image: "//placekitten.com/g/800/300"
    },

    {
      id: 2,
      title: "Sample Title 2",
      markdown: `
  # This is, A *Sample* Title 2
  #### This is a __Sample__ SubTitle
  This is a very nice Sample ~post~.
  Sample Link: https://shivom.me
      `,
      image: "//placekitten.com/g/800/300"
    },
    {
      id: 3,
      title: "Sample Title 3",
      markdown: `
  # This is, A *Sample* Title 3
  #### This is a __Sample__ SubTitle
  This is a very nice Sample ~post~.
  Sample Link: https://shivom.me
      `,
      image: "//placekitten.com/g/800/300"
    },
    {
      id: 4,
      title: "Sample Title 4",
      markdown: `
  # This is, A *Sample* Title 4
  #### This is a __Sample__ SubTitle
  This is a very nice Sample ~post~.
  Sample Link: https://shivom.me
      `,
      image: "//placekitten.com/g/800/300"
    },
  ];
  const Found = (Posts.find((post)=> post.id == id ));
  const NotFound = `
  # Sorry, We couldn't find that post
  Check the sidebar to see the available posts.
  `
    return (
      <>
    <div className='blog'>
      <div class="wrapper">
      <article>
        <img src={Found?Found.image:"//placekitten.com/g/800/300"} alt="ok" draggable={false}/>
        <ReactMarkdown children={Found?Found.markdown:NotFound} remarkPlugins={[remarkGfm]} />
      </article>
      <aside>
        <h3>Read more</h3>
        <ul>
        {Posts.map((post)=>{
          if (id == post.id) return null;
          return <Link to={`/blog/${post.id}`}>
            <li>
              <img src="//placekitten.com/g/60/60" alt="no caption" draggable={false}/>
              <span class="title">{post.title}</span>
              </li>
          </Link>
        })}
        </ul>
      </aside>
      </div>
    </div>
      </>
  )
};

export default Blog;
