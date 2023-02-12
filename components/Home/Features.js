import Link from 'next/link';

const Features = () => {
   const featuresData = [
      {
         id: 1,
         icon_img: "assets/img/features/wordpress.png",
         title: 'Wordpress',
         subtitle: 'Learn wordpress with the help of professionals'
      },
      {
         id: 2,
         icon_img: "assets/img/features/stack.png",
         title: 'MERN Stack',
         subtitle: 'Deep dive into MERN stack and modern technologies'
      },
      {
         id: 3,
         icon_img: "assets/img/features/teams.png",
         title: 'Hello Team',
         subtitle: 'Personalized community for freelancing support'
      },
   ]


   return (
      <>
         <section className="features__area pb-160">
            <div className="container">
               <div className="features__inner p-relative z-index-1 white-bg">
                  <div className="row">
                     {
                        featuresData.map(feature => {
                           return <div key={feature.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                              <div className={`features__item ${feature.id !== 3 && "features__border-right"} d-sm-flex align-items-start white-bg mb-30`}>
                                 <div className="features__icon mr-25">
                                    <img src={feature.icon_img} alt="" />
                                 </div>
                                 <div className="features__content">
                                    <h3 className="features__title">
                                       <Link href="/about">
                                          <a>{feature.title}</a>
                                       </Link>
                                    </h3>
                                    <p>{feature.subtitle}</p>

                                    <Link href="/about">
                                       <a className="link-btn">Learn More <i className="fa-regular fa-arrow-right">
                                       </i></a>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        })
                     }

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Features;