import {FaBroadcastTower, FaDatabase, FaIndustry, FaPython, } from 'react-icons/fa'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'

const BlockMatter = ({icon}: any) => {
  return (
    <>
        <div className='materias'>
            <div className='block'>
                <FaDatabase fill='white' size="55px" />
            </div>
            <div className='block'>
                <FaBroadcastTower fill='white' size="55px" />
            </div>
            <div className='block'>
                <FaIndustry fill='white' size="55px" />
            </div>
            <div className='block'>
                <FaPython fill='white' size="55px" />
            </div>
            <div className='block'>
                <FontAwesomeIcon icon={faAtom} fill='white'/>
            </div>
            
        </div>
        <div className='text-area'>

        </div>
    </>
  )
}

export default BlockMatter
