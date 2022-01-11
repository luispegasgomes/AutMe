export default {
    state: {
        appointments: localStorage.appointments ?
            JSON.parse(localStorage.appointments) : [{
                    childUsername: "luisgomes",
                    username: 'Filipa Castro',
                    clinic: "Moreira, Maia",
                    date: "23/02/2021",
                    hour: "09:30",
                },
                {
                    childUsername: "luisgomes",
                    name: "filipacastro",
                    clinic: "Moreira, Maia",
                    date: "23/02/2021",
                    hour: "09:00",
                },
            ],
    },
    getters: {

    },
    mutations: {
        SET_NEW_APPOINTMENT(state, payload) {
            state.appointments.push({
                childUsername: payload.username,
                username: payload.psychologist,
                clinic: payload.locationAdress,
                date: payload.date,
                hour: payload.hour,
            });
            localStorage.appointments = JSON.stringify(state.appointments);
        }


    },
    actions: {},
};