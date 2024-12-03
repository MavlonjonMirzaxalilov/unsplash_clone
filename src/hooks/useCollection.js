//firebase imports
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";

//react imports
import { useEffect, useState } from "react";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    onSnapshot(collection(db, collectionName), (querySnapshot) => {
      const queryData = [];
      querySnapshot.forEach((doc) => {
        queryData.push({ id: doc.id, ...doc.data() });
      });
      setData(queryData);
    });
  }, []);

  return { data };
};

// const getData = async () => {
//   const querySnapshot = await getDocs(collection(db, collectionName));
//   const queryData = [];
//   querySnapshot.forEach((doc) => {
//     queryData.push({ id: doc.id, ...doc.data() });
//   });
//   setData(queryData);
// };
// getData();
//
