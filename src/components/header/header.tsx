import { Dropdown } from '../notifications/notifications';
export const Header = () => {
    return (
        <div className="header">
            <div className="header-name">
                <h1>Hello Soltan</h1>
                <p>Welcome back!</p>
            </div>

            <div className="header-quicklinks">
                <Dropdown icon='far fa-question-circle' />
                <Dropdown icon='far fa-bell' />
                <Dropdown icon='fas fa-cog' />
                <Dropdown icon='far fa-user' />
            </div>
        </div>
    )
}
