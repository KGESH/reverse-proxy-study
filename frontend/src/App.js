import {fetchData} from "./fetch-data";

function App() {
  const handleFetch = async () => {
    console.log(`Start Fetch`);

    const result = await fetchData();

    console.log(`End Fetch, Result = `, result);
  }

  return (
    <div className="App">

      <button onClick={()=>{
        handleFetch();
      }}>Fetch-Data</button>

    </div>
  );
}

export default App;
