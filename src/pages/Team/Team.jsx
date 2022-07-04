import React, {useState, useEffect} from 'react';
import { RoadmapContent } from '../../text/RoadmapContent';
import Popup from '../../components/Popup/Popup';
import FullRoadmapItem from '../../components/FullRoadmapItem/FullRoadmapItem';
import styles from './Team.module.scss';

function Team() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popupName, setPopupName] = useState('');
    const [popupTitle, setPopupTitle] = useState('');
    const [popupImg, setPopupImg] = useState('');
    const [popupBio, setPopupBio] = useState('');
    const [popupTwitter, setPopupTwitter] = useState('');
    const [number, setNumber] = useState('0');
    
    useEffect(() => {
      setPopupName(RoadmapContent.content[number]['name'])
      setPopupTitle(RoadmapContent.content[number]['title'])
      setPopupBio(RoadmapContent.content[number]['bio'])
      setPopupImg(RoadmapContent.content[number]['imgUrl'])
      setPopupTwitter(RoadmapContent.content[number]['twitter'])
    }, [number, buttonPopup])

  return (
    <div className={styles.page}>
        <div className={styles.width__container}>
            <h3>The Team</h3>
            <div className={styles.team__row}>
                <div className={styles.individual}>
                    <FullRoadmapItem num='0' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber} teamImage={"https://vsprblockchain.s3.amazonaws.com/primate.png"} headshot={"https://vsprblockchain.s3.amazonaws.com/thomas-pic.png"}/>
                    <h4>Thomas Cadle</h4>
                </div>

                <div className={styles.individual}>
                    <FullRoadmapItem num='2' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber} teamImage={"https://vsprblockchain.s3.amazonaws.com/nick-clone.webp"}/>
                    <h4>Nick Poto</h4>
                </div>

                <div className={styles.individual}>
                    <FullRoadmapItem num='3' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber} teamImage={"https://vsprblockchain.s3.amazonaws.com/sean-pfp.webp"}/>
                    <h4>Sean Funke</h4>
                </div>

            </div>
            <div className={styles.team__row}>
                <div className={styles.individual}>
                        <FullRoadmapItem num='1' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber} teamImage={"https://vsprblockchain.s3.amazonaws.com/Royal_Elite_Assassins_House+of+Bllue+(1).jpg"}/>
                        <h4>Jared Nozick</h4>
                </div>

                <div className={styles.individual}>
                    <FullRoadmapItem num='4' buttonPopup={buttonPopup} setButtonPopup={setButtonPopup} setNumber={setNumber} teamImage={"https://vsprblockchain.s3.amazonaws.com/IMG_2028.png"}/>
                    <h4>Josh Hirsch</h4>
                </div>
            </div>

            <div className={styles.popup}>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} name={popupName} title={popupTitle} popupImg={popupImg} bio={popupBio} twitter={popupTwitter}/>
            </div>

        </div>
    </div>
  )
}

export default Team
