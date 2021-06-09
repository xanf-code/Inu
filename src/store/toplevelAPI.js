import { reactive } from "vue";
import axios from "axios";

const state = reactive({
    results: [],
    loading: true,
    error: "",
    totalPages: 1,
    currentPage: 1,
    length: null,
    isNext: true,
    isLast: false,
    dataPresent: false,
});

export default function topLevelAPI() {
    const loadAllAPI = async (value, code) => {
        try {
            state.dataPresent = false;
            state.error = '';
            const individualResponse = await axios.get(
                `https://screenerapi.herokuapp.com/data?page=${value}&country=${code}`
            );
            const arrayData = individualResponse.data;
            if (arrayData.length > 0) {
                state.results = arrayData.result;
                state.totalPages = arrayData.totalPages;
                state.currentPage = arrayData.currentPage;
                state.length = arrayData.length;
                state.isLast = arrayData.isLastPageExist;
                state.isNext = arrayData.isNextPageExist;
                state.dataPresent = true;
                state.loading = false;
            }
            else {
                state.dataPresent = false;
                state.loading = false;
                state.results = [];
                state.error = "No data found. Please try again later";
            }
        } catch (e) {
            console.error(e);
        }
    };
    return {
        state,
        loadAllAPI,
    };
}
