import React, {useState, useEffect} from 'react';

const Data = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch('/data.json');
        const json = await res.json();
        setData(json);
      }
      getData();
    }, []);

    return data;
};

export default Data;