import './PeopleCard.css';
const PeopleCard = (props) => {
    return (
    <div className="peoplecard">
     {props.result.name}
     
    </div>
    )
}
export default PeopleCard;