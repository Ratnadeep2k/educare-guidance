import { getDatabase, ref, get } from 'firebase/database'
import app from '../../firebase/firebase'

export const readUserdata = async () => {
  try {
    const db = getDatabase(app)
    const userRef = ref(db, 'users/')
    const snapshot = await get(userRef)
    if (snapshot.exists()) {
      return Object.values(snapshot.val())
    } else {
      console.log('No data available')
    }
  } catch (error) {
    console.error('Error reading data', error)
  }
}
