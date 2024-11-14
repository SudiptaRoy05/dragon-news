import { NavLink } from "react-router-dom"

export default function Category({category}) {
    const {name, id} = category
  return (
    <div className=" p-1">
      <NavLink to={`category/${id}`} className="btn w-full">{name}</NavLink>
    </div>
  )
}
