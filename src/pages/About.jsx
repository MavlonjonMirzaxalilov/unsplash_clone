import React from "react";
import { useCollection } from "../hooks/useCollection";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";

function About() {
  const { data } = useCollection("images");

  const deleteDocFromCollection = (id) => {
    deleteDoc(doc(db, "images", id))
      .then(() => {
        console.log("ok");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="align-elements py-5">
      {data &&
        data.map((todo) => {
          return (
            <div key={todo.id} className="card">
              <div className="card-body mb-3 border">
                <h1 className="font-display text-3xl font-bold">
                  {todo.title}
                </h1>
                <p className="font-display">{todo.description}</p>
                <div className="flex gap-4">
                  <button className="btn btn-primary self-start">
                    {todo.completed ? "UNCOMPLETED" : "COMPLETED"}
                  </button>
                  <button
                    onClick={() => deleteDocFromCollection(todo.id)}
                    className="btn btn-secondary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default About;
