import React from "react";
import "../assets/about.css"

class About extends React.Component{
    render(){
        document.title = "Sales - About"
        return(
            <main className="wrapper">
                <section className="section-introduction">
                    <h1>From <span>digital game stores</span><br/>
                    to you</h1>
                    <p>You looking for games with discount much easier and faster.</p>
                </section>
                <section className="section-how-works">
                    <h2>How it works?</h2>
                    <div className="how-works-cards">
                        <div className="how-works-card">
                            <h3>1</h3>
                            <h4>We look for nice deals</h4>
                            <p>We collect pricing data from digital game stores, to make it easy to find exactly what you're looking for.</p>
                        </div>
                        <div className="how-works-card">
                            <h3>2</h3>
                            <h4>We display a entire list of deals</h4>
                            <p>We categorize the offers, so you can discover new games or look for a good offer.</p>
                        </div>
                        <div className="how-works-card">
                            <h3>3</h3>
                            <h4>With just one click</h4>
                            <p>After you search and find an offer that interests you, just click on the title and you will be directed to the store.</p>
                        </div>
                    </div>
                </section>
                <section className="section-original">
                    <h2>Original website</h2>
                    <div className="original-div">
                        <p>To see the original website CheapShark, click in the button below!</p>
                        <a href="https://www.cheapshark.com/" className="button" target={"_blank"}>Visit CheapShark</a>
                    </div>
                </section>
            </main>
        )
    }
}

export default About;