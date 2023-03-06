import React from 'react';


import blog_comment_img_1 from '../../assets/images/blog/comment-img-1.png';
import blog_comment_img_2 from '../../assets/images/blog/comment-img-2.png';
import blog_comment_img_3 from '../../assets/images/blog/comment-img-3.png';


const MyLife= () => {
    
  

    const comments = [
        {
            image: blog_comment_img_1,
            name: 'Collin Smith',
            date: '25 AUG, 2019',
            comment: 'Great post Collin! thoroughly enjoyed your writing and insights into the industry. I will definitely look foward to your next post.',
            reply: [
                {
                    image: blog_comment_img_2,
                    name: 'Collin Smith',
                    date: '25 AUG, 2019',
                    comment: 'Great post Collin! thoroughly enjoyed your writing and insights into the industry. I will definitely look foward to your next post.',
                }
            ]
        },
        {
            image: blog_comment_img_3,
            name: 'Collin Smith1',
            date: '25 AUG, 2019',
            comment: 'Great post Collin! thoroughly enjoyed your writing and insights into the industry. I will definitely look foward to your next post.',
        }
    ]

    return (
        <>


            {/* blog detail content - start */}
            <div className="blog-detail page-bg">
                <div className="blog-detail-wrapper page-bg-wrapper">
                    <div className="container page-bg-content">
                        <div className="row">
                       <h1>Coming Soon</h1>
                       <h1>Stay Tuned</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MyLife;
