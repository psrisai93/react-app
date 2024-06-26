import { MouseEvent, useState } from "react";
interface Props {
  items: string[];
  heading: string;
  //handler
  onSelectItem: (items: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook - state hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Nothing</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            //dynamic class assignement(This is basic. There are advanced assignment of dynamic classses)
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
