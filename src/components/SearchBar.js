import { useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { dataContextCreated } from './contextData/DataContext'

const SearchBar = () => {
  const {search,setSearch} = useContext(dataContextCreated)
  return (
      <div className="flex items-center max-w-[525px] w-[100%] mx-auto my-5 px-3 py-1 border-solid border-2 border-[#D1D5DB] rounded-lg">
        <input
          type="text"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="What do you want to watch?"
          className="flex-1 bg-transparent border-none outline-none"
        />
        <AiOutlineSearch />
      </div>
  )
}

export default SearchBar