import React from 'react';


// import blog_single_2 from '../../assets/images/boxing.png';

// react router dom
import { Link } from 'react-router-dom';

const BlogSingle = ({ month, day, image, to, title, excerpt }) => {
    return (
        <div className="blog-single">
            <div className="date">
                <h4>{month} <span>{day}</span></h4>
            </div>
            <div className="post">
                <Link to={to}>
                    <figure>
                        <img src={{}} alt="blog-thumbnail" />
                        <div className="hover">
                            <div className="circle">
                                <i className="fas fa-link"></i>
                            </div>
                        </div>
                    </figure>
                </Link>
                <Link className="title" to={to}>{title}</Link>
                <p className="excerpt">{excerpt} […]</p>
                <Link className="read-more link" to="https://gofund.me/f476b7b8" target="_blank">
                <span>READ MORE</span>
              </Link>
            </div>
        </div>
    );
};

export default BlogSingle;
