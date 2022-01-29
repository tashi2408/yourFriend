import { useParams } from 'react-router-dom';
import './blog.css';

const Blog = () => {
  const { slug } = useParams();
  return slug === '123' ? (
    <section>This is a blog post. Slug: {slug}</section>
  ) : (
    <section>Blog Post Not Found</section>
  );
};

export default Blog;
