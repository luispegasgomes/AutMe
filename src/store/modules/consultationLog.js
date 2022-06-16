export default {
    state: {
        userclick: localStorage.userclick ? JSON.parse(localStorage.userclick) : "",
        notes: [],
        appointments: [],
    },
    getters: {
        getUserClick: (state) => state.userclick,
        getAppointments: (state) => state.appointments[0],
        getNotes: (state) => state.notes[0],
    },
    mutations: {
        SET_CLICKED_CHILD(state, payload) {
            state.userclick = payload
        },

        SET_APPOINTMENTS(state, payload) {
            state.appointments = []
            state.appointments.push(payload.user.appointments)
        },

        SET_NOTES(state, payload) {
            state.notes = []
            state.notes.push(payload.user.notes)
        },
    },
    actions: {
        async loadAppointments(context, data) {
            const response = await fetch(`https://api-autme-new-nodejs.herokuapp.com/users/${data}/appointments`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                context.commit("SET_APPOINTMENTS", await response.json());
            } else {
                const err = await response.json()
                throw new Error(err.error)
            }
        },
        async loadNotes(context, data) {
            const response = await fetch(`https://api-autme-new-nodejs.herokuapp.com/users/${data}/notes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                context.commit("SET_NOTES", await response.json());
            } else {
                const err = await response.json()
                throw new Error(err.error)
            }
        },
        async addNoteAPI(context, data) {
            const response = await fetch(`https://api-autme-new-nodejs.herokuapp.com/users/${data.allUserUsername}/notes`, {
              method: 'POST',
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data)
            })
            if (!response.status == 201) {
              const err = await response.json()
              throw new Error(err.error)
            }
          },
    },
};