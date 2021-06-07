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
});

export default function topLevelAPI() {
    const loadAllAPI = async (value, code) => {
        try {
            const individualResponse = await axios.get(
                `https://screenerapi.herokuapp.com/data?page=${value}&country=${code}`
            );
            state.results = individualResponse.data.result;
            state.totalPages = individualResponse.data.totalPages;
            state.currentPage = individualResponse.data.currentPage;
            state.length = individualResponse.data.length;
            state.isLast = individualResponse.data.isLastPageExist;
            state.isNext = individualResponse.data.isNextPageExist;
        } catch (e) {
            console.error(e);
        } finally {
            state.loading = false;
        }
    };
    return {
        state,
        loadAllAPI,
    };
}
