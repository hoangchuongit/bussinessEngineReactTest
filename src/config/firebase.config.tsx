import firebase from "firebase";
import { prodConfig } from "./firebase.config.prod";
import { devConfig } from "./firebase.config.dev";

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.database();