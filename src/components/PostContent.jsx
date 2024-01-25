import React from "react";
import post from "../assets/download.png";
import { MessageSquareText, Send, ThumbsUp } from "lucide-react";
function PostContent() {
  return (
    <div>
      <span style={{ display: "flex" }}>
        {" "}
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          className="w-16 rounded-full shadow-lg"
          alt="Avatar"
        />
        <span className="ml-3 mt-2">
          {" "}
          Karim Saif
          <span className="ml-3 mt-1 text-gray-500">14 min ago</span>
        </span>
      </span>
      <div>
        <p style={{ marginLeft: "70px", marginRight: "20px" }}>
          What is the reason guys yesterday i uploaded same type of content and
          they approved it and today i tried to upload they say we no longer
          accept it. So now what should i do?
        </p>
        <img
          style={{ width: "100%", maxHeight: "350px", borderRadius: "15px" }}
          src={post}
          alt=""
        />
      </div>
      <div className="divide-y divide-gray-400">
      <span style={{ display: "flex", marginTop: "20px" }}>
        <span
          style={{
            display: "flex",
            fontSize: "16px",
            color: "grey",
            paddingRight: "30px",
            cursor: "pointer",
          }}
        >
          <ThumbsUp size={23} color="blue" /> 1.5k
        </span>
        <span
          style={{
            display: "flex",
            fontSize: "16px",
            color: "grey",
            paddingRight: "30px",
            cursor: "pointer",
          }}
        >
          <MessageSquareText size={23} />
          45
        </span>
        <span
          style={{
            display: "flex",
            fontSize: "16px",
            color: "grey",
            paddingRight: "30px",
            cursor: "pointer",
          }}
        >
          <Send size={23} />
        </span>
      </span>
         <div className="mt-7 pt-4">
         <span style={{ display: "flex" }}>
        {" "}
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/4.webp"
          className="ml-7 w-10 rounded-full shadow-lg"
          alt="Avatar"
        />
        <span className="ml-3 mt-2">
          {" "}
          Kashish Roy
          <span className="ml-3 mt-1 text-gray-500">5 min ago</span>
          
        </span>
        
      </span>
      <p style={{ marginLeft: "70px", marginRight: "20px" }}>
         That Car can be renewed and it will be like a new one!
        </p>
        <span style={{ display: "flex", marginTop: "10px",marginLeft:"60px" }}>
        <span
          style={{
            display: "flex",
            fontSize: "16px",
            color: "grey",
            paddingRight: "30px",
            cursor: "pointer",
          }}
        >
          Like
        </span>
        <span
          style={{
            display: "flex",
            fontSize: "16px",
            color: "grey",
            paddingRight: "30px",
            cursor: "pointer",
          }}
        >
          Reply
        </span>
   
      </span>
      </div>
      </div>
    </div>
  );
}

export default PostContent;
