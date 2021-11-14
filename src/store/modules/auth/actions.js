export default {
  async authUser(context, payload) {
    const url = payload.isLoginMode
      ? `${process.env.VUE_APP_FIREBASE_AUTH}:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}`
      : `${process.env.VUE_APP_FIREBASE_AUTH}:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to login!');
    }

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};
