import { Link, useLocation } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { useState, useEffect } from 'react';

export const MenuItem = injectIntl((props: any) => {


    const location = useLocation();


    const [active, setActive] = useState(false)

    const { build: { title, page, icon }, } = props

    useEffect(() => {
        const url = location.pathname.split('/')[1];
        if(url === page){
            setActive(true)
        }else{
            setActive(false)
        }
    }, [location, page])

    return (
        <Link to={page}>
            <div className={`sidebar-menu-item ${active ? 'sidebar-item-active' : ''} `}>
                <div className="sidebar-menu-item-logo">
                    <i className={icon}></i>
                </div>
                <div className="sidebar-menu-item-link">
                    {title}
                </div>
            </div>
        </Link>
    )
})