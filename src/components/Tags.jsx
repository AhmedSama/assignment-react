
export const Tags = ({tags}) => {
  return (
    <div className="flex align-center gap mb">
        {
            tags.map(tag=>{
                return <div key={tag} className='tag'>{tag}</div>
            })
        }
    </div>
  )
}
