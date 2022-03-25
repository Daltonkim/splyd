import { toAbsoluteUrl } from "../../components"

export const Bank = () => {
    return (
    <div className="bank">
        <div className="bank-wrapper">
            <div className="bank-wrapper-header">
                <div className="bank-wrapper-header-title">
                    <span><img src={toAbsoluteUrl('/images/snd.png')} alt=""/><i className="fas fa-check-circle"></i></span>
                    <h2>Saudi National Bank</h2>
                </div>
                <button className="outlined">Change Bank</button>
            </div>
            <div className="bank-wrapper-number">
                <p>IBAN Number</p>
                <p>SA04 1000 0022 1823 6713 8917</p>
            </div>
            <div className="bank-wrapper-viza">
            <div className="bank-wrapper-number">
                <p>Company Name</p>
                <p>Alhazmi Group Tower</p>
            </div>
            <img alt="" src={toAbsoluteUrl('/images/logo-visa-grey.png')}/>
            
            </div>
           
        </div>
        <button className="outlined bank-wrapper-button"><i className="fas fa-plus" aria-hidden="true"></i>New Bank</button>

    </div>)
}