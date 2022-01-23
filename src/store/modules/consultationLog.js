export default {
    state: {
        userclick: "",
        notes: localStorage.notes ?
            JSON.parse(localStorage.notes) : [{
                childUsername: 'luisgomes',
                date: "23/03/2015",
                description: "descrição",
                title: "Não correu bem",
            }, ],
        appointments: localStorage.appointments ?
            JSON.parse(localStorage.appointments) : [{
                childUsername: "luisgomes",
                username: 'filipacastro',
                clinic: "Moreira, Maia",
                date: "23/02/2021",
                hour: "09:30",
            }, ],
    },
    getters: {
        getUserClick: (state) => state.userclick,
        getUsernameNotes: (state) => state.notes.filter((d) => d.childUsername === state.userclick),
        getUsernameAppointments: (state) => state.appointments.filter((d) => d.childUsername === state.userclick),

    },
    mutations: {
        SET_CLICKED_CHILD(state, payload) {
            state.userclick = payload
        },
        SET_NEW_NOTE(state, payload) {
            state.notes.push({
                childUsername: payload.childUsername,
                date: payload.date,
                description: payload.description,
                title: payload.title,
            });
            localStorage.notes = JSON.stringify(state.notes);
        },
        SET_NEW_APPOINTMENT(state, payload) {
            state.appointments.push({
                childUsername: payload.childUsername,
                username: payload.username,
                clinic: payload.clinic,
                date: payload.date,
                hour: payload.hour,
                avatar: payload.avatar,
            });
            localStorage.appointments = JSON.stringify(state.appointments);
        },




    },
    actions: {},
};