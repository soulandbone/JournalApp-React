import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from '../../../src/store/auth/authSlice';
import {
  authenticatedState,
  demoUser,
  initialState,
} from '../../fixtures/authFixtures';

describe('tests in the authSlice', () => {
  test('should return the initial State and  be named "auth"', () => {
    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
    expect(authSlice.name).toBe('auth');
  });

  test('should realize the authentication', () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      status: 'authenticated', //'checking', 'not-authenticated' , 'authenticated'
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test('should realize logout without arguments', () => {
    const state = authSlice.reducer(authenticatedState, logout());
    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test('should realize logout and show an error message', () => {
    const errorMessage = 'Credenciales no son correctas';
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage: errorMessage })
    );
    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage,
    });
  });

  test('should change the state to checking', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    expect(state.status).toBe('checking');
  });
});
