import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from '../libs/RadialSeparator';

const ProgressBar = ({ percentage }) => {
  return (
    <>
    <div style={{marginLeft:"auto",marginRight:"auto", width: '80%', height: '320px',marginTop:"20px" ,background:"#d9eff0",padding:"20px",border:"2px solid #d9eff0",borderRadius:"10px"}}>
      <p className='ml-8 mb-5' style={{fontWeight:500}}>Wheel of opportunity</p>
     <CircularProgressbarWithChildren
        value={80}
        text={`${380}`}
        strokeWidth={12}
        styles={buildStyles({
          strokeLinecap: "butt",
          pathColor: "#1574aa",  // Set the path (progress) color to blue
          textColor: "#00BFFF",  // Set the text color to blue
          trailColor: "#d6d6d6", // Set the trail (background) color to a light gray
        })}
      >
        <RadialSeparators
          count={12}
          style={{
            background: "#fff",
            width: "2px",
            // This needs to be equal to props.strokeWidth
            height: `${15}%`
          }}
        />
      </CircularProgressbarWithChildren>
    </div>
    
    </>
  );
};

export default ProgressBar;
