import { useState } from 'react'
import {Box, Button} from "@material-ui/core";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components';
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Box sx={{backgroundColor:"#000"}}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App
