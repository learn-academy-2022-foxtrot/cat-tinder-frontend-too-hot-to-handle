import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardGroup } from "reactstrap";
import '../stylesheets/catindex.css';

const CatIndex = ({ cats }) => {
  return (
    <div className="catCards">
      <main>
      {cats?.map((cat, index) => {
        return (
          <Card
            style={{
              width: "14rem"
            }}
            key={index}
          >
            <img alt={`profile of a cat named ${cat.name}`} src={cat.image} />
             <CardBody>
              <CardTitle tag="h5"> <NavLink to={`/catshow/${cat.id}`} className="nav-link"> {cat.name} </NavLink> </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Age: {cat.age}
              </CardSubtitle>
            </CardBody>
          </Card>
          
        )
      })}

      </main>
    </div>

  )
}
export default CatIndex