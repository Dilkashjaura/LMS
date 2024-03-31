import NavBar from "../component/NavBar.jsx";
import * as React from "react";
import {Stack} from "@mui/material";
import {useState, useEffect} from "react";
import axios from 'axios';
import BookCard from "../component/BookCard.jsx";



const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:8000/book/books');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);
console.log(data.book)
  return (
    <>
 
      <Stack className="DashboardMain" flexDirection={"row"}>
        <Stack >
          <NavBar />
        </Stack>
        <Stack sx={{m:4, marginTop: '70px'}} >
          <Stack textAlign={"center"}><h3>ALL BOOKS</h3></Stack>
          {loading && <div>Loading</div>}
    {!loading && (
    
<Stack direction={"row"} flexWrap={"wrap"} gap={"50px"}>
  {data.book?.map((book) => (
    <BookCard key={book._id} book={book}/>
  ))}
</Stack>


    
    )}

        </Stack>
       
      </Stack>
    </>
  );
};

export default Dashboard;