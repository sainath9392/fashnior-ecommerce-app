import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import {FaSquarePlus, } from 'react-icons/fa6'
import {MdFactCheck} from "react-icons/md"
import {BiLogOut} from "react-icons/bi"
import {FaListAlt} from 'react-icons/fa'

const Slidebar = () => {
  return (
    <div>
        <div>
            {/* logo */}
            <Link to={'/'}>Fashni<span className=''>o</span>r</Link>
            <div>
                <NavLink>
                    <FaSquarePlus />
                    Add Item
                </NavLink>
                <div>
                    <button>
                        <BiLogOut />
                        <div>Logout</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slidebar