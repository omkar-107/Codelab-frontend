import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Copy(props) {

    const [clicked, changeClicked] = useState("no");
    if (clicked === 'no') {
        return (
            <button className='border-3 border-black p-1 bg-white rounded-md absolute top-4 right-2 mr-3' onClick={async () => { navigator.clipboard.writeText(props.code); changeClicked('yes'); setTimeout(() => { changeClicked('no') }, 2000) }}>
                <FontAwesomeIcon icon={faCopy} size='2xl' style={{ color: "#1f3050", }} />
            </button>);
    }
    else {
        return (
            <button className='border-3 border-black p-1 bg-white rounded-md absolute top-4 right-2 mr-3'>
                <FontAwesomeIcon icon={faCircleCheck} size='2xl' style={{ color: "#4ecf17", }} />
            </button>
        );
    }
}

export default Copy