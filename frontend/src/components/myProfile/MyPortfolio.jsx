import Menu from './Menu.jsx';
import Display from './Display.jsx';
import {useState, useEffect} from 'react';
import { db } from '../firebase-config.jsx';
import {collection, getDocs} from 'firebase/firestore';

const MyPortfolio = () =>{

    const dbCollection = collection(db, "FinCourses");
    const [displayWindow, setDisplay] = useState(true);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async ()=>{
            const data = await getDocs(dbCollection);
            setCourses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getCourses();
    }, [])
    
    return(
        <div style = {MyPortfolioStyle}>
            <div className='pin' style = {LeftPanelStyle} >
                <Menu 
                //displayWindow = {displayWindow} 
                //setDisplay = {setDisplay}
                />
            </div>
            <div style = {RightPanelStyle}>
                <Display courses = {courses}/>
            </div>
        </div>
    )
}

const MyPortfolioStyle = {
    display: 'flex',
    flexDirection: 'row', 
    background: 'gray', 
    height: '100vh'

}

const LeftPanelStyle = {
    //flex: 1,
    display: 'flex',
    background: 'gray',
    height: '100vh',
    //position: 'fixed'
}

const RightPanelStyle = {
    //flex: 3,
    height: '100vh',
    background: 'white',
    overflowY: 'scroll'
}
export default MyPortfolio;