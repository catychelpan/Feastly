import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB7ZsniUWcTGW7QmgoJF7HGjExumhPJ4GM',
  authDomain: 'feastly-aa567.firebaseapp.com',
  projectId: 'feastly-aa567',
  storageBucket: 'feastly-aa567.appspot.com',
  messagingSenderId: '913187245263',
  appId: '1:913187245263:web:286d2caefb5e3b4b523bba',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const db = getFirestore(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const request = await signInWithPopup(auth, provider)
    const { user } = request
    const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
        photoUrl: user.photoURL,
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const logout = async () => {
  try {
    await auth.signOut()
  } catch (error) {
    console.log(error)
  }
}

export const saveDietPlan = async (dietPlan, userId) => {
  try {
    //await addDoc(collection(db, 'dietPlan'), dietPlan)
    await setDoc(doc(db, 'dietPlan', userId), dietPlan)
  } catch (error) {
    console.log(error)
  }
}

export const getDietPlan = async (userId) => {
  try {
    const docRef = doc(db, 'dietPlan', userId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    }
    return null
  } catch (error) {
    console.log(error)
  }
}
