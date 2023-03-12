import React, { useEffect } from "react";
import axios from "axios";

import NavBar from "../../components/NavBar/index";

import { HeaderNav } from "./styles";
import Spacer from "../../components/Spacer";

function Header() {



  // useEffect(() => {
  //   // var axios = require('axios');

  //   var config = {
  //     method: 'get',
  //     url: 'https://v3.football.api-sports.io/',

  //     // url: 'https://api.themoviedb.org/3/movie/550?api_key=174ed195a79c743ab1f6a0d2ecd1bb74'
  //     headers: {
  //       'x-rapidapi-key': 'e16d8df00cmshe65acfa6a8c60f1p196814jsn314c49343fdb',
  //       // 'x-rapidapi-host': 'v3.football.api-sports.io'
  //     }
  //   };

  //   axios(config)
  //     .then(function (response: { data: any; }) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error: any) {
  //       console.log(error);
  //     });
  // }, [])

  return (
    <>
      <HeaderNav>
        <NavBar />
      </HeaderNav>
      <Spacer height={1} />
    </>
  );
};

export default Header;
