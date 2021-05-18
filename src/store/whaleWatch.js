import { reactive } from "vue";
import axios from "axios";

const state = reactive({
    results: [],
    loading: true,
    totalPage: null,
});

export default function whaleWatch() {
    const whaleAPILoad = async (coin, page) => {
        try {
            const whaleResponse = await axios.get(
                `https://insiderwhales.herokuapp.com/api/v1/${coin}/data?page=${page}&pagination=10`,
                {
                    headers: {
                        Accept: "*/*",
                        "Access-Control-Allow-Headers":
                            "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                    },
                }
            );
            state.results = whaleResponse.data.result;
            state.totalPage = whaleResponse.totalPages;
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
