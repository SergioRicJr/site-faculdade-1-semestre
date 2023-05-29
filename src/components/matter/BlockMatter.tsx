import {FaBroadcastTower, FaDatabase, FaIndustry, FaPython, } from 'react-icons/fa'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom} from '@fortawesome/free-solid-svg-icons'

const BlockMatter = ({title, iconn, handleFunc, isSelected}: any) => {
    
    return (
        <div className='block' onClick={handleFunc} style={{
            backgroundColor: isSelected? '#265eb1' : '#3586ff'
        }}>
            <FontAwesomeIcon icon={iconn} inverse size='3x'/>
            <b>{title}</b>
        </div>
    )
}

export default BlockMatter

{/* <>
            <div className='block' onClick={handleDb}>
                <FontAwesomeIcon icon={faDatabase} inverse size='3x'/>
                <b>Banco de dados</b>
            </div>
            <div className='block' onClick={handleRedes}>
                <FontAwesomeIcon icon={faNetworkWired} inverse size='3x' />
                <b>Redes de computadores</b>
            </div>
            <div className='block' onClick={handleAut}>
                <FontAwesomeIcon icon={faIndustry} inverse size='3x' />
                <b>Automação indústrial</b>
            </div>
            <div className='block' onClick={handleLing}>
                <FontAwesomeIcon icon={faLaptopCode} inverse size='3x'/>
                <b>Linguagem de programação</b>
            </div>
            <div className='block' onClick={handleCienciaDados}>
                <FontAwesomeIcon icon={faAtom} inverse  size="3x"/>
                <b>Ciência de dados</b>
            </div>
        </> */}
