export const ChangePassword = () => {
    return (
        <div className="changepassword">
            <div className="changepassword-title">Change Password</div>
            <div className="changepassword-inputs">
                <input placeholder="Current Password"></input>
                <input placeholder="New Password"></input>
                <input placeholder="Confirm Password"></input>
                <div className="changepassword-submit">
                    <div className="changepassword-submit-input">
                        <button className="outlined" >Save Changes</button>
                    </div>
                    <div className="changepassword-submit-button">
                        <button className="greyscale">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );

}