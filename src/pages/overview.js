import React,{useState, useEffect} from 'react'
import styles from '@/styles/overview.module.css'
import OverviewScore from '@/components/OverviewScore';
import { useRouter } from 'next/router';

const Overview =()=>{
    const router = useRouter();
    const scoreIndex = Object.values(router.query);
    const indices = []
    const scores = []
    for(var i=0;i<scoreIndex.length;i++){
        indices.push(scoreIndex[i][0])
        scores.push(scoreIndex[i][1])
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
            <div className={styles.overviewContainer}>
                <h1>Overview</h1>
                    {data && scoreIndex.map((item)=>
                        <OverviewScore data={data[item[0]]} score={item[1]}/>)}
            </div>
        </>
        
    );
};

export default Overview;
