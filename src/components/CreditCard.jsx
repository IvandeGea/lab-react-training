import imgVisa from "../assets/images/visa.png"
import imgMc from "../assets/images/master-card.svg"


function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

    function checkType(type) {

        if (type === "Visa") {
            return imgVisa

        } else {
            return imgMc
        }
    }

    return (
        <div className="creditCard" style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
            <div>
                <img src={checkType(type)} alt="Card Logo" />
            </div>
            <div>
                <p className="credit-card-number"> **** **** **** {number.substr(-4)} </p>
            </div>
            <div className="credit-card-datos">
                <p>  Expires {expirationMonth}/{expirationYear}           {bank}   </p>
                <p> {owner}</p>
            </div>

        </div>
    )

}
export default CreditCard

