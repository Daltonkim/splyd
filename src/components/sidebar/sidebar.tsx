import { Link } from "react-router-dom"
import { toAbsoluteUrl } from '../../utils/utils';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { MenuItem } from "../header/menuItem";
import { useSelector, RootStateOrAny } from 'react-redux';
import { Contact } from "../contact/contact";

export const SideBar = () => {

    const { menuConfig: { header: { items }, } } = useSelector((state: RootStateOrAny) => state.builder)

    const perfectScrollbarOptions = {
        wheelSpeed: 2,
        wheelPropagation: false
    }

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <Link to="/">
                    <img alt="" src={toAbsoluteUrl('/images/logo192.png')}></img>
                </Link>
            </div>
            <div className="sidebar-menu">
                <PerfectScrollbar
                    options={perfectScrollbarOptions}
                    className="scroll pr-7 mr-n7"
                    style={{ maxHeight: '85vh', position: 'relative' }}
                >
                    {items.map(menu => (
                        <MenuItem key={menu.page} build={menu}/>
                    ))}
                    <Contact/>
                </PerfectScrollbar>

            </div>

        </div>
    )
}