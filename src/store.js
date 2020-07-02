import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        notes: []
    },
    mutations: {
        ...vuexfireMutations,
    },
    actions: {
        bindNotes: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('notes', db.collection('notes'))
        }),
        addNote: firestoreAction((context, payload) => {
            return db.collection('notes').add(payload)
        }),
        deleteNote: firestoreAction((context, payload) => {
            db.collection('notes')
                .doc(payload)
                .delete()
        }),
        updateNote: firestoreAction((context, payload) => {
            db.collection('notes')
                .doc(payload.id)
                .set(payload)
        }),
    }
})
