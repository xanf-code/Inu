import { reactive } from "vue";
import axios from "axios";

const state = reactive({
    results: [],
});

export default function StockData() {
    const stockDataAPI = async (ticker) => {
        try {
            const response = await axios.get(
                `https://intradaystocks.herokuapp.com/api/stocks/${ticker}`
            );
            state.results = response.data;
        } catch (error) {
            console.log(error);
        } finally {
            state.loading = false;
        }
    };
    return {
        state,
        stockDataAPI,
    };
}
