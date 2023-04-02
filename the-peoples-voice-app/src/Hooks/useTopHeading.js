import axios from "axios";
import { useEffect, useState } from "react";

export const useTopHeading =()=>{

    const [topHeading, setTopHeading] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3001/topHeading").then((data) => {
        const news = data.data;
        setTopHeading(news);
      });
    }, []);

    return [topHeading, setTopHeading];

}