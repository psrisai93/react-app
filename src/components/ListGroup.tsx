import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  as;
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Nothing</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
