import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Nav from "./nav.jsx"
import Content from "./content.jsx"
function ProblemSet1() {
    return (
        <div>
            <Header />
            <div style={{display:"flex"}}>
            <Nav />
            <Content />
            </div>
            <Footer />
        </div>
    )
}

export default ProblemSet1