import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getcomments,
  postReply,
  postcomment,
} from "../../redux/reducers/CommentSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PropertyComments = (props) => {
  const dispatch = useDispatch();
  const { data1 } = props;
  console.log(data1);
  const navigate = useNavigate();
  // const { isAuthenticated } = useSelector((state) => ({ ...state.authSlice }));

  const { user } = useSelector((state) => ({ ...state.authSlice }));
  const { comments } = useSelector((state) => ({ ...state.CommentSlice }));
  console.log(comments);
  const [data, setdata] = useState({
    content: "",
    username: user?.data?.result?.Name,
    id: data1,
  });
  const [data2, setdata1] = useState({
    content1: "",
    username: user?.data?.result?.Name,
    id: data1,
    commentId: "",
  });

  const idd = {
    id: data1,
  };

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handlechange1 = (e) => {
    setdata1({ ...data2, [e.target.name]: e.target.value });
  };
  const handleCommentClick = async (commentId) => {
    await setdata1((data2) => ({ ...data2, commentId: commentId }));
    console.log(data2);
    // await dispatch(postReply(data2))
    //   .then((res) => {
    //     console.log(res);
    //     dispatch(getcomments());
    //     window.location.reload();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     // setError(error);
    //   });
  };

  useEffect(() => {
    // if(isAuthenticated == false){
    //   toast.error("Login Required")
    // }
    // else{
    dispatch(postReply(data2))
      .then((res) => {
        console.log(res);
        navigate('/')
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // setError(error);
      });
    // }
  }, [data2.commentId]);

  // console.log(isAuthenticated)
  console.log(data);
  console.log(data2);

  useEffect(() => {
    dispatch(getcomments(idd));
  }, []);

  const handleclick = () => {
    // if(isAuthenticated == false){
    //   toast.error("Login Required")
    // }
    // else{
    dispatch(postcomment(data))
      .then((res) => {
        console.log(res);
        dispatch(getcomments());
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        // setError(error);
      });
    // }
  };

  const handleclick1 = (index) => {
    console.log("hii");
    let data = document.querySelector(`.class${index}`);
    let data1 = document.querySelector(`.class1${index}`);

    let innerht = data1.innerHTML;
    console.log(data);

    if (innerht == "Replies") {
      data1.innerHTML = "Hide Replies";
      data.style.display = "inline-block";
    }
    if (innerht == "Hide Replies") {
      data1.innerHTML = "Replies";
      data.style.display = "none";
    }
  };

  return (
    <div
      className=" w-full"
      style={{
        backgroundColor: "white",
        marginTop: "0px",
        padding: "10px",
      }}
    >
      <div className="w-full   " style={{ backgroundColor: "white" }}>
        <h1
          className=" ml-1 p-2"
          style={{
            backgroundColor: "white",
            fontWeight: "1000",
            fontSize: "30px",
            margin: "10px",
          }}
        >
          Review Section
        </h1>
        <div
          className="w-11/12 flex flex-row ml-2"
          style={{ backgroundColor: "white" }}
        >
          <input
            type="text"
            className="w-11/12 pl-4 border-b-black bg-none "
            name="content"
            value={data.content}
            onChange={handlechange}
            style={{
              backgroundColor: "white",
              borderBottom: "2px solid grey",
              borderRadius: "0px",
              color: "black",
            }}
            placeholder="Enter Your Review Here!"
          />
          {/* <textarea className='p-4' value={data.content} name="content"  cols="50" onChange={handlechange} rows="13"></textarea> */}
          <button
            className="h-10 w-24 rounded-sm float-right mb-2 ml-5"
            onClick={handleclick}
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            Post
          </button>
        </div>
      </div>
      <div className="w-full ">
        <div>
          {comments?.map((ele, index) => {
            return (
              <>
                <div
                  className="flex justify-start p-3 items-center"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="h-10 w-10 rounded-full bg-slate-200 mr-2 text-2xl items-center justify-center flex">
                    U
                  </div>
                  <h1>{ele.userName}</h1>
                </div>
                <div className="pl-4 pr-4">
                  <p>{ele.content}</p>
                </div>
                <button
                  className={`ml-4 text-cyan-600 underline class1${index}`}
                  onClick={() => handleclick1(index)}
                >
                  Replies
                </button>
                <div className={`h-20 class${index} w-full p-6 hidden`}>
                  <input
                    type="text"
                    className="w-10/12 pl-4 border-b-black bg-none mr-3 "
                    name="content1"
                    value={data2.content1}
                    onChange={handlechange1}
                    style={{
                      backgroundColor: "white",
                      borderBottom: "2px solid grey",
                      borderRadius: "0px",
                      color: "black",
                    }}
                    placeholder="Enter Your Review Here!"
                  />
                  <button
                    className="relative h-10 w-20 bg-black text-white left-25 md:left5"
                    onClick={() => handleCommentClick(ele._id)}
                    style={{
                      // position: "relative",
                      // bottom: "20px",
                     
                      
                    }}
                  >
                    Reply
                  </button>
                  <div>
                    {ele?.replies?.map((ele, index) => {
                      return (
                        <>
                          <div className="flex justify-start p-2 items-center mt-2">
                            <div className="h-10 w-10 rounded-full bg-slate-200 mr-2 text-2xl items-center justify-center flex">
                              U
                            </div>
                            <h1>{ele.userName}</h1>
                          </div>
                          <div className="pl-4 pr-4 mt-0">
                            <p>{ele.content}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
          {/* {
            comments?.map((ele,index)=>{
                return(
                    <>
                <div className='flex justify-start p-3 items-center'>
            <div className='h-10 w-10 rounded-full bg-slate-200 mr-2 text-2xl items-center justify-center flex'>U</div>
            <h1>{ele.userName}</h1>
                </div>
                <div className='pl-4 pr-4'>
                <p>{ele.content}</p>
            </div>
            <button className='ml-4 text-cyan-600 underline'>Reply</button> 
                </>
            )
            })
        } */}
        </div>
      </div>
    </div>
  );
};

export default PropertyComments;
