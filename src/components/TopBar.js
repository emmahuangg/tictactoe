import React, { useEffect } from 'react'
import { useState } from 'react';

export const TopBar = (props) => {
  const [style1, setStyle1] = useState({ outlineColor: "#98b3ff" });
  const [style2, setStyle2] = useState({ outlineColor: "black" });

  const [scoreStyle1, setScoreStyle1] = useState({ textDecoration: "none" });
  const [scoreStyle2, setScoreStyle2] = useState({ textDecoration: "none" });
  
  useEffect(() => {
    if (props.player == 1) {
      setStyle1({ outlineColor: "#98b3ff"}); 
      setStyle2({ outlineColor: "black" }); 
    } else {
      setStyle2({ outlineColor: "#FFC0BE" });
      setStyle1({ outlineColor: "black" }); 
    }
  }, [props.player])

  useEffect(() => {
    if (props.score[0] == props.score[1]) {
      setScoreStyle1({ textDecoration: "none" });
      setScoreStyle2({ textDecoration: "none" });
    } else if (props.score[0] > props.score[1]) {
      setScoreStyle1({ textDecoration: "underline" });
      setScoreStyle2({ textDecoration: "none" });
    } else {
      setScoreStyle1({ textDecoration: "none" });
      setScoreStyle2({ textDecoration: "underline" });
    }
  }, [props.score])

  return (
    <div>
      <div className="text-center text-5xl font-extrabold text-black pt-8">Tic Tac Toe</div>
      <div className="text-center text-2xl font-extrabold text-black">ROUND {props.round}</div>

      <div className="flex justify-center mx-auto my-4 bg-black w-fit rounded-full">
      <div className="text-center text-2xl font-extrabold w-40 inline text-blue outline outline-4 outline-black rounded-full p-2 m-2" style={style1}>Player 1</div>
        <div className="text-center text-2xl font-extrabold w-40 inline text-pink outline outline-4 outline-pink rounded-full p-2 m-2" style={style2}>Player 2</div>
      </div>

      <div className="flex justify-center mx-auto my-4 text-black">
        <div className="text-center text-2xl font-extrabold w-40 inline" style={scoreStyle1}>{props.score[0]}</div>
        <div className="text-center text-2xl font-extrabold inline">:</div>
        <div className="text-center text-2xl font-extrabold w-40 inline" style={scoreStyle2}>{props.score[1]}</div>
      </div>

    </div>
  )
}

export default TopBar;