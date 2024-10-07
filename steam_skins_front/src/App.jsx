import ChartComponent from './chart-component/chart-component';
import { getSkinsInfo } from './API/API';
import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddSkin from './add-skin/add-skin';

function App() {
  const [steamData, setSteamData] = useState([])
  useEffect(() => {
    (async () => {
      const res = await getSkinsInfo()
      setSteamData(res)
    })()
  }, [])

  const arr = steamData.map(el => {
    return <ChartComponent data={el} />
  })

  return (
    <>
      <AddSkin />
      <div style={{ display: "flex", flexWrap: "wrap" }} >
        {arr}
      </div>
    </>
  );
}

export default App;
