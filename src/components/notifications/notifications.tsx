import './notifications.scss'
import { useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const Dropdown = ({ icon }) => {


    const { menuConfig: { header: { items }, aside: { items: asideitem } } } = useSelector((state: RootStateOrAny) => state.builder)

    const [isOpen, setisOpen] = useState(false)


    const toggleOpen = () => setisOpen(!isOpen);


    return (
        <div className="dropdown" onClick={toggleOpen}>
            <div
                className="dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
            >
                <i className={icon}></i>
            </div>
            <div className="dropdwon-wrapper" style={{ display: `${isOpen ? 'flex' : 'none'}` }} aria-labelledby="dropdownMenuButton">
                {items.map(menu => (
                    <Link key={menu.page} className="dropdown-item" to={`/${menu.page}`}>
                        {menu.title}
                    </Link>
                ))}

            </div>
        </div>
    );
}

