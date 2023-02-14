import React from "react";
import Button from "@mui/material/Button";

// react router dom
/*import { Link } from 'react-router-dom';*/

// sliders
import TestimonialSlider from "../components/TestimonialSlider";
import HeroSlider2 from "../components/HeroSlider2";
import YoutubeEmbed from "../components/YoutubeEmbed";

// Images //
<<<<<<< HEAD
import testimonial_img_1 from "../../assets/images/testimonial-bg-1.jpg";
import intro_bg from "../../assets/images/intro-bg.jpg";
import donateImage from "../../assets/images/boxing.png";
import classic from "../../assets/images/classic.jpg";
import emir from "../../assets/images/emir.jpg";
import morris from "../../assets/images/morris.JPG";
=======
import testimonial_img_1 from '../../assets/images/testimonial-bg-1.jpg';
import intro_bg from '../../assets/images/intro-bg.jpg';
import donateImage from '../../assets/images/donateimg.png';
import classic from '../../assets/images/classic.jpg';
import emir from '../../assets/images/emir.jpg';
import morris from '../../assets/images/morris.JPG';
import ebook from '../../assets/images/ebook.jpeg' 



>>>>>>> ae25b56cd1a426c4d8bfccee6f9921b95b3fba37

const Index = () => {
  const testimonials = [
    {
      testimony:
        " Morris is a powerful speaker who connected with the entire audience who were made up of the diversity of London. From students, city professionals, career changers and those looking for employment. His powerful message of resilience, purpose and action inspired us all to take action. He is a person that I would recommend for speaking engagements and one who we would like to have back again at Generation Success",
      name: "James Adeleke FRSA - CEO Generation Success",
    },
    {
      testimony:
        'Morris "The Connector" Lothian has presented at a number of our events and he has never disappointed with his valuable messages and insights around business and leadership. Mesmerising, inspirational and incredibly motivational are some of the words our audience used in feedback. He has a fascinating personal story and an exceptional business outlook, making him the perfect fit for our audiences.',
      name: "Sonia Brown MBE - Founder National Black Women Network",
    },
    {
      testimony:
        'We run motivational workshops in Schools and Universities all over the UK. It was my pleasure to invite Morris "The Connector" Lothian into several of my Schools. From the very start of his workshop he has the ability to capture their imaginations. He has met some of the worlds most famous celebrities and yet has kept his feet on solid ground. His life journey is filled with life skills and he weaves his personality in to the story telling',
      name: "Andrew Muhammad - Director Reel Talk Action LTD",
    },
  ];

  return (
    <>
      {/* Hero Slider 2 - start */}
      <HeroSlider2 />
      {/* Hero Slider 2 - end */}

      {/* intro section - start */}
      <div className="intro">
        <div className="intro-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="intro-content">
                  <h2>Introduction</h2>
                  <p className="paragraph-lg c-grey">
                    Hello everyone my name is Morris The Connector I am the
                    founder of Morris The Connector CIC. The reason for this was
                    because of my back ground. I just wanted to be able to give
                    back to the Children of this world as they are the future. I
                    came from a disadvantaged background, a broken home, failed
                    in school, turned to crime and started selling drugs, I then
                    ended up in prison along with many personal trials along the
                    way. Like losing my 18 Month old son Dwain and many more
                    adversity .
                  </p>

                  <p className="paragraph-lg c-grey">
                    They say Adversity introduces a man or Women to themselves
                    it certainly did that for me. Against all odds I navigated
                    my way through the obstacles in life to become a successful
                    business man working with some of the biggest pop stars in
                    the world like Justin Bieber, Beyonce, Whitney Houston, and
                    many more. I have also been invited to 10 Downing Street
                    once to talk about Knife Crime.
                  </p>
                  <br />
                  <Button
                    style={{ color: "white", align: "center" }}
                    size="large"
                    color="primary"
                    align="center"
                    href="https://calendly.com/morristheconnector"
                    variant="contained"
                  >
                    BOOK NOW ON CALENDLY
                  </Button>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="vertical-txt-wrapper right-align">
                  <h6 className="vertical-txt">#WearYourOwnCrown</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="image intro-bg">
            <img src={intro_bg} alt="intro-bg" />
          </div>
        </div>
      </div>
      {/* intro section - end */}

      {/* icon text section - start */}
      <div className="icon-text">
        <div className="icon-text-wrapper">
          <div className="container">
            <div className="row">
              <div className="icon-text-box icon-text-box-large txt-center">
                <h3 className="f-w-400 c-dark-2">
                  My journey has been inspiring to others which has propelled me
                  to becoming a inspirational speaker and transformational
                  Coach.
                </h3>
                <h4 className="f-w-400 c-grey">" Morris The Connector "</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* icon text section - end */}

      {/* tab section - start */}

      {/* tab section - end */}

      {/* testimonial slider section - start */}
      <div className="testimonial testimonial-1">
        <div className="testimonial-wrapper">
          <div className="container">
            <div className="row">
              <div className="testimonial-heading-content">
                <h2 className="f-w-400 heading-40">Testimonials</h2>
              </div>
            </div>
            <div className="row">
              <TestimonialSlider testimonials={testimonials} />
            </div>
          </div>
          <div
            className="background-img"
            style={{ backgroundImage: `url(${testimonial_img_1})` }}
          ></div>
        </div>
      </div>
      {/* testimonial slider section - end */}

      {/* Our Team Section Starts*/}
      <div className="intro">
        <div className="intro-wrapper">
<<<<<<< HEAD
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="intro-content">
                  <h1 style={{ paddingBottom: 50 }}>Our Team</h1>
                  <br></br>
=======
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="intro-content">
                            <h1 style={{paddingBottom:50, fontWeight:600}}>Our Team</h1>
                            <br></br>
                            
                            <h3 className="right-align">Morris The Connector</h3>
                            <p className="paragraph-lg c-grey">I wanted to take this time to let you know more about me, how I got to this point in my life and, more importantly, how I can use the skills I have learned to help you.</p>
>>>>>>> ae25b56cd1a426c4d8bfccee6f9921b95b3fba37

                  <h3 className="right-align">Morris The Connector</h3>
                  <p className="paragraph-lg c-grey">
                    I wanted to take this time to let you know more about me,
                    how I got to this point in my life and, more importantly,
                    how I can use the skills I have learned to help you.
                  </p>

                  <p className="paragraph-lg c-grey">
                    Like almost every single one of you reading this, my life
                    has had its fair share of good times and bad. I’ve been
                    blessed to have been able to revel in some incredible
                    highlights, but they have also been interspersed with
                    tragedy that would have broken many others. Trust me, it
                    came close to breaking me too, but here I am.
                  </p>

                  <p className="paragraph-lg c-grey">
                    From growing up in the harsh inner city, I’ve known what
                    it’s like to be down there looking up. From times when I’ve
                    had absolutely nothing, I’ve worked hard. Eventually leading
                    me to start up my own Executive chauffeur business working
                    with clients that have included Floyd Mayweather, Beyonce,
                    Justin Bieber and the late great Whitney Houston to name a
                    few.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="hero-2-image">
                  {/*<img style={{marginTop:100}} className="main" src={sliderImage1} alt="slider" />*/}
                  <div className="circle">
                    <img
                      className="responsive-image"
                      src={morris}
                      alt="pattern"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Eric's Section */}
            <div className="row">
              <div className="col-lg-6">
                <div className="intro-content">
                  <h3 style={{ marginTop: 100 }} className="right-align">
                    Eric Appiah-Agyemang
                  </h3>

                  <p className="paragraph-lg c-grey">
                    Eric Appiah-Agyemangan experienced mentor/ teaching
                    assistant who has worked across a range of settings in
                    supporting children and young people with barriers to
                    learning such as SEMH, Autism and special educational needs.
                  </p>

                  <p className="paragraph-lg c-grey">
                    He has the skills in collaborative working across year
                    groups and departments as well as with external
                    stakeholders. Excellent empathy that understands the various
                    needs of learners and supporting these accordingly through a
                    series of learning tasks whilst promoting independence and
                    self-reliance.
                  </p>

                  <p className="paragraph-lg c-grey">
                    Eric is a great team player with excellent communication
                    skills and the ability to establish a rapport with pupils,
                    parents and staff. A leader who is able to take own
                    initiative and find solutions in difficult situations. He is
                    also very organised and is able to work under pressure and
                    meet deadlines. With a keenness to see every pupil succeed
                    and achieve their potential.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="hero-2-image">
                  {/*<img style={{marginTop:100}} className="main" src={sliderImage1} alt="slider" /> */}
                  <div style={{ marginTop: 100 }} className="circle">
                    <img
                      className="responsive-image"
                      src={classic}
                      alt="pattern"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Eric Section Ends */}

            {/* Emir Section */}
            <div style={{ marginBottom: 100 }} className="row">
              <div className="col-lg-6">
                <div className="intro-content">
                  <h3 style={{ marginTop: 100 }} className="right-align">
                    Emir
                  </h3>
                  <p className="paragraph-lg c-grey">
                    His deepest passion lies in helping people to achieve their
                    goals and improve. An excellent leader and communicator with
                    first class people management and interpersonal skills, he
                    is conscientious, diligent and hardworking and continually
                    looking for ways to build on the experience and skills that
                    have developed to date.
                  </p>

                  <p className="paragraph-lg c-grey">
                    He takes on new challenges with determination and approaches
                    them with confidence, setting high personal standards and
                    always giving 100% to achieve targets and deliver results.
                  </p>

                  <p className="paragraph-lg c-grey">
                    Emir always work tirelessly to implement improved
                    performance and develop strong customer and colleague
                    relationships. His greatest satisfaction comes from knowing
                    his impact on people has enriched their life and made them
                    better in as many ways as they are willing to take on to
                    change.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="hero-2-image">
                  {/*<img style={{marginTop:100}} className="main" src={sliderImage1} alt="slider" /> */}
                  <div style={{ marginTop: 100 }} className="circle">
                    <img
                      className="responsive-image"
                      src={emir}
                      alt="pattern"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Emir Section Ends */}
          </div>
        </div>
      </div>
      {/* Our Team Section Ends*/}

      <YoutubeEmbed embedId="KD9ZXteT874" />

      {/* Our Team Section Starts*/}
      <div className="intro">
        <div className="intro-wrapper">
