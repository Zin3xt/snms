import firebase from "firebase/app";
import "firebase/firestore";

const ReadCloudFirestore = () => {
  const readData = () => {
    firebase
      .firestore("myCollection")
      .collection("smns")
      .doc("")
      .onSnapshot(function (doc) {
        console.log(doc, data());
      });
  };
  return (
    <button color="primary" round>
      Round
    </button>
  );
};

export default ReadCloudFirestore;
