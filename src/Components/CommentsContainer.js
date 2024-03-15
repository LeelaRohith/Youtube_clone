import React from "react";
const commentsData = [
  { name: "Leela Rohith", text: "It's a nice song", replies: [] },
  {
    name: "Leela Rohith",
    text: "It's a nice song",
    replies: [
      { name: "Leela Rohith", text: "It's a nice song", replies: [] },
      { name: "Leela Rohith", text: "It's a nice song", replies: [] },
      {
        name: "Leela Rohith",
        text: "It's a nice song",
        replies: [
          { name: "Leela Rohith", text: "It's a nice song", replies: [] },
          { name: "Leela Rohith", text: "It's a nice song", replies: [] },
        ],
      },
    ],
  },
  { name: "Leela Rohith", text: "It's a nice song", replies: [] },
  { name: "Leela Rohith", text: "It's a nice song", replies: [] },
  { name: "Leela Rohith", text: "It's a nice song", replies: [] },
  { name: "Leela Rohith", text: "It's a nice song", replies: [] },
  { name: "Leela Rohith", text: "It's a nice song", replies: [] },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm p-2 my-2 rounded-lg bg-gray-100">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://static.thenounproject.com/png/3201587-200.png"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    //console.log(comment);
    return (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-8">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
