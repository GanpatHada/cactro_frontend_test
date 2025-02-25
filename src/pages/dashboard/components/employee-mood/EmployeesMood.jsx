import React from "react";
import "./EmployeesMood.css";
import employees from "../../../../data/employees-mood.json";

const EmployeeCard = ({
  employee: { employeeName, profileImage, position, mood },
}) => {

  const getSymbolPosition=(meaning)=>{
      switch(meaning)
      {
        case "SAD":return 25;
        case "ANGRY":return 0;
        case "NORMAL":return 50;
        case "HAPPY":return 75;
        case "LAUGHING":return 90;
        default :return 0
      }
  }

  return <div className="employee-card">
         <section className="employee-image-section">
            <img src={profileImage} alt="" />
         </section>
         <section className="employee-info-section">
             <h3>{employeeName}</h3>
             <p>{position}</p>
         </section>
         <section className="employee-mood-section">
              <div className="employee-mood-status">
                   <span className='all-centered mood-symbol' style={{left:`${getSymbolPosition(mood.meaning)}%`}}>
                    {mood.emoji}
                   </span>
              </div>
         </section>
  </div>;
};

const EmployeesMood = () => {
  return (
    <aside id="team-mood">
      {employees.map((employee, index) => {
        return <EmployeeCard key={index} employee={employee} />;
      })}
    </aside>
  );
};

export default EmployeesMood;
