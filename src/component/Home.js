import { Box,
	Breadcrumbs,
	Container,
	Grid,
	makeStyles,
	Typography,Button } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import CardComponent from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader"


export default function Home() {
const [data,setData] = useState([])
const [isLoading,setIsLoading] = useState(false)
const [showData,setShowData] = useState(9)
const [progress, setProgress] = useState(0);
const [buffer, setBuffer] = useState(10);

useEffect(() => {
    getNewsData()
}, [])

const getNewsData=async()=>{
    setIsLoading(true)
    try {
      await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=de3fbf0d79914b02a10253d6c7f9e19c")
       .then((res)=>res.json())
       .then((response)=>{
        // console.log('response',response)
        setData(response.articles)
        setIsLoading(false)   
       })
       .catch((e)=>{
            console.log('error',e)
            setIsLoading(false)
       }) 
    } catch (error) {
        console.log('error',error)
        setIsLoading(false)
    }
}

const getMoreData=()=>{
    setShowData( 
        showData >= data.length ?
        alert('No latest News yet!')
        :
        showData + 3
        )
}
  return (
    <div>
        <Header />
        {
            isLoading === true ?
            <div style={{margin:'3em'}}>
                <h4 style={{color:"#e34234"}}>Loading...</h4>
                <Loader />
                </div>
            :
            <Container style={{ color: "#fff" }}>
                <Box marginTop="3em">
                <Grid container spacing={1} justify="space-between">
          { 
          data.length > 0 ?
             data.slice(0,showData).map((item)=>{
                   return <CardComponent news={item} />
              })
              :
            console.log('no data')
          }
          </Grid>
          </Box>
          <Button variant="contained" 
          style={{color:"#fff",backgroundColor:"#e34234"}} 
          onClick={()=>getMoreData()}
          >SHOW MORE</Button>
      </Container>
        }
      <Footer />
    </div>
  );
}
