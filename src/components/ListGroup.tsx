import { useState } from "react";

interface Props {
  //should be immutable
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// import { MouseEvent } from "react";
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [slectedIndex, setSelectedIndex] = useState(-1);

  // const msg = items.length === 0 ? <p>No items found</p> : null
  // const msg = () => {...}

  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className={"list-group"}>
        {items.map((item, index) => (
          <li
            className={
              slectedIndex === index
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
