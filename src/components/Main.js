import React, {useState, useEffect} from 'react'
import twitterLogo from '../assets/owner/twitter.png'
import instagramLogo from '../assets/owner/instagram.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'



const Main = ({ selectedPunk, punkListData}) => {
    const[activePunk, setActivePunk] = useState(punkListData[0])
    useEffect(() => {
    setActivePunk(punkListData[selectedPunk])
    },[punkListData,selectedPunk]);


  return (
    <div className='main'>
        <div className='main-content'>
            <div className='punkHighlight'>
                <div className='punkHighlightContainer'>
                    <img className='selectedPunk' src={activePunk.image_url} alt='activePunk'/>

                    </div>
            

            <div className='punkDetails' style={{color: '#fff'}}>
                <div className='title'>
                 king Punk
                    </div>    
                    <span className='itemNumber'>.#3</span>            
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={'https://ipfs.thirdweb.com/ipfs/QmXt9PsvwBQvs4kHbbM1Gt3aPcZTrFfQNcY6eRWVW6d3aH/0.jpg'} alt='ownerImage'/>
                    </div>
                    <div className='ownerNameAndHandle'>
                            <div>0xdd2e4b8B262d2DBEFFBE93A178191E7bd620Cef7</div>
                            <div className='ownerHandle'>@Shashi_Mishra</div>
                   </div>
                   </div>
                    <div className='ownerDetails'>
                        
                            <div className='ownerLink'>
                                <img src={instagramLogo} alt='instagramLogo'/>
                            </div>
                            <div className='ownerLink'>
                                <img src={twitterLogo} alt='twitterLogo'/>
                            </div>
                            <div className='ownerLink'>
                                <img src={moreIcon} alt='moreicon'/>
                            </div>
                            </div>
                        
                    
            </div>
        </div>
        </div>
  )
}

export default Main