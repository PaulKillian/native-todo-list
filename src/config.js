import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyCx75lM6lxib1G8m-GHnVSW_qr4vAnsL3o',
  authDomain: 'reactnativepower.firebaseapp.com',
  databaseURL: 'https://reactnativepower-default-rtdb.firebaseio.com/',
  projectId: 'reactnativepower',
  storageBucket: 'reactnativepower.appspot.com',
  messagingSenderId: '874887215137',
};
let app = Firebase.initializeApp(config);
export const db = app.database();
