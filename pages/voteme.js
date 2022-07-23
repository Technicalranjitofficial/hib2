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
    history.push('/login_redirect')
  }
  return (
    <>

    <Header title = "Voting Contest Organized by Video Creators Group" description="Invite Your friends and relatives to vote your group." image="/flirting5.jpg"/>


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
                Total Vote : <span className="text-success">2000</span>
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
                Total Vote : <span className="text-warning">1500</span>
              </strong>
            </h4>
            <img src="/devil-img.jpg" alt="" />
            <a
              href="https://www.instagram.com/devil_girl_nilu

"
            >
              <p>
                <strong>@devil_girl_nilu</strong>
              </p>
            </a>
            <div className="voteBtn">
              <button onClick={handleOnclick}>VOTE</button>
            </div>
          </div>
          <div className="contentvote">
            <h4>
              <strong>
                Total Vote : <span className="text-primary">1700</span>
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
                Total Vote : <span className="text-danger">1200</span>
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
            <p>Total Participants : 4</p>
            <p>Total Cash Prize : 10k</p>
            <p>Time Until : 28th july: 12PM </p>
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
