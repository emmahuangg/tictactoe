import logo from './logo.svg';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import { useState, useEffect } from 'react';
import React from 'react';
import Block from './components/Block';

function App() {
  const [roundNum, setRoundNum] = useState(1);
  const [score, setScore] = useState([0, 0]);
  const [checks, setChecks] = useState(
    Array(9).fill({ player: 1, checked: false, selected: false })
  );
  const [player, setPlayer] = useState(1);
  const [winState, setWinState] = useState(0);
  const handleClick = (id) => {
    // console.log("Player " + player + " clicked " + id);
    setChecks((checks) => checks.map((check, idx) => (idx == id ? { ...check, player: player, checked: true } : check)));
  }
  const [myStyle, setMyStyle] = useState({ backgroundColor: "#477890" });

  const checkWin = () => {
    // 1. Check rows & cols
    for (var i = 0; i < 3; i++) {
      if ((checks[i * 3 + 0].checked && checks[i * 3 + 1].checked && checks[i * 3 + 2].checked)
        && (checks[i * 3 + 0].player == checks[i * 3 + 1].player && checks[i * 3 + 1].player == checks[i * 3 + 2].player)
      ) {
        checks[i * 3 + 0].selected = true;
        checks[i * 3 + 1].selected = true;
        checks[i * 3 + 2].selected = true;
        return 1;
      }
      if ((checks[i].checked && checks[i + 3].checked && checks[i + 6].checked)
        && (checks[i].player == checks[i + 3].player && checks[i + 3].player == checks[i + 6].player)) {
        checks[i].selected = true;
        checks[i + 3].selected = true;
        checks[i + 6].selected = true;
        return 1;
      }
    }
    // 2. Check diagonals
    if ((checks[0].checked && checks[4].checked && checks[8].checked)
      && (checks[0].player == checks[4].player && checks[4].player == checks[8].player)) {
      checks[0].selected = true;
      checks[4].selected = true;
      checks[8].selected = true;
      return 1;
    }
    if ((checks[2].checked && checks[4].checked && checks[6].checked)
      && (checks[2].player == checks[4].player && checks[4].player == checks[6].player)) {
      checks[2].selected = true;
      checks[4].selected = true;
      checks[6].selected = true;
      return 1;
    }
    // 3. Check if board is full
    for (var i = 0; i < 9; i++) {
      if (!checks[i].checked) {
        return 0;
      }
    }
    return 2;
  }
  useEffect(() => {
    var winsOrNot = checkWin();
    setWinState(winsOrNot);
    if (winsOrNot == 0) {
      setPlayer((player) => player == 1 ? 2 : 1);
    } else if (winsOrNot == 1) {
      if (player == 1) {
        setScore((score) => [score[0] + 1, score[1]])
        setMyStyle({ backgroundColor: "#6863FF" })
      } else {
        setScore((score) => [score[0], score[1] + 1])
        setMyStyle({ backgroundColor: "#FF82A9" })
      }
    }
  }, [checks]);

  useEffect(() => {
    if (player == 1) {
      setMyStyle({ backgroundColor: "#6863FF" })
    } else {
      setMyStyle({ backgroundColor: "#FF82A9" })
    }
  }, [player]);

  const restart = () => {
    // console.log("New game");
    setRoundNum((roundNum) => roundNum + 1);
    setChecks(Array(9).fill({ player: 1, checked: false, selected: false }))
    setPlayer(roundNum % 2 ? 2 : 1)
  }

  const intArr = Array.from(Array(9).keys());
  return (
    <div className="w-screen" style={myStyle}>
      <TopBar player={player} round={roundNum} score={score} winState={winState} />
      <div className='grid grid-cols-3 grid-rows-3 text-center w-600 mx-auto h-600 rounded-3xl overflow-hidden outline outline-4 outline-black'>
        {
          intArr.map((elem, idx) => {
            return <Block key={idx} id={idx} check={checks[idx]} className="col-span-1" handleClick={handleClick} player={player} winState={winState} />
          })
        }
      </div>
      <BottomBar restart={restart} winState={winState} player={player} />
    </div>
  );
}

export default App;
