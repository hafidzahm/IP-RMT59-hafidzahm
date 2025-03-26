import { useEffect, useState } from "react"
import http from "../helper/http"
import Navbar from "./Navbar"
import Card from "../components/Card"
import { useNavigate } from "react-router"

export default function Homepage() {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate()
    useEffect(() => {
        fetchData()
    }, [])

    async function getDetailNews(key) {
        try {
            let {id} = key
            console.log(id);
            // let response = await http.get(`/details?key=${id}`, {timeout: 10000})
            navigate(`/details?key=${id}`)
            // console.log(response);
        } catch (error) {
            console.log(error);
        }
      
        
      }

    async function fetchData() {
        try {
            setIsLoading(true)
            let response = await http.get('/news', {timeout: 10000})
            console.log(response, '<-----fetchData');
            setNews(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
       
    }
    return(
        <>
        <div className="flex flex-row flex-wrap justify-center w-5xl gap-5 m-auto">
        {
            isLoading ? <div>Loading...</div> : news.map(el => {
                return <Card key={el.key} data={el} submitKey={getDetailNews}/>
            })
        }
        </div>
        
        </>
    )
}