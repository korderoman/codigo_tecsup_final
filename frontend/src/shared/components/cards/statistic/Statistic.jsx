import './Statistic.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";

function Statistic({cardData}){
    return (
        <>
            <div className="card mx-2 my-2" style={{width: "15rem"}}>
                    <div className="card-header">
                        <span><FontAwesomeIcon icon={cardData.icon}/></span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{cardData.title}</h5>
                        <div>
                            <p className="card-text">{cardData.amount}</p>
                            <div>
                                <span className={cardData.delta<=0?'text-danger':'text-success'}>{cardData.delta<=0? <FontAwesomeIcon icon={faArrowDown}/>: <FontAwesomeIcon icon={faArrowUp}/>}{cardData.delta} </span>
                                <span>({cardData.porcentaje}%)</span>
                            </div>
                        </div>

                    </div>
            </div>
        </>
    );
}

export default Statistic;
