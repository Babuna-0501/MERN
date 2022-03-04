import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(()=> {
    const getRandomLists = async ()=> {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMThiOWNkZWQxYTk5ZjRkYjAyOGFhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjEzMDQ4MCwiZXhwIjoxNjQ2NTYyNDgwfQ.KW8HeeVn2OpYtg0YWlCgM7cB9-WNW7i3i2XnhgMVlJs"
          }
        });
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  },[type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type}/>
      {lists.map((list)=> (
          <List list={list}/>
      ))}
    </div>
  );
};

export default Home;
