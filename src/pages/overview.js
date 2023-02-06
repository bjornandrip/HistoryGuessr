import React,{useState, useEffect} from 'react'
import Link from 'next/link';
import styles from '@/styles/overview.module.css'
import OverviewScore from '@/components/OverviewScore';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';

const Overview =()=>{
    const router = useRouter();
    const scoreIndex = Object.values(router.query);
    const indices = []
    const scores = []
    var totalScore = 0;
    for(var i=0; i<scoreIndex.length; i++){
        indices.push(scoreIndex[i][0])
        scores.push(scoreIndex[i][1])
        totalScore += parseInt(scores[i]);
    }
    const [data, setData] = useState(null)
    console.log(scoreIndex)

    useEffect(() => {
        async function getData() {
          const res = await fetch('/data.json');
          const json = await res.json();
          setData(json.ImageTesting);
        }
        getData();
      }, []);


    return(
        <>
            <Navbar/>
            <div className={styles.overviewContainer}>
                <h1>Overview</h1>
                <h2>Your total score: {totalScore}/5000</h2>
                <div className={styles.scoresContainer}>
                    {data && scoreIndex.map((item)=>
                        <OverviewScore data={data[item[0]]} score={item[1]}/>)}
                </div>
            </div>
        </>
        
    );
};

export default Overview;
