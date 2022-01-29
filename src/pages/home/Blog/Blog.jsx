import React from 'react';
import './Blog.css';
import one from '../../../assets/blog/one.jpg';
import two from '../../../assets/blog/two.jpg';
import three from '../../../assets/blog/three.jpg';
import four from '../../../assets/blog/four.jpg';

function Blog() {
  return (
    <div className="blogmaincss">
      <div class="container">
        <h1 className="primary-heading ">Latest on Your Friend Blog</h1>
        {/* <p>
            In this section we are providing the latest update,blog and
            informative article which may help so do check it out!
          </p> */}
        <main>
          <div class="singleBlog">
            <img src={one} alt=""></img>
            <div class="blogContent">
              <h3>
                Psychological Impact of The life during Covid-19
                <span>Article</span>
              </h3>
              <p>
                Impact<a href="#">by covid 19</a> | <a href="#">Insight</a>
              </p>
              <a href="#" class="btn">
                Read More
              </a>
            </div>
          </div>
          <div class="singleBlog">
            <img src={two} alt=""></img>
            <div class="blogContent">
              <h3>
                Choose therapy over pain & Overcome fear <span>Article</span>
              </h3>
              <p>
                By <a href="#">SUHANI SUMAN</a> | <a href="#">Homepage</a>
              </p>
              <a href="#" class="btn">
                Read More
              </a>
            </div>
          </div>
          <div class="singleBlog">
            <img src={three} alt=""></img>
            <div class="blogContent">
              <h3>
                Counselors never tell you what to do,They help guide you{' '}
                <span>Article</span>
              </h3>
              <p>
                6 Ways to distinguish <a href="#">Counselling</a> |{' '}
                <a href="#">Homepage</a>
              </p>
              <a href="#" class="btn">
                Read More
              </a>
            </div>
          </div>
          <div class="singleBlog">
            <img src={four} alt=""></img>
            <div class="blogContent">
              <h3>
                Support them and be there for them through ther worst time
                <span>Article</span>
              </h3>
              <p>
                5 Tips to Encouraged <a href="#">the loved ones</a> |{' '}
                <a href="#">Family and Friends</a>
              </p>
              <a href="#" class="btn">
                Read More
              </a>
            </div>
          </div>
        </main>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '10px',
          }}
        >
          <a href="#" className="button pulse">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blog;
