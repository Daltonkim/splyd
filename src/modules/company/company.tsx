import { CompanyDetails } from "./companydetails/companydetails"
import './company.scss'
import { UserTable } from './table/usertable';
import { ChangePassword } from "../../components/changepassword/changepassword";
export const Company = () => {

    return (

        <div className="company">
            <div className="company-containers">
                <div className="company-containers-wrapper">
                    <CompanyDetails></CompanyDetails>

                </div>
                <div className="company-containers-wrapper">
                    <ChangePassword/>
                </div>
            </div>
            <div className="company-table">
                <UserTable />
            </div>
        </div>
    )

}