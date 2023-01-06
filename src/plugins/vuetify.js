import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#f6303e',
                secondary: '#2e1a46',
                accent: colors.indigo.base, // #3F51B5
                quarter: '461e8c'
            },
        },
    },
});
