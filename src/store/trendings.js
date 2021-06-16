import { reactive } from "vue";
import axios from "axios";

const state = reactive({
    results: [],
    loading: true,
    length: null,
});

export default function trendingNow() {
    const trendingAPI = async () => {
        state.loading = true;
        try {
            const response = await axios.get(
                `http://screenerapi.herokuapp.com/trending`
            );
            state.results = response.data.result;
            state.length = response.data.length;
            state.loading = false;
        } catch (e) {
            console.error(e);
        }
    };
    return {
        state,
        trendingAPI,
    };
}
