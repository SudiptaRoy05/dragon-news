import { useLoaderData, useParams } from "react-router-dom"
import News from "./News";
import { useEffect, useState } from "react";

export default function CategoryNews() {
    const {id} = useParams();
    const data = useLoaderData();
    const [filteredNews, setFilteredNews] = useState([]);  

    useEffect(() => {
        
        const newsForCategory = data.filter((item) => item.category_id === id);
        setFilteredNews(newsForCategory);  
    }, [id, data]);
    
  return (
    <div>
      <h3>Category News</h3>
      <div>
        {
            filteredNews.map(news => <News key={news._id} news={news}></News>)
        }
      </div>
    </div>
  )
}
