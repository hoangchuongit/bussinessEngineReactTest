import * as firebase from "firebase";
import { prodConfig } from "./firebase.config.prod";
import { devConfig } from "./firebase.config.dev";

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const databaseRef = firebase.database().ref();
export const servicesRef = databaseRef.child("services");
export const staffsRef = databaseRef.child("staffs");
export const clientsRef = databaseRef.child("clients");
export const appointmentsRef = databaseRef.child("appointments");
export const authRef = firebase.auth();