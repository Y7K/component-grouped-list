import Vue from 'vue';

import _GroupedList from './components/GroupedList';

export default {
    registerGlobally() {
        Vue.component('grouped-list', _GroupedList);
    },
};

export const GroupedList = _GroupedList;
