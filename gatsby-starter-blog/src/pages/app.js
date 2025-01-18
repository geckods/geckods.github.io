import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Login from "../components/login"

const App = ({ data, location }) => {
    return (
        <Layout location={location}>
            <Router>
                <Login path="/app/login" />
            </Router>
        </Layout>
    )
}

export default App