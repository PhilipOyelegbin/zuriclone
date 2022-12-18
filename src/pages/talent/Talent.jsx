import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "./Header";
import Impact from "./Impact";
import Nav from "./Nav";
import Why from "./Why";

const Talent = () => {
  let year = new Date().getFullYear();
  
  useEffect(() => {
      document.title = 'Zuri';
  }, []);

  return (
    <>
        <Nav/>
        <Header/>
        <Impact/>
        <Why/>
        <Footer background="bg-black" color="text-white" logo="https://talent.zuri.team/logo.svg" width="w-60" socialcolor="text-slate-200" copyright={`Copyright ${year} ZURI TEAM. All rights Reserved`} linktext1="" linktext2="talent@zuri.team"/>
    </>
  )
}

export default Talent