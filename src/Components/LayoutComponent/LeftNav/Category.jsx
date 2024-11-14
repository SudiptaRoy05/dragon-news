
export default function Category({category}) {
    const {name} = category
  return (
    <div className="p-3">
      <button className="btn w-full">{name}</button>
    </div>
  )
}
