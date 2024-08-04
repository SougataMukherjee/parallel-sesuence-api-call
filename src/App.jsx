import Parallel from "./Parallel";
import Sequence from "./Sequence";

function App() {
  let flag = true;
  return <>{flag ? <Parallel /> : <Sequence />}</>;
}

export default App;
