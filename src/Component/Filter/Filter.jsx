import { useEffect} from 'react';
import { hotels } from '../../hotels';
import { MdFilterList } from "react-icons/md";
import { Usedata } from '../../Context/ContextComponent';
import { FaStar } from "react-icons/fa";
import './Filter.css'

const Filter = () => {
const {filters, setFilters, setFilteredHotels,showFilter,setShowFilter}=Usedata()
      
      let filterOptions = {
        rate: [1,2,3,4,5],
        location: ['Eygpt', 'Landon', 'Paris', 'Dubai', 'Istanbul'],
        type: ['Dhaka', 'Comilla', 'Sylhet', 'Bandarban', 'Coxsbazar'],
        price: ['Price Low to Height', 'Price Height to Low', 'Newest'],
        rooms: ['Single Room', 'Double Room', 'Lake view room', 'Family Suite']
      }
      
        const handleFilterChange = (type, value) => {
          setFilters(prev => {
            if (type === 'ratings' || type === 'locations' || type === 'types') {
              // للـ arrays (checkbox)
              const newArray = prev[type].includes(value) 
                ? prev[type].filter(item => item !== value)
                : [...prev[type], value];
              return { ...prev, [type]: newArray };
            } else {
              // للـ single values (radio, search)
              return { ...prev, [type]: value };
            }
          });
        };
      
        useEffect(() => {
          let result = [...hotels];
          
          // filtring search
          if (filters.search) {
            result = result.filter(hotel => 
              hotel.name.toLowerCase().includes(filters.search.toLowerCase()) ||
              hotel.location.toLowerCase().includes(filters.search.toLowerCase())
            );
          }
          
          // filtring rating
          if (filters.ratings.length > 0) {
            result = result.filter(hotel => filters.ratings.includes(hotel.rate));
          }
          
          // filtring location
          if (filters.locations.length > 0) {
            result = result.filter(hotel => 
              filters.locations.some(loc => hotel.location.includes(loc))
            );
          }
          
          // filtring price
          if (filters.price) {
            switch(filters.price) {
              case 'Price Low to Height':
                result.sort((a, b) => parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
                break;
              case 'Price Height to Low':
                result.sort((a, b) => parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
                break;
              case 'Newest':
                result.sort((a, b) => b.Year - a.Year);
                break;
              default:
                break;
            }
          }
          
          setFilteredHotels(result);
        }, [filters]);
      // filtring checkbox
        let Checkbox = ({ label, type, value, checked }) => (
          <div className='filter-data'>
            <input 
              type='checkbox' 
              checked={checked}
              onChange={() => handleFilterChange(type, value)}
            />
            <label>{label}</label>
          </div>
        )
      // filtring stars
        let StarCheckbox = ({ rating, checked }) => (
          <div className='filter-data'>
            <input 
              type='checkbox' 
              checked={checked}
              onChange={() => handleFilterChange('ratings', rating)}
            />
            <label className='stars-label'>
              {Array.from({length: rating}).map((_, index) => (
                <FaStar key={index} className='stars' />
              ))}
            </label>
          </div>
        )
         let Radio = ({ label, type, value, checked, name }) => (
    <div className='filter-data'>
      <input 
        type='radio' 
        name={name}
        value={value}
        checked={checked}
        onChange={() => handleFilterChange(type, value)}
      />
      <label>{label}</label>
    </div>
  )

  const handelFilter = () => {
    setShowFilter(!showFilter);
  }
  
  // filtring function
  const resetFilters = () => {
    setFilters({
      search: '',
      ratings: [],
      locations: [],
      types: [],
      price: '',
      roomFeature: ''
    });
  }
  return (
    <>
    <div className="filter">
          <h3>Search Hotels</h3>
          <input 
            className='search' 
            type="search" 
            placeholder='Search' 
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
          
          <h3>Star rating</h3>
          {filterOptions.rate.map((num, index) => (
            <StarCheckbox 
              key={index} 
              rating={num}
              checked={filters.ratings.includes(num)}
            />
          ))}
          
          <h3>Location</h3>
          {filterOptions.location.map((city, index) => (
            <Checkbox 
              key={index} 
              label={city} 
              type="locations"
              value={city}
              checked={filters.locations.includes(city)}
            />
          ))}
          
          <h3>Types Hotels</h3>
          {filterOptions.type.map((city, index) => (
            <Checkbox 
              key={index} 
              label={city} 
              type="types"
              value={city}
              checked={filters.types.includes(city)}
            />
          ))}
          
          <h3>Price</h3>
          {filterOptions.price.map((item, index) => (
            <Radio 
              key={index} 
              label={item} 
              type="price"
              value={item}
              name="priceFilter"
              checked={filters.price === item}
            />
          ))}
          
          <h3>Room features</h3>
          {filterOptions.rooms.map((room, index) => (
            <Radio 
              key={index} 
              label={room} 
              type="roomFeature"
              value={room}
              name="roomFilter"
              checked={filters.roomFeature === room}
            />
          ))}

          <button className="reset-filter" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
         {/* Mobile-Filter */}
              <div className='filterIcons' onClick={handelFilter}> 
                Filter <MdFilterList/>
              </div>
              
              {showFilter && (
                <div className='filterMobiel'>
                  <div className='filtering'>
                    <div>
                      <h3>Search Hotels</h3>
                      <input 
                        className='search' 
                        type="search" 
                        placeholder='Search'
                        value={filters.search}
                        onChange={(e) => handleFilterChange('search', e.target.value)}
                      />
                      
                      <h3>Star rating</h3>
                      {filterOptions.rate.map((num, index) => (
                        <StarCheckbox
                          key={`mobile-${index}`} 
                          rating={num}
                          checked={filters.ratings.includes(num)}
                        />
                      ))}
                      
                      <h3>Location</h3>
                      {filterOptions.location.map((city, index) => (
                        <Checkbox 
                          key={`mobile-loc-${index}`} 
                          label={city} 
                          type="locations"
                          value={city}
                          checked={filters.locations.includes(city)}
                        />
                      ))}
                    </div>
                    
                    <div>
                      <h3>Types Hotels</h3>
                      {filterOptions.type.map((city, index) => (
                        <Checkbox 
                          key={`mobile-type-${index}`} 
                          label={city} 
                          type="types"
                          value={city}
                          checked={filters.types.includes(city)}
                        />
                      ))}
                      
                      <h3>Price</h3>
                      {filterOptions.price.map((item, index) => (
                        <Radio 
                          key={`mobile-price-${index}`} 
                          label={item} 
                          type="price"
                          value={item}
                          name="mobilePriceFilter"
                          checked={filters.price === item}
                        />
                      ))}
                      
                      <h3>Room features</h3>
                      {filterOptions.rooms.map((room, index) => (
                        <Radio 
                          key={`mobile-room-${index}`} 
                          label={room} 
                          type="roomFeature"
                          value={room}
                          name="mobileRoomFilter"
                          checked={filters.roomFeature === room}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="mobile-filter-buttons">
                    <button onClick={resetFilters}>Reset</button>
                    <button onClick={handelFilter}>Close</button>
                  </div>
                </div>
              )}
        </>
  )
}

export default Filter