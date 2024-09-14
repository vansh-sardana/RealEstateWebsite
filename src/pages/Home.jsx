import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import Products from '../components/Products'
import { products } from '../data';

const Home = () => {
  const url = 'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-sale&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ac75f349dfmsh0b6ab1f423e3ab2p1f2e33jsn0b23079c7d3b',
		'x-rapidapi-host': 'bayut.p.rapidapi.com'
	}
};
  // const API_URL = "https://estate.100jsprojects.com/api/listing?type=rent&limit=25&order=asc&sort=createAt";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setPosts(result);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (


    loading ? <Loading /> : <Products posts={posts}/>


  )
}

export default Home
