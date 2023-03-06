import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

// components
import PageHeaderList from '../components/PageHeaderList';
import BlogSingle from '../components/BlogSingle';
import SearchWidget from '../components/SearchWidget';
import CategoryWidget from '../components/CategoryWidget';
import donateImage from "../../assets/images/boxing.png";
import Button from "@mui/material/Button";

// images
import blog_single_1 from '../../assets/images/boxing.png';


import pattern1 from '../../assets/images/patterns/pattern.png';
import page_bg from '../../assets/images/patterns/pattern-4.png';

const Fundraisers = () => {

    const blog = [
        {
            title: 'Morris The Connector - Growth Mindset Fundraiser.',
            excerpt: 'On December 20, 2019, Congress passed the Tax Cuts and Jobs Act. This is the largest tax overhaul since 1986. There will be significant changes to the tax law, most of which take effect on January 1st, 2018. Below is a summary of the changes. Individual Taxes Tax Brackets: All tax brackets are reduced, with the top',
            image: blog_single_1,
            to: '/mind-reset'
        },
 
    ];

    return (
        <>
        
            {/* page header list - end */}

            <br />
        <br />

    {/* Our Team Section Starts*/}
    <div style={{marginTop: '50px'}} className="intro">
    <div className="intro-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="intro-content">
            <br />
              <h2> Morris The Connector - Growth Mindset Fundraiser</h2>
              <br></br>

              <p className="paragraph-lg c-grey">
                We are raising funds to provide youth with the life skills
                (Like taxes, cooking, accounting, survival, emotional
                intelligence) that mainstream schooling does not provide.
                Our target is £10,000.
              </p>

              <p className="paragraph-lg c-grey">
                In light of the rising incidents of knife and gun crime
                among today's youths, I have decided to use my knowledge and
                wisdom to establish the charity
                Morristheconnectorcic.org.uk. My goal is to provide an
                alternative form of education that teaches life skills and
                empowerment to youths in England, with plans to eventually
                expand to Africa. I am now invited to schools to share my
                experience and wisdom with the next generation.
              </p>

              <p
                style={{ marginBottom: 50 }}
                className="paragraph-lg c-grey"
              >
                I am also committed to raising funds for my charity by
                participating in a boxing event. The charity is called the
                Fixed Mindset and Growth Mindset Program, aimed at providing
                a better reality for disadvantaged youths to live in society
                and promote morality.
              </p>
              <div style={{ align: "center" }} className="button-group">
                <Button
                  style={{ color: "white" , marginLeft: "40px" }}
                  size="large"
                  color="success"
                  href="https://gofund.me/db984b0e"
                  variant="contained"
                >
                  Donate Now
                </Button>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <br />
          <div className="col-lg-6">
            <br />
            <br />
            <img
              className="grid"
              style={{
                marginTop: "40px",
                maxWidth: "100%",
                height: "auto",
                objectPostion: "cover",
                borderRadius: "10px",
              }}
              src={donateImage}
              alt="slider"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Our Team Section Ends*/}
            {/* sidebar page section - end */}
     
   
        </>
    );
};

export default Fundraisers;
