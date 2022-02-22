import React from "react";

const Dashboard = (props) => {
  const { info } = props;

  const colorRatings = (num) => {
    const ratingsArr = [];
    for (let i = 0; i < 5; i++) {
      if (num > 0) {
        ratingsArr.push(<div className="brown-bg" key={i} />);
      } else {
        ratingsArr.push(<div className="no-bg" key={i} />);
      }
      --num;
    }
    return ratingsArr;
  };

  return (
    <div className="info">
      <p>
        <span>Temperament: </span>
        {info.temperament}
      </p>
      <p>
        <span>Origin: </span>
        {info.origin}
      </p>
      <p>
        <span>Life Span: </span>
        {info.life_span + " years"}
      </p>

      <br />

      <div className="rating">
        <span className="stat"> </span>
        <div className="rating-container" style={{fontSize:"0.75rem"}}>
          Not Great {"<"}----{">"} Amazing
        </div>
      </div>

      <div className="rating">
        <span className="stat">Adaptability: </span>
        <div className="rating-container">
          {colorRatings(info.adaptability)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Affection level: </span>
        <div className="rating-container">
          {colorRatings(info.affection_level)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Child friendly: </span>
        <div className="rating-container">
          {colorRatings(info.child_friendly)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Grooming: </span>
        <div className="rating-container">{colorRatings(info.grooming)}</div>
      </div>

      <div className="rating">
        <span className="stat">Health issues: </span>
        <div className="rating-container">
          {colorRatings(info.health_issues)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Intelligence: </span>
        <div className="rating-container">
          {colorRatings(info.intelligence)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Social needs: </span>
        <div className="rating-container">
          {colorRatings(info.social_needs)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Shedding level: </span>
        <div className="rating-container">
          {colorRatings(info.shedding_level)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Stranger friendly: </span>
        <div className="rating-container">
          {colorRatings(info.stranger_friendly)}
        </div>
      </div>
      
      <div className="rating">
        <span className="stat"> </span>
        <div className="rating-container" style={{fontSize:"0.75rem"}}>
          Not Great {"<"}----{">"} Amazing
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
