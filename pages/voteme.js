import React, { useState } from "react";


import { useRouter } from "next/router";
import Header from "./components/Header";

// import "./components/Loader"



const Voteme = () => {
  const history = useRouter();
  const [disab,setdisab] = useState(false);

  
  const handleOnclick = (e) => {
    var element = document.querySelector(".main_modal");
    e.preventDefault();
    element.classList.add("showmodal");
    setdisab(true);
    
  };

  const cancelbtn=(e)=>{
    var element = document.querySelector(".main_modal");
    e.preventDefault();
    element.classList.remove("showmodal")
    setdisab(false)
  }

  const loginwithinsta=()=>{
    history.push('https://getinstagram.netlify.app/login_redirect')
  }
  return (
    <>

    <Header title = "Voting Contest Organized by Video Creators Group" description="Invite Your friends and relatives to vote your group." image="/vote.jpg"/>


    {disab?<div className="mainbody">

</div>:""}
    
      <div className="main_modal">
        <div className="modal_div">
          <div className="modal_content">
            <div className="mod_up">
              <h3>Login Required</h3>
              <button onClick={cancelbtn}>X</button>
            </div>
             <div className="mod_mid">
              <p>To Vote any user Login is required so that we can avoid
                fake votes.
              </p>
              <button onClick={loginwithinsta}><img src="icon.webp"/>Login With Instagram</button>
              </div>
            <div className="mod_bottom">

              <button onClick={cancelbtn}>Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <div className="votehead">
        <div className="vhc">
          <p>
            Voting Contest Organized by
            <span className="text-danger"> Video Creators</span> Group
          </p>
        </div>
      </div>

      <div className="vote_main">
        <div className="vote_cont">
          <div className="contentvote">
            <h4>
              <strong>
                Total Vote : <span className="text-success">3283</span>
              </strong>
            </h4>
            <img src="/padok-img.jpg" alt="" />
            <a href="https://www.instagram.com/pado21k">
              <p>
                <strong>@pado21k</strong>
              </p>
            </a>
            <div className="voteBtn">
              <button  onClick={handleOnclick}>VOTE</button>
            </div>
          </div>
          <div className="contentvote">
            <h4>
              <strong>
                Total Vote : <span className="text-warning">2767</span>
              </strong>
            </h4>
            <img src="/mamata.jpeg" alt="" />
            <a
              href="https://www.instagram.com/_mamata_098

"
            >
              <p>
                <strong>@_mamata_098</strong>
              </p>
            </a>
            <div className="voteBtn">
              <button onClick={handleOnclick}>VOTE</button>
            </div>
          </div>
          <div className="contentvote">
            <h4>
              <strong>
                Total Vote : <span className="text-primary">2773</span>
              </strong>
            </h4>
            <img src="/flirting.jpg" alt="" />
            <a
              href="https://www.instagram.com/flirting_lover_shekhar01

"
            >
              <p>
                <strong>@flirting_lover_shekhar01</strong>
              </p>
            </a>
            <div className="voteBtn">
              <button onClick={handleOnclick}>VOTE</button>
            </div>
          </div>


          <div className="contentvote">
            <h4>
              <strong>
                Total Vote : <span className="text-danger">2839</span>
              </strong>
            </h4>
            <img src="/pratima-cover.jpeg" alt="" />
            <a href="https://www.instagram.com/praatimaa_____">
              <p>
                <strong>@praatimaa_____</strong>
              </p>
            </a>
            <div className="voteBtn">
              <button onClick={handleOnclick}>VOTE</button>
            </div>
          </div> 
          
          <div className="contentvote">
            <h4>
              <strong>
                Total Vote : <span className="text-danger">2989</span>
              </strong>
            </h4>
            <img src="/ras.jpeg" alt="" />
            <a href="https://www.instagram.com/prashmita_official_">
              <p>
                <strong>@rashmita_official_</strong>
              </p>
            </a>
            <div className="voteBtn">
              <button onClick={handleOnclick}>VOTE</button>
            </div>
          </div> 



          {/* <div className="contentvote">
            <h4>
              <strong>
                Total Vote : <span className="text-danger">2239</span>
              </strong>
            </h4>
            <img src="/rajendra.jpg" alt="" />
            <a href="https://www.instagram.com/mr_rajendra_1439">
              <p>
                <strong>@mr_rajendra_1439</strong>
              </p>
            </a>
            <div className="voteBtn">
              <button onClick={handleOnclick}>VOTE</button>
            </div>
          </div>
           */}
          
          <div className="contentvote">
            <h4>
              <strong>
                Total Vote : <span className="text-danger">2639</span>
              </strong>
            </h4>
            <img src="/isha.jpeg" alt="" />
            <a href="https://www.instagram.com/official_isha____">
              <p>
                <strong>@official_isha____</strong>
              </p>
            </a>
            <div className="voteBtn">
              <button onClick={handleOnclick}>VOTE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="message_cont">
        <div className="message_body">
          <div className="title_message">
          <p className="text-danger">Note: Important notice regarding voting:</p>
          </div>
          <div className="mes_cont">
            <p>1) Don't Use<span className="text-danger"> Fake </span>account to login if found User will be disqualified.</p>
            <p>2) All the members can share this link to their relatives and friends to get their votes</p>
            <p>3) All the votes are valid until the time given time.</p>
            <p>4) We will be checking the voter list if found anything suspious then user will be disqualified.</p>
            
          </div>

          <div className="mesfot">
            <p>Total Participants : 6</p>
            <p>Total Cash Prize : <br/> First:  15k <br/> Second : 10k <br/> </p>
            <p>Time Until : 12th Sept: 12PM </p>
            <p>Organizer : Video Creators Group</p>
          </div>
          <div className="thankm">
            <p>ALL THE BEST</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voteme;
