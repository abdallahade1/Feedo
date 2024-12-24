//RestaurantList.js

import React, { useContext, useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { RestaurantContext } from '../contexts/RestaurantContext';
import PreviousOrders from './PreviousOrders';


const RestaurantList = () => {
    const { restaurants, setSelectedRestaurant } = useContext(RestaurantContext);
    const [filteredRestaurants, setFilteredRestaurants] = useState([...restaurants]);
    const [ratingFilter, setRatingFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [showOrder, setShowOrder] = useState(false)

    useEffect(() => {
        filterRestaurants();
    }, [ratingFilter, searchTerm, restaurants]);

    const handleRestaurantClick = (restaurantId) => {
        setSelectedRestaurant(restaurants.find((restaurant) => restaurant._id === restaurantId));
    };

    const handleRatingChange = (e) => {
        setRatingFilter(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filterRestaurants = () => {
        let filtered = restaurants;

        if (ratingFilter) {
            filtered = filtered.filter((restaurant) => restaurant.rating >= parseFloat(ratingFilter));
        }

        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            filtered = filtered.filter((restaurant) =>
                restaurant.name.toLowerCase().includes(searchLower)
            );
        }

        setFilteredRestaurants(filtered);
    };
    const handleShow = () => {
        setShowOrder(!showOrder)
    }
    return (
        <div className="container">
            <h2 className="header">Restaurant List</h2>
            <div className="filter-container">
                <label htmlFor="rating" className="filter-label">
                    Filter by Rating:
                </label>
                <input
                    type="number"
                    id="rating"
                    value={ratingFilter}
                    onChange={handleRatingChange}
                    className="filter-input"
                />
                <label htmlFor="search" className="filter-label">
                    Search by Name:
                </label>
                <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="filter-input"
                />
                <p id='pre-orders' onClick={handleShow}>
                    Previous Orders
                </p>
            </div>
            <div className="restaurant-card-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant._id}
                        restaurant={restaurant}
                        onClick={() => handleRestaurantClick(restaurant._id)}
                    />
                ))}
            </div>
            {showOrder && <PreviousOrders handleShow={handleShow} />}

        </div>
    );
};

export default RestaurantList;