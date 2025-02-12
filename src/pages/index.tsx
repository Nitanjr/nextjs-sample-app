// import Image from "next/image";
import {useSession, signIn, signOut} from 'next-auth/react'
// import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Home.module.css"

//Image
// import codeImage from "../../public/code.jpeg"

// https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGV8ZW58MHx8MHx8fDA%3D
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



export default function Home() {
  // const myImageLoader = ({src,width,quality}) =>{
  //   return `https://images.unsplash.com/${src}?fm=jpg&q=${quality}&w=${width}&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGV8ZW58MHx8MHx8fDA%3D`
  // }

  const session = useSession()

  console.log('Session',session)

  if(session.data === null){
    return <button onClick={() => signIn()}>Login</button>
  }
  return (
    // <div
    //   className={styles.container}  >
    //   <Image 
    //   // loader={myImageLoader}
    //   src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGV8ZW58MHx8MHx8fDA%3D" width={300} height={200} alt="code image" />
    // </div>

    <div className={styles.container}>
      <h1>Hello {session?.data?.user?.name ?? 'Guest'}</h1>
      <button onClick={()=>signOut()}>Logout</button>
    </div>
  );
}

