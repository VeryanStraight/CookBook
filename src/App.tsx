import { useState } from "react";
import Alert from "./components/Alert";
import ExerciseButton from "./components/ExerciseButton";

function App() {
  // let items = ["str1", "str2", "str3", "str4", "str5"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading={"List"}
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
  const [alert, setalert] = useState(true);

  return (
    <div>
      {alert && <Alert onClick={() => setalert(false)}>Hello</Alert>}
      <ExerciseButton
        onClick={() => {
          setalert(true);
        }}
      >
        My Button
      </ExerciseButton>
    </div>
  );
}

export default App;
