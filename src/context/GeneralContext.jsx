import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const GeneralContext = React.createContext();

const GeneralContextProvider = ({children}) => {

    const [topNews, setTopNews] = useState([])

    const [businessNews, setBusinessNews] = useState([]);
    const [technologyNews, setTechnologyNews] = useState([]);
    const [politicsNews, setPoliticsNews] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
          await fetchTopNews();
          await fetchBusinessNews();
          await fetchPoliticsNews();
          await fetchTechnologyNews();
        };
        fetchNewsData();
      }, []);
      
    
      const fetchTopNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=india&apiKey=78f14bc07ad2421aadc38de435a0a851");
          setTopNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      };

      const fetchBusinessNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=business&apiKey=78f14bc07ad2421aadc38de435a0a851");
          setBusinessNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      };
      const fetchPoliticsNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=politics&apiKey=78f14bc07ad2421aadc38de435a0a851");
          setPoliticsNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      };
      const fetchTechnologyNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=technology&apiKey=78f14bc07ad2421aadc38de435a0a851");
          setTechnologyNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      };

    
  return (
    <GeneralContext.Provider value={{topNews, businessNews, technologyNews, politicsNews}} >{children}</GeneralContext.Provider>
  )
}

export default GeneralContextProvider