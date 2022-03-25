export const CompanyDetails = () => {
    return (
        <div className="company-details">
            <div className="company-details-header">
                <div className="company-details-header-title">
                    <span className="company-details-header-initials">AG</span><span><h2>Alhazmi Group Tower</h2></span>
                </div>
                <div className="company-details-header-action">
                    <button className="outlined">Change Company</button>
                </div>
            </div>
            <div className="company-details-form">
                <div className="company-details-form-values">
                    <div className="company-details-form-values-columns">
                        <div className="company-details-form-values-columns-rows">
                            <h3>Company Address</h3>
                            <p>Imam Saud Bin Abdulaziz Bin</p>
                            <p>Imam Saud Bin Abdulaziz Bin</p>
                            <p>Riyadh 12262 7815</p>
                        </div>
                        <div className="company-details-form-values-columns-rows">
                            <h3>Location</h3>
                            <p>Riyadh, KSA</p>
                        </div>
                    </div>
                    <div className="company-details-form-values-columns">
                        <div className="company-details-form-values-columns-rows">
                            <h3>Contact Information</h3>
                            <p>+971361279981</p>
                            <p>Mobile</p>
                            <p>971361279981</p>
                        </div>
                    </div>
                    <div className="company-details-form-values-columns">
                        <div className="company-details-form-values-columns-rows">
                            <h3>Email</h3>
                            <p>info@alhazmi.com</p>
                        </div>

                        <div className="company-details-form-values-columns-rows">
                            <span><i className="far fa-edit"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}