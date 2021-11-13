export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(`${process.env.VUE_APP_DB}/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData),
    });

    // const responseData = await response.json();
    if (!response.ok) {
      // error ...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async loadCoaches(context) {
    const response = await fetch(`${process.env.VUE_APP_DB}/coaches.json`, {
      method: 'GET',
    });
    const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    const coaches = [];
    for (const [coachId, coach] of Object.entries(responseData)) {
      // eslint-disable-next-line no-prototype-builtins
      if (responseData.hasOwnProperty(coachId)) {
        coaches.push({
          coachId: coachId,
          firstName: coach.firstName,
          lastName: coach.lastName,
          description: coach.description,
          hourlyRate: coach.hourlyRate,
          areas: coach.areas,
        });
      }
    }
    context.commit('setCoaches', coaches);
  }
};
