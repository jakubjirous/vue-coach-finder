let timer;

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

    const expiresIn = +responseData.expiresIn * 1000; // ms
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('tryAutoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId
    });
  },
  tryAutoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();
    if (expiresIn < 0) {
      return;
    }
    timer = setTimeout(() => {
      context.dispatch('tryAutoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null
    });
  },
  tryAutoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};
