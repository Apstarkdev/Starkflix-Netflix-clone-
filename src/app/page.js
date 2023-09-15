import Topbar from "./components/topbar"
import "./style/topbarCSS.css"
import "./style/body.css"
import Apicall from "./components/shared/api"

export default function Home() {
  return (
    <main>
      <Topbar></Topbar>
      <Apicall></Apicall>
    </main>
  )
}
