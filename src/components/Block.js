import React, { useState, useEffect } from 'react'
import { ImCross, ImRadioUnchecked } from 'react-icons/im'

export const Block = (props) => {
    const handleClick = () => {
        if (!props.check.checked && props.winState == 0) {
            props.handleClick(props.id);
        }
    }

    const [myStyle, setMyStyle] = useState({ backgroundColor: "#98B3FF" });

    useEffect(() => {
        if (props.player == 1) {
            setMyStyle({ backgroundColor: "#98B3FF" })
        } else {
            setMyStyle({ backgroundColor: "#FFC0BE" })
        }
    }, [props.player])

    useEffect(() => {
        if (props.check.selected) {
            setMyStyle({ backgroundColor: "white" })
        }
    }, [props.check.selected])
    return (
        <div className='text-center m-auto h-full w-full p-12 outline outline-black outline-4' style={myStyle} onClick={() => handleClick()}>{
            props.check.checked ?
                (props.check.player == 1 ? <ImCross className='text-5xl text-center m-auto' /> : <ImRadioUnchecked className='text-5xl text-center m-auto' />)
                : " "
        }</div>
    )
}

export default Block;