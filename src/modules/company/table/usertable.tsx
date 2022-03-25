import { Table } from "react-bootstrap"
import './usertable.scss'

const userItems = [{
    username: 'Soltan Al-Abed',
    user_id: 'sabed@alhazmi.com',
    role: 'Administrator',
    actions: ''

},
{
    username: 'Soltan Al-Abed',
    user_id: 'sabed@alhazmi.com',
    role: 'Administrator',
    actions: ''

},
{
    username: 'Soltan Al-Abed',
    user_id: 'sabed@alhazmi.com',
    role: 'Administrator',
    actions: ''

}]

export const UserTable = () => {
    return (
        <div className="usertable">
            <div className="usertable-header">
                <h2>User Management</h2>
                <div className="usertable-actions">
                    <button>Add User</button>
                </div>
            </div>
            <Table responsive striped hover>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User ID</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userItems.map((it, i) => (
                        <tr key={i}>
                            <td>{it.username}</td>
                            <td>{it.user_id}</td>
                            <td>{it.role}</td>
                            <td className="usertable-actions-buttons"><span><i className="far fa-trash-alt"></i></span><span><i className="far fa-edit"></i></span><span><i className="fas fa-ellipsis-v"></i></span></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

    )
}