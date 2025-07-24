import React from "react"

const NavMenu = (props) => {
    return (
        <li className="group">
            <a href={props.href || '#'} className="text-base text-dark py-1 mx-6 flex group-hover:text-primary transition duration-100 ease-in-out">
                {props.text}
            </a>
        </li>
    )
}

export default NavMenu