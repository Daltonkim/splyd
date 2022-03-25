export const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">Invite <span>new supplier</span></div>
            <div className="contact-inputs">
                <input placeholder="Contact Name"></input>
                <input placeholder="Contact Number"></input>
                <div className="contact-submit">
                    <div className="contact-submit-input">
                        <input placeholder="Email"></input>
                    </div>
                    <div className="contact-submit-button">
                        <button>Invite</button>
                    </div>
                </div>
            </div>
        </div>
    );

}