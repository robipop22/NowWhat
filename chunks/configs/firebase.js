import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyBfsqsP_0WsEsekMFG7TqA7DZpAT660UUE",
	authDomain: "nowwhat-4fb78.firebaseapp.com",
	databaseURL: "https://nowwhat-4fb78.firebaseio.com/",
	projectId: "nowwhat-4fb78",
	storageBucket: "nowwhat-4fb78.appspot.com"
};

firebase.initializeApp(config);

export default firebase;
