import { useEffect, useState } from "react"
import Category from "./Category";

export default function LeftNav() {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[]);

  return (
    <div>
      <h3 className="font-semibold">All Category</h3>
      <div className="grid pt-3">
        {
            categories.map(category => <Category key={category.id} category={category}></Category>)
        }
      </div>
    </div>
  )
}
