import React, { useState, useEffect } from "react"
import "../assets/home.css"

function Home(){
        document.title = "Sales - Home"
        const [text, setText] = useState("")
        const [fullText, setFullText] = useState('Steam, Epic Games, Origin, UPlay and Blizzard.')
        const [index, setIndex] = useState(0)

        useEffect(() => {
            if (index < fullText.length) {
              setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
              }, 60)
            }
          }, [index])

        return(
            <main className="wrapper main-home">
                <section className="main-texts">
                    <h1>Sales is about finding the best prices for digital games for PC.</h1>
                    <h2>We primarily focus on the platforms<br/><span>{text}</span></h2>
                    {/* <h2>We primarily focus on the platforms <span>Steam</span>, <span>Epic Games</span>, <span>Origin</span>, <span>UPlay</span> and <span>Blizzard</span>.</h2> */}
                    <a href="/sales" className="button">View all DEALS</a>
                </section>
            </main>
        )
}

export default Home;