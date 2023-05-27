import {useState} from 'react'
import './index.css'

const Waves = () => {
    const [positionWave1, setPositionWave1] = useState(400)
    const [positionWave2, setPositionWave2] = useState(300)
    const [positionWave3, setPositionWave3] = useState(200)
    const [positionWave4, setPositionWave4] = useState(100)
    
    window.addEventListener('scroll', ()=> {
        setPositionWave1(400 + window.scrollY * 4)
        setPositionWave2(300 + window.scrollY * -4)
        setPositionWave3(200 + window.scrollY * 2)
        setPositionWave4(100 + window.scrollY * -2)
    })

    return (
        <section>
            <div id='wave1' style={{backgroundPositionX: (positionWave1 + "px")}} className="wave"></div>
            <div id='wave2' style={{backgroundPositionX: (positionWave2 + "px")}} className="wave"></div>
            <div id='wave3' style={{backgroundPositionX: (positionWave3 + "px")}} className="wave"></div>
            <div id='wave4' style={{backgroundPositionX: (positionWave4 + "px")}} className="wave"></div>
        </section>
    )
}

export default Waves
