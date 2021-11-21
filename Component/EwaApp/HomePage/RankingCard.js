import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const star = <FontAwesomeIcon className="fa-star" icon={faStar} />



const RankingCard = () => {
    return (

     <div className="ranking_container">
        <div className=  "ewa_ranking">
            <h3> Ewa Ranking</h3>
            <p>Your Present Ewa Ranking</p>
            <div>Agba Ewa</div>
            {star}{star}{star}{star}
            </div>
            <div className="ewa_point_score">
                <p>Ewa Points</p>
                <div className="score">10</div>
                <p>Beans</p>
            </div>
        </div>
        

    );



};

export default RankingCard;