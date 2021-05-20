import { reactive } from "vue";
import axios from "axios";

const state = reactive({
    results: [],
    loading: true,
    limit: 10,
    totalPages: 1,
    currentPage: 1,
    length: null,
    isNext: true,
    isLast: false,
});

export default function whaleWatch() {
    const whaleAPILoad = async (coin, page) => {
        try {
            const whaleResponse = await axios.get(
                `https://insiderwhales.herokuapp.com/api/v1/${coin}/data?page=${page}&pagination=15`,
                {
                    headers: {
                        Accept: "*/*",
                        "Access-Control-Allow-Headers":
                            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                    },
                }
            );
            state.results = whaleResponse.data.result;
            state.totalPages = whaleResponse.data.totalPages;
            state.currentPage = whaleResponse.data.currentPage;
            state.length = whaleResponse.data.length;
            state.isLast = whaleResponse.data.isLastPageExist;
            state.isNext = whaleResponse.data.isNextPageExist;
            state.limit = 10;
        } catch (error) {
            console.log(error);
        } finally {
            state.loading = false;
        }
    };
    return {
        state,
        whaleAPILoad,
    };
}
