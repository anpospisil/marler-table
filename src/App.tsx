import './App.css';
import {Table} from './Components/Table'
import sampleData from "./sample_table_data.json";
import { TableProps } from "./types";
function App() {
  return (
   <Table sampleData={sampleData as TableProps[]} />
  );
}

export default App;
 