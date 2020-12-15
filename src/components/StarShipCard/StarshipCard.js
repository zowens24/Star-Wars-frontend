import './StarshipCard.css';
const StarshipCard = (props) => {
    return (
    <div className="starshipcard">
        
     {props.result.name}
     
    </div>
    )
}
export default StarshipCard;