<<<<<<< HEAD
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="intro-content">
                  <h2 style={{ paddingBottom: 50 }}>
                    Morris The Connector - Growth Mindset Fundraiser
                  </h2>
=======
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="intro-content">
                            <h2>Donate For Our Project</h2>
                            <br></br>
                    
                            <p className="paragraph-lg c-grey">We are raising funds to provide youth with the life skills (Like taxes, cooking, accounting,
                                                                survival, emotional intelligence) that mainstream schooling does not
                                                                provide. Our target is £10,000.
                                                                </p>
>>>>>>> ae25b56cd1a426c4d8bfccee6f9921b95b3fba37

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
                      style={{ color: "white" }}
                      size="large"
                      color="success"
                      href="https://gofund.me/94251c6b"
                      variant="contained"
                    >
                      Donate Now
                    </Button>
                  </div>
                </div>
              </div>
              <br />
              <div className="col-4">
                <img
                  style={{
                    width: "380px",
                    height: "600px",
                    objectPostion: "cover",
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

<<<<<<< HEAD
    </>
  );
=======

                 {/* Wear Your Own Crown*/}
                 <div className="intro">
        <div className="intro-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="intro-content">
                            <h2 >WEAR YOUR OWN. <strong>CROWN.</strong> <br/></h2> <h2 style={{fontStyle:'italic'}}>By Morris The Connector</h2>
                       
                    
                            <p className="paragraph-lg c-grey">I am here to impact Inspire and Empower people to wear their Crown. I want to  show people how my sons death saved my life so I am now able to save Millions of lives. I am a former drug dealer and Gang member. But now I am a  Game Changer.</p>

                            <p className="paragraph-lg c-grey">I am a Life Coach and Inspirational Speaker  that can show people how to get the best out of themselves with my Program called the incredible You, which will show people  how to get unstuck and connect with their inner self which is the real you 🙏🏾.</p>

                            <p className="paragraph-lg c-grey">
                            We are all born Leaders . Kings 👑and Queens, 👑it’s about finding your gift and purpose in life . And then serving with it, life happens for you not to you.
                            </p>

                            <p className="paragraph-lg c-grey">
                            I used to say WHY ME when I was in my darkest hour. My brother was stabbed to death when I was 14 years old he was 19 years old, that was the first death in my family that I can remember . I then lost my  my son who was 18 Months old 30 years ago then my sister in 2007, Mother in 2010. Father 2011, Wife 2015. And another Son in 2018. 
                            </p>
                            
                            <p className="paragraph-lg c-grey">
                            The pain that I suffered has made me a person of resilient that now knows how to transmit  that pain into a gift which has now become my purpose , by showing people how they too can overcome Adversity in their life, and then use it as a gift in the way that I have. 
                            </p>
                            
                            <p className="paragraph-lg c-grey">
                            My light has now been switched on i can see clearly now in a way that has enabled me to be able to switch on other people’s lights .
                            </p>

                            <p className="paragraph-lg c-grey">
                            <strong>
                            NOW I SAY TRY ME
                            </strong>
                            </p>

                            <p className="paragraph-lg c-grey">
                            I am now an inspirational speaker Author and I am also filming a Documentary of my life which will be made into a film later on. I have had my fare share of hard knocks. I have found my true purpose and gift in life, I am here to serve with my knowledge and wisdom. And to Connect  with like minded people. .🙏🏾
                            </p>

                            <p className="paragraph-lg c-grey">
                            I once also got asked to tell my life story on one of the largest Radio stations in London called the BBC
                            You can listen to it on my website.    
                            www.morristheconnector.com🙏🏾
                            </p>

                            <p className="paragraph-lg c-grey">
                            I am also a business owner of a Chauffeur Company, called 
                            The Connector Services LTD 
                            We have driven some of the biggest pop stars in the world, Clients like Justin Bieber, Beyonce, Whitney Houston,Usher Raymond And many more .
                            I am now a Mentor to many kids
                            I have been going to Schools and teaching kids how they can change from a Follower to be a leader we are all born to lead:
                            </p>

                            <p className="paragraph-lg c-grey">
                            Also I recently went to Ethiopia to visit my daughter than now teaches  English out there and seeing the struggle the Children faced with resources made me have a Vision and Mission to get a team together to open a school in Ethiopia for Orphaned kids, and also one in London that teaches life skills and Empowerment .
                            </p>

                            <p className="paragraph-lg c-grey">
                            we need to realise that the kids never asked to be here. They are also the future of the world.🙏🏾👊🏿
                            </p>
                            
                            <p className="paragraph-lg c-grey">I am looking for like minded people that share my vision and Mission which is to get the resources out to Ethiopia for the Children, so they can become Champions in the world. .
                            </p>

     
                          
                            <Button style={{color: 'white', marginTop: 20}} size='large' color='primary' href="https://flipbookhosting.com/wear-your-own-crown/" variant="contained">Download E-Book</Button>
                      



                             { /* <div style= {{align: 'center'}} className="button-group">
                                             
                             { /*<Button style={{color: 'white'}} size='large' color='success'  href="https://gofund.me/94251c6b" variant="contained">DONATE NOW GOFUNDME</Button> X}
                                           
                            </div> */}
                        </div>
                    </div>
                    <div className="col-6">
                         <div className="hero-2-image">
                            <img className="main" src={ebook} alt="slider" /> 
                         
                        </div>
                    </div>
                </div>
         </div>
                </div>
                    </div>

                
             {/* Wear Your Own Crown Ends*/}

            
             

        </>
        
    );
>>>>>>> ae25b56cd1a426c4d8bfccee6f9921b95b3fba37
};

export default Index;
