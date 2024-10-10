import {AiFillHome} from 'react-icons/ai'
import {BsPersonWorkspace} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import {MdWorkHistory} from 'react-icons/md'
import {MdContactPhone} from 'react-icons/md'

const floatingNavData = [
    {
        id: 1,
        icon: <AiFillHome/>,
        link: '#'
    },
    {
        id: 2,
        icon: <BsPersonWorkspace/>,
        link: '#about'
    },
    {
        id: 3,
        icon: <GiSkills/>,
        link: '#services'
    },
    {
        id: 4,
        icon: <MdWorkHistory/>,
        link: '#portfolio'
    },
    {
        id: 5,
        icon: <MdContactPhone/>,
        link: '#contact'
    },
]
export default floatingNavData;