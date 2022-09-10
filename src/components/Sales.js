import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/sales.css"

function Sales(){
    document.title = "Sales - Deals"

    const [games, setGames] = useState([])
    const [isTrue, setTrue] = useState(false)
    const [search, setSearch] = useState('')
    const [order, setOrder] = useState("DSC")
    const [orderData, setOrderData] = useState("&desc=0")
    const [loading, setLoading] = useState("Loading games...")
    const [numPages, setNumPages] = useState(0)
    const [sortingPM, setSortingPM] = useState("")
    const [state, updateState] = useState({state1: "ᛨ", state2:"ᛨ", state3:"ᛨ", state4:"ᛨ", state5:"ᛨ", state6:"ᛨ"});
    const [store, setStore] = useState(["1"])
    const [page, setPage] = useState(0)

    useEffect(() => {
        fetchData()
        setLoading("")
        fetchPages()
    }, [games], [search], [store], [page], [isTrue])
        
    useEffect(() => {
        setLoading("Loading games...")
        setInterval(() => {
            setLoading("")
        }, 100000);
    }, [page], [isTrue])

    const fetchPages = async () => {
        await axios.get("https://www.cheapshark.com/api/1.0/deals?storeID="+store+"&sortBy="+sortingPM+orderData+"&onSale=1")
        .then(response => setNumPages(response.headers["x-total-page-count"]))
    }

    const fetchData = async () => {
        setLoading("Loading games...")
        if(search == ""){
            if(sortingPM == ""){
                const {data} = await axios.get("https://www.cheapshark.com/api/1.0/deals?storeID="+store+"&pageNumber="+page+orderData+"&onSale=1")
                setGames(data)
                setTrue(true)
                setLoading("")
            } else{
                const {data} = await axios.get("https://www.cheapshark.com/api/1.0/deals?storeID="+store+"&pageNumber="+page+"&sortBy="+sortingPM+orderData+"&onSale=1")
                setGames(data)
                setTrue(true)
                setLoading("")
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {data}  = await axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=`+store+`&sortBy=Title&title=`+search+"&onSale=1")
        setGames(data)
    }

    const handleClear = () => {
        setSearch = ""
        document.getElementById("input-title").value = ""
    }
 
    const sorting = async (pm) => {
        setTrue(false)
        setSortingPM(pm)
        setLoading("Sorting by " + pm)
        document.getElementById("input-title").value = ""
        if(order === "ASC"){
            const {data} = await axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=`+store+`&sortBy=`+pm+"&pageNumber="+page+orderData+"&onSale=1")
            setGames(data)
            setOrderData("&desc=1")
            setOrder("DSC")
            setLoading("")
            setTrue(true)
            if(pm == "Savings"){
                updateState({...state, state1: "🠉", state2: "ᛨ", state3: "ᛨ",state4: "ᛨ",state5: "ᛨ", state6: "ᛨ"})
            }
            if(pm == "Price"){
                updateState({...state, state1: "ᛨ", state2: "🠉", state3: "ᛨ",state4: "ᛨ",state5: "ᛨ", state6: "ᛨ"})
            }
            if(pm == "Title"){
                updateState({...state, state1: "ᛨ", state2: "ᛨ", state3: "🠉",state4: "ᛨ",state5: "ᛨ", state6: "ᛨ"})
            }
            if(pm == "Deal%20Rating"){
                updateState({...state, state1: "ᛨ", state2: "ᛨ", state3: "ᛨ",state4: "🠉",state5: "ᛨ", state6: "ᛨ"})
            }
            if(pm == "Reviews"){
                updateState({...state, state1: "ᛨ", state2: "ᛨ", state3: "ᛨ",state4: "ᛨ",state5: "🠉", state6: "ᛨ"})
            }
            if(pm == "Store"){
                updateState({...state, state1: "ᛨ", state2: "ᛨ", state3: "ᛨ",state4: "ᛨ",state5: "ᛨ", state6: "🠉"})
            }
        }
        if(order === "DSC"){
            const {data} = await axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=`+store+`&sortBy=`+pm+"&pageNumber="+page+orderData+"&onSale=1")
            setGames(data)
            setOrder("ASC")
            setOrderData("&desc=0")
            setLoading("")
            setTrue(true)
            if(pm == "Savings"){
                updateState({...state, state1: "🠋", state2:"ᛨ",state3: "ᛨ",state4: "ᛨ", state5: "ᛨ", state6: "ᛨ"})
            }
            if(pm == "Price"){
                updateState({...state, state1: "ᛨ", state2:"🠋",state3: "ᛨ",state4: "ᛨ", state5: "ᛨ", state6: "ᛨ"})
            } 
            if(pm == "Title"){
                updateState({...state, state1: "ᛨ", state2:"ᛨ",state3: "🠋",state4: "ᛨ", state5: "ᛨ", state6: "ᛨ"})
            }
            if(pm == "Deal%20Rating"){
                updateState({...state, state1: "ᛨ", state2:"ᛨ",state3: "ᛨ",state4: "🠋", state5: "ᛨ", state6: "ᛨ"})
            }
            if(pm == "Reviews"){
                updateState({...state, state1: "ᛨ", state2:"ᛨ",state3: "ᛨ",state4: "ᛨ", state5: "🠋", state6: "ᛨ"})
            }
            if(pm == "Store"){
                updateState({...state, state1: "ᛨ", state2:"ᛨ",state3: "ᛨ",state4: "ᛨ", state5: "ᛨ", state6: "🠋"})
            }
        }
    }
        
    const handleStore = (e) => {
        if(e.target.checked){
            setStore(prev => [...prev, e.target.value])
        } else{
            setStore(store.filter(item => item !== e.target.value))
        }
    }

    const pages = (e) => {
        if(e == "add"){
            if(page < numPages){
                setPage(page + 1)
                window.scroll(0,0)
            }
        } else{
            if(page > 0){
                setPage(page - 1)
                window.scroll(0,0)
            }
        }
    }

    return(
        <main className="wrapper main-home">
            <section className='filter'>
                    <form>
                        <div className='inputs titles'>
                            <div className='input text'>
                                <label htmlFor='input-title'>Looking for a specific title?</label>
                                <input type="text" id='input-title' placeholder='Specific title...' required onChange={(e) => setSearch(e.target.value)}></input>
                            </div>
                            <button type='submit' className='button' onClick={handleSubmit}>Search</button>
                            <button type='submit' className='button' onClick={handleClear}>Clear</button>
                        </div>
                        <div className='inputs checks'>
                            <div className='input check steam'>
                                <input type="checkbox" id="steam" value="1" defaultChecked disabled/>
                                <label htmlFor='steam'>Steam<br/></label>
                            </div>
                            <div className='input check'>
                                <input type="checkbox" id="epic" value="25" onChange={(e)=> handleStore(e)}/>
                                <label htmlFor='epic'>Epic Games<br/></label>
                            </div>
                            <div className='input check'>
                                <input type="checkbox" id="uplay" value="13" onChange={(e)=> handleStore(e)}/>
                                <label htmlFor='uplay'>UPlay<br/></label>
                            </div>
                            <div className='input check'>
                                <input type="checkbox" id="origin" value="8" onChange={(e)=> handleStore(e)}/>
                                <label htmlFor='origin'>Origin<br/></label>
                            </div>
                            <div className='input check'>
                                <input type="checkbox" id="blizzard" value="31" onChange={(e)=> handleStore(e)}/>
                                <label htmlFor='blizzard'>Blizzard<br/></label>
                            </div>
                        </div>
                    </form>
            </section>
            <div className='loading-div'>{loading}</div>
            <table className='games'>
                <thead>
                    <tr>
                        <td onClick={(e) => sorting("Savings")} className="savings cursor clickOrder">Savings {state.state1}</td>
                        <td onClick={() => sorting("Price")} className="pricetd cursor">Price {state.state2}</td>
                        <td onClick={() => sorting("Title")} className="cursor">Title {state.state3}</td>
                        <td onClick={() => sorting("Deal%20Rating")} className='rating cursor'>Deal Rating {state.state4}</td>
                        <td onClick={() => sorting("Reviews")} className="review cursor">Review {state.state5}</td>
                        <td onClick={() => sorting("Store")} className="store cursor">Store {state.state6}</td>
                    </tr>
                </thead>
                <tbody>
                    {isTrue == true && games.map((element) => {
                        return(
                                <tr key={element.dealID}>
                                    <td className='savings'>{Number(element.savings).toFixed(0)}%</td>
                                    <td className='pricetd'>$
                                        <span className='price'>{element.salePrice}</span>
                                        <sup>
                                            <del>${element.normalPrice}</del>
                                        </sup>
                                    </td>
                                    <td className='title-img'>
                                        <span><a href={`https://www.cheapshark.com/redirect?dealID=`+element.dealID} target={'_blank'}><img src={element.thumb} className='game-image'/></a></span>
                                        <span>
                                            <a href={`https://www.cheapshark.com/redirect?dealID=`+element.dealID} target={'_blank'}>{element.title}</a>
                                        </span>
                                    </td>
                                    <td className='rating'>{element.dealRating}</td>
                                    <td className='review'>{element.steamRatingText == null && "?" || element.steamRatingText != null && element.steamRatingText}</td>
                                    <td className='store'>{(element.storeID == 1 && "Steam") || (element.storeID == 25 && "Epic Games") || (element.storeID == 8 && "Origin") || (element.storeID == 13 && "UPlay") || (element.storeID == 31 && "Blizzard")}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {games.length > 59 && <div className='btn-pages'>
                <button type='button' className='button' value="remove" onClick={(e) => pages(e.target.value)}>&#60;</button>
                <span>{page} / {numPages}</span>
                <button type='button' className='button' value="add" onClick={(e) => pages(e.target.value)}>&#62;</button>
            </div>
            }
        </main>
    )
}

export default Sales;