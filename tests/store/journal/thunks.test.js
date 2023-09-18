import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  startNewNote,
} from '../../../src/store/journal';
import { FirebaseDB } from '../../../src/firebase/config';

describe('tests in Journal Thunks', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('should create a new blank Note', async () => {
    const uid = 'TEST-UID';
    getState.mockReturnValue({ auth: { uid: uid } });

    await startNewNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingNewNote());
    expect(dispatch).toHaveBeenCalledWith(
      addNewEmptyNote({
        body: '',
        title: '',
        imageUrls: [],
        id: expect.any(String),
        date: expect.any(Number),
      })
    );

    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        body: '',
        title: '',
        imageUrls: [],
        id: expect.any(String),
        date: expect.any(Number),
      })
    );

    //Borrar de Firebase
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    const deletePromises = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));
    await Promise.all(deletePromises);
  });
});
