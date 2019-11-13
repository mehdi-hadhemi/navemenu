import React from 'react';
import SubMenu from './submenu'

const  Navbar=(props)=>{
    return(
        
            <li className='main'>
                <a className={props.item.active ? "active" : undefined}
        href={props.item.link}
      >
            {props.item.text} 
            </a>
            {props.item.text === "Services" && <SubMenu list={props.item.list} />}
       
        </li>
    )
}

export default Navbar