
export default function Category({category}) {
    const {name} = category
  return (
    <div className=" p-1">
      <button className="btn w-full">{name}</button>
    </div>
  )
}
