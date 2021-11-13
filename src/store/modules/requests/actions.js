export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(`${process.env.VUE_APP_DB}/requests/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to send!');
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`${process.env.VUE_APP_DB}/requests/${coachId}.json`, {
      method: 'GET',
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to fetch!');
    }

    const requests = [];
    if (responseData) {
      for (const [requestId, request] of Object.entries(responseData)) {
        // eslint-disable-next-line no-prototype-builtins
        if (responseData.hasOwnProperty(requestId)) {
          requests.push({
            id: requestId,
            coachId: coachId,
            userEmail: request.userEmail,
            message: request.message,
          });
        }
      }
    }
    context.commit('setRequests', requests);
  }
};
