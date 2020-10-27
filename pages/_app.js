import '../styles/main.css'
import '../styles/layouts.css'
import '../styles/elements.css'

import Head from "next/head"

import Home from "./index"

const App = () => <>
<Head>
    <title> InFin </title>
    <meta property="og:title" content="InFin" key="title" />
    <meta charSet="utf-8" />
</Head>
<Home />
</>
export default App