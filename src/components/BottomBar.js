import React, { useEffect, useState } from 'react'

export const BottomBar = (props) => {
  const [display, setDisplay] = useState(<h1>It's {props.player}'s Turn</h1>);

  useEffect(() => {
    setDisplay(<h1 className='font-bold text-xl'>Player {props.player}: Place Your Mark</h1>);
  }, [props.player]);

  useEffect(() => {
    if (props.winState == 1) {
      setDisplay(
        <div>
          <h1 className='font-extrabold text-xl'>Player {props.player} Won!</h1>
          <button onClick={() => props.restart()} className="bg-black text-xl p-2 m-4 w-36 rounded-full font-bold text-white">New Game</button>
        </div>
      )
    } else if (props.winState == 2) {
      setDisplay(
        <div>
          <h1 className='font-extrabold text-xl'>You've Tied!</h1>
          <button onClick={() => props.restart()} className="bg-black text-xl p-2 m-4 w-36 rounded-full font-bold text-white">New Game</button>
        </div>
      )
    } else {
      setDisplay(<h1 className='font-bold text-xl'>Player {props.player}: Place Your Mark</h1>);
    }
  }, [props.winState])

  return (
    <div className='m-auto text-center h-28 mt-8 text-black'>
      {display}
    </div>
  )
}

export default BottomBar;
