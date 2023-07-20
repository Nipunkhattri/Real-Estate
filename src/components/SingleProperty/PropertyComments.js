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

const PropertyComments = (props) => {
  const dispatch = useDispatch();
  const { data1 } = props;
  console.log(data1);
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
    await dispatch(postReply(data2))
      .then((res) => {
        console.log(res);
        dispatch(getcomments());
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // setError(error);
      });
  };

  console.log(data);
  console.log(data2);

  useEffect(() => {
    dispatch(getcomments(idd));
  }, []);

  const handleclick = () => {
    dispatch(postcomment(data))
      .then((res) => {
        console.log(res);
        dispatch(getcomments());
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // setError(error);
      });
  };

  const handleclick1 = (index) =>{
    console.log("hii");
    let data = document.querySelector(`.class${index}`)
    console.log(data);
    data.style.display = 'block';
  }

  return (
    <div className=" w-full">
      <div className="w-full  bg-slate-400 ">
        <h1 className="text-xl ml-28 p-2">Write Your review?</h1>
        <div className="w-11/12 flex flex-col items-end">
          <input
            type="text"
            className="w-11/12 pl-8 border-b-black bg-none mb-2"
            name="content"
            value={data.content}
            onChange={handlechange}
          />
          {/* <textarea className='p-4' value={data.content} name="content"  cols="50" onChange={handlechange} rows="13"></textarea> */}
          <button
            className="h-10 w-24 bg-slate-200 rounded-sm float-right mb-2"
            onClick={handleclick}
          >
            Post
          </button>
        </div>
      </div>
      <div className="w-full bg-slate-600">
        <div className="overflow-scroll">
          {comments?.map((ele, index) => {
            return (
              <>
                <div className="flex justify-start p-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-200 mr-2 text-2xl items-center justify-center flex">
                    U
                  </div>
                  <h1>{ele.userName}</h1>
                </div>
                <div className="pl-4 pr-4">
                  <p>{ele.content}</p>
                </div>
                <button className="ml-4 text-cyan-600 underline" onClick={()=>handleclick1(index)}>Reply</button>
                <div className={`h-40 class${index} w-full p-6 hidden`}>
                  <input
                    type="text"
                    className="w-7/12 pl-7"
                    name="content1"
                    value={data2.content1}
                    onChange={handlechange1}
                  />
                  <button
                    className="h-10 w-20 bg-black text-white"
                    onClick={() => handleCommentClick(ele._id)}
                  >
                    Reply
                  </button>
                  <div>
                    {ele?.replies?.map((ele, index) => {
                      return (
                        <>
                          <div className="flex justify-start p-3 items-center">
                            <div className="h-10 w-10 rounded-full bg-slate-200 mr-2 text-2xl items-center justify-center flex">
                              U
                            </div>
                            <h1>{ele.userName}</h1>
                          </div>
                          <div className="pl-4 pr-4">
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
