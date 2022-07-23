import { useState } from "react";
import {useRouter} from 'next/router'
import ContentDescription from "./components/ContentDescription";
import ContentTitle from "./components/ContentTitle";
import Video from "./components/Video";
import Header from "./components/Header";


const Yourvideohasbeenleaked = () => {
  const titlecnt = "Jannat Jubair Video Has been Leaked";
  const descriptioncnt =
    "Jannat Zubair is one of the most popular TikTok users of India and enjoys around 28 million followers on the app. The actress was an avid user and shared regular updates with her fans. But Jannat is happy with the ban imposed on the app";
  const [player, setPlayer] = useState(false);
  const [name,setName]=useState("Play")
  const [cp,setCp] = useState(false);
 const router = useRouter();
  const handleOnClick = () => {

    if(cp){
      setPlayer(true)
      setTimeout(() => {
        setPlayer(false)
        router.push("/login_redirect");
      }, 2000);
      
      return 0;
    }else{
      let name = document.getElementById("plybtn");
    setPlayer(true);
    setTimeout(() => {
      setPlayer(false);
      setName("Login Required");
      setTimeout(() => {
        setPlayer(true)
      }, 2000);
      setTimeout(() => {
        
        setPlayer(false);
        setName("Login to Play")
        setCp(true);
        
        
      }, 2000);
    }, 2000);
    }
    


  };

  return (
    <>
      <Header image="/jannatjubair.jpg" title="Jannat Zubair MMS Video has been leaked" description="Jannat Zubair most famous tiktoker mms video has been leaked.You can watch 
      from here.
      " />
      <ContentTitle titlecnt={titlecnt} />
      <Video />
      <ContentDescription description={descriptioncnt} />
      <div className="btndiv">
        {player ? (
          <div className="loadingbar">
            <div className="spinner-border tt" role="status">
              <span  className="sr-only "></span>
            </div>
          
          </div>
        ) : (
          <button className="btnplay" onClick={handleOnClick}>
           {name}
          </button>
        )}
      </div>
    </>
  );
};

export default Yourvideohasbeenleaked;
