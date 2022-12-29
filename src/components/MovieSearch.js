const MovieSearch = (props) => {

    const searchValue=props.searchValue;
    const setSearchValue=props.setSearchValue;

    return (
        <div className="search-box">
            <input 
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(event)=> setSearchValue(event.target.value)}>
            </input>
        </div>
    );
}
 
export default MovieSearch;