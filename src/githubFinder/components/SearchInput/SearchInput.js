import React from "react";
import "./SearchInput.css";

const SearchInput = ({setSearch, confirmSearch}) => {
	return (
		<div id="search">
		<input type="search"
		placeholder="Search Github User"
		onChange={setSearch}
		//onKeyPress={confirmSearch}
		onKeyPress={setSearch}
		/>
		</div>
	)
}

export default SearchInput;


//-------------//

// import React from "react";

// const SearchInput = () => {
// 	return (
		
// 	)
// }

// export default SearchInput;