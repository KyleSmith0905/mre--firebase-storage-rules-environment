import { createApp } from 'vue'
import App from './App.vue'
import { VueFire } from 'vuefire'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyARgyJRWbhkXynpwF-W22gLhvREj2ZI7pY",
  authDomain: "mre--inconsistent-rules.firebaseapp.com",
  projectId: "mre--inconsistent-rules",
  storageBucket: "mre--inconsistent-rules.appspot.com",
  messagingSenderId: "938377300138",
  appId: "1:938377300138:web:d8c319953a9a975410e8d3"
})

// used for the firestore refs
const db = getStorage(firebaseApp)

const app = createApp(App)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFire(),
  ],
})

app.mount('#app')