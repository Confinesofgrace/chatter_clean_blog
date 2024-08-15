import './Searchbar.css';
import { BiSearch } from 'react-icons/bi';

function Searchbar () {
    return (
        <div id='search-container'>
           
            <BiSearch size={20} style={{cursor:'pointer',}}/>
            <input id='search-input' placeholder= 'Search'/>
            
        </div>
    )
};

export default Searchbar;
