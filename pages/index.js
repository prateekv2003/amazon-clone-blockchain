import Sidebar from "../components/Sidebar"
import Main from "../components/Main"
export default function Home() {

  const styles = {
    container : `h-full w-full flex bg-[#fff]`
  }

  return (
    <div className={styles.container}>
      <Sidebar/>
      <Main/>
    </div>
  )
}
