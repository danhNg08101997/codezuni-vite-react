import useRoutesCustom from "./routes/useRoutesCustom";
import {useSelector} from 'react-redux'

function App() {
  const { hoTen } = useSelector( (state) => state )
  console.log(hoTen);
  const routes = useRoutesCustom();
  return routes;
}

export default App;
