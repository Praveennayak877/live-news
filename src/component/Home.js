import { Box,
	Breadcrumbs,
	Container,
	Grid,
	makeStyles,
	Typography,Button } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import CardComponent from "./Card";
import CovidCard from "./CovidCard";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader"
import CardActions from '@material-ui/core/CardActions';
import StateDataTable from "./StateDataTable";
import jsonData from './data.json'


export default function Home() {
const [data,setData] = useState([])
const [covidData,setCovidData] = useState('')
const [isLoading,setIsLoading] = useState(false)
const [showData,setShowData] = useState(9)
const [progress, setProgress] = useState(0);
const [buffer, setBuffer] = useState(10);
const [show,setShow] = useState(false)


useEffect(() => {
    getNewsData()
    getCoivdIndia()
}, [])

const getNewsData=async()=>{
    setIsLoading(true)
    try {
      await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=de3fbf0d79914b02a10253d6c7f9e19c")
       .then((res)=>res.json())
       .then((response)=>{
        console.log('response---',response)
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
        showData >= 6 ?
        alert('No latest News yet!')
        :
        showData + 3
        )
}


const getCoivdIndia=async()=>{
  setIsLoading(true)
  try {
    await fetch("https://corona.lmao.ninja/v2/countries/india")
    .then((res)=>res.json())
    .then((response)=>{
      setCovidData(response)
      setIsLoading(false)
    })
    .catch((err)=>{
      console.log('err in covid api',err)
      setIsLoading(false)
    })
  } catch (error) {
    console.log('error',error)
    setIsLoading(false)
  }
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
              <CardActions>
        <Button size="small" color="primary" variant="contained" onClick={()=>setShow(!show)}> {show === false ? 'States Covid cases' : 'India News'}</Button>
      </CardActions>
            {
              show === false ?
              <>
              <Box marginTop='1em'>
              <Grid container spacibg={1} justify="center">
                {
                  covidData !==null && covidData !== undefined  ?
                  <CovidCard data={covidData} />
                  :
                  console.log('no covid data')
                }
              </Grid>
            </Box>

              <Box marginTop="3em">
              <Grid container spacing={1} justify="space-between">
        {/* { 
          data !==null && 
          data !== undefined &&
          data.length > 0 ?
           data.slice(0,showData).map((item)=>{
                 return <CardComponent news={item} />
            })
            :
            <CardComponent />
          // console.log('no data-----------')
        } */}

        {
          jsonData !==null && 
          jsonData !== undefined &&
          jsonData.length > 0 ?
          jsonData.map((item)=>{
            // console.log('items json',item)
            return (
              <>
              <CardComponent news={item.articles[0]} />
              <CardComponent news={item.articles[1]} />
              <CardComponent news={item.articles[2]} />
              <CardComponent news={item.articles[3]} />
              <CardComponent news={item.articles[4]} />
              <CardComponent news={item.articles[5]} />
              <CardComponent news={item.articles[6]} />
              <CardComponent news={item.articles[7]} />
              <CardComponent news={item.articles[8]} />
              <CardComponent news={item.articles[9]} />
              <CardComponent news={item.articles[10]} />
              <CardComponent news={item.articles[11]} />
              <CardComponent news={item.articles[12]} />
              <CardComponent news={item.articles[13]} />
              <CardComponent news={item.articles[14]} />
              </>
            )
          })
          :
          console.log('no data')
        }

        <CardComponent />
        </Grid>
        </Box>
        <Button variant="contained" 
        style={{color:"#fff",backgroundColor:"#e34234",marginBottom:'1em'}} 
        onClick={()=>getMoreData()}
        >SHOW MORE</Button>
        </>
        :
        <StateDataTable />
            }
      </Container>
        }
      <Footer />
    </div>
  );
}
