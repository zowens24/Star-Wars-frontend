import {useEffect, useState} from 'react';
import {getStarShips} from '../services/api';
import StarshipCard from '../components/StarShipCard/StarshipCard';
import {getPeople} from '../services/api';
import PeopleCard from '../components/PeopleCard/PeopleCard';
import './DashboardPage.css';
const DashboardPage = (props) => {

    const [starShipData, setStarShipData] = useState({
        count: 0,
        next: null,
        previous: null,
        results: []
      })
      async function getAppData() {
        const StarShipData = await getStarShips();
        setStarShipData(StarShipData);
        const peopleData = await getPeople();
        setPeopleData(peopleData);
      }
      
      useEffect(() => {
        getAppData();
      }, []);
      
const [peopleData, setPeopleData] = useState({
    count: 0,
    next: null,
    previous: null,
    results: []
})

    return (
        
        <main className="Page"><div className="dashboard">
            <div>
            <h1>Starships:</h1>
            {starShipData.results.map((result,idx)=> 
       
      <StarshipCard 
        key={idx} 
        result={result}
      />)}</div> 
      <div>
      <h1>Star Wars Characters:</h1>
      {peopleData.results.map((result,idx)=> 
       
      <PeopleCard 
        key={idx} 
        result={result}
      />)}</div>
       </div> </main>
    )
}
export default DashboardPage;