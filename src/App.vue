<script setup lang="ts">
import { doc, setDoc } from 'firebase/firestore';
import { ref as storageRef } from 'firebase/storage'
import { ref } from 'vue';
import { useStorageFile } from 'vuefire'
import { storage } from './firebase';
import { firestore } from './firebase';

const fileRef = ref<HTMLInputElement>();
const exampleFileRef = storageRef(storage, 'example-path/abc123/file')

const { upload } = useStorageFile(exampleFileRef)

const uploadPicture = () => {
  const file = fileRef.value?.files?.item(0)
  if (file) {
    upload(file)
  }
}

const createDocument = async () => {
  await setDoc(doc(firestore, 'example-path', 'abc123'), {
    userId: '123abc'
  })
}
</script>

<template>
  <button @click="createDocument()">Create Necessary Document</button>
  <hr/>
  <p>Check network/console tab to see if upload works or fails, sorry.</p>
  <input type="file" ref="fileRef"/>
  <button @click="uploadPicture()">Submit</button>
</template>