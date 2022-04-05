import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';




function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(() => {
      ( async () => {
        const openSeaData = await axios.get(
          'https://testnets-api.opensea.io/api/v1/assets?asset_contract_addresses=0xdd2e4b8B262d2DBEFFBE93A178191E7bd620Cef7&order_direction=asc&offset=0&limit=20'
          )
          console.log(openSeaData.data.assets)
          setPunkListData(openSeaData.data.assets)
        }

      )();
  }, []);

    
     

  return (
    <div className="app">
    <Header />
    {
      <>
      punklistData.length === 0 && (
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
    <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
      )
      </>
    }
    
    
    </div>
  );
}

export default App;
