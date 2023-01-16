import React from "react";
import { useLocation } from "react-router-dom";
import Place from './components/Place';
import { pdummy } from './PlaceDummy';

export default function Home() {

  const location = useLocation();
  console.log("where", location.state.where);
  console.log("count", location.state.count);

  return(
    <div>
      <div className="select-container">
                
        {
          pdummy.place.map((item) => {
            return(
              <Place
              title={item.title}
              backImg={item.backImg}
              where={location.state.where}
              count={location.state.count}
              />
            )
          })
        }


      </div>
    </div>
  )
}