import './Posts.scss';
import {faComments, faEye, faStar, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import Statistic from "@components/cards/statistic/Statistic.jsx";

function Posts(props){
    return (
        <>
            <section className="posts">
                <div className="posts__cards">
                    {
                        props.cardData.map((card,index)=>
                            <Statistic key={index} cardData={card} />)
                    }
                </div>
                <div className="posts__metrics">

                </div>

            </section>
        </>
    );
}

Posts.defaultProps={
    cardData: [
        {
            title:'Visitantes',
            icon:faUserGroup,
            porcentaje:9,
            delta:-22,
            amount: 227,
        },
        {
            title:'Vistas',
            icon: faEye,
            porcentaje: 10,
            delta: -35,
            amount:300
        },
        {
            title:'Me gusta',
            icon:faStar,
            porcentaje: 0,
            delta: 0,
            amount:0
        },
        {
            title:'Comentarios',
            icon:faComments,
            porcentaje: 0,
            delta: 0,
            amount: 0
        }
    ]
}
export default Posts
