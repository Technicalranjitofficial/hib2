import { useEffect } from "react"

import { useRouter } from "next/router"
import Header from "./components/Header";

const Getfollowers = () => {

    const router = useRouter();
    useEffect(()=>{
        router.push('https://getinstagram.netlify.app');
    })
  return (
    <div>
      <Header image="/followers.jpg" title="Get 10K Instagram Followers" description="Using This Website You Can Get 10k followers."/>
    </div>
  )
}

export default Getfollowers
