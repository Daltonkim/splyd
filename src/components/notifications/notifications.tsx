import './notifications.scss'
import {useState} from 'react';
export const Dropdown = ({icon}) => {
 
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
                <div className="dropdwon-wrapper" style={{ display: `${isOpen ? 'block' : 'none'}` }} aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#nogo">
                        Item 1
                    </a>
                </div>
            </div>
        );
}

