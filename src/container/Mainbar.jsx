import { PlusCircle, UserRoundPlus } from "lucide-react";
import React from "react";
import CircularProgressBar from "../components/ProgressBar";
import ProgressBar from "@ramonak/react-progress-bar";
import PatientData from "../components/PatientData";

function Mainbar() {
  return (
    <div style={{background:'white'}}>
      <div style={{ background: "#092e5a" }} className=" w-full h-40">
        h
      </div>
      <div className="flex">
        <div
          className="w-1/4 flex flex-col  rounded m-3 shadow-lg"
          
        >
          <div>
            <img
              style={{ marginTop: "-50px",marginLeft:"auto",marginRight:"auto" }}
              src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
              className="w-32 rounded-full shadow-lg "
              alt="Avatar"
            />
          </div>
          <div style={{marginLeft:"auto",marginRight:"auto" }}>
            <h1  className="text-2xl">Ayaat Khanna</h1>
          </div>
          <div style={{ color: "grey", marginLeft:"auto",marginRight:"auto"  }} className="text-sm">
            UI/UX Developer
          </div>
          <div className="flex items-center" style={{marginLeft:"auto",marginRight:"auto" }}>
            <UserRoundPlus size={20} fill="black" className="mr-2" />
            <span className="mr-2 text-sm">21 Followers</span>
            <span className="text-sm">43 Following</span>
          </div>
          <div className="mt-5">
            <span>
              <label
                style={{ fontWeight: "500" }}
                className="ml-4 inline-block pl-[0.15rem] hover:cursor-pointer"
                htmlFor="flexSwitchCheckDefault"
              >
                Make my profile visible
              </label>
              <input
                className="mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                style={{float:"right",marginRight:"5px"}}
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </span>
          </div>
          <div className="ml-4" style={{ fontSize: "13px", color: "grey" }}>
            Your profile and career goals will appear when employers search our
            database for candidates
          </div>

          <div  className=" ml-4 mt-5">
            <span
              style={{ fontWeight: 500, display: "flex",marginTop:"20px"}}
            >
              Online Links For Portfolio 
            </span>
            <PlusCircle style={{cursor:"pointer",float:"right",marginTop:"-25px",marginRight:"5px"}} color="white" fill="blue" size={30} />
          </div>
          <div className="ml-3 mt-0" style={{ fontSize: "13px", color: "grey" }}>
            Add your portfolio link to increase your profile growth
          </div>
          <div>
            <CircularProgressBar percentage={76}/>
          </div>
          <div >
            <p className="ml-4" style={{fontWeight:500,marginTop:"30px",marginBottom:"20px"}}>Your Ranking</p>
            <ProgressBar margin="10px" width="95%" height="35px" completed={75} />

          </div>
        </div>

        <div className="flex-1  bg-300">
        <div className="mt-3 p-5 rounded overflow-hidden shadow-lg">
            <PatientData/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
