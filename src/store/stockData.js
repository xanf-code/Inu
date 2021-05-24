import { reactive } from "vue";
import axios from "axios";

const state = reactive({
    results: [],
    error: " ",
});

export default function StockData() {
    const stockDataAPI = async (ticker) => {
        try {
            const response = await axios.get(
                `https://intradaystocks.herokuapp.com/api/stocks/${ticker}`
            );
            if (response.data.status === 200) {
                state.results = response.data.result;
            }
            state.error = response.data.status;
        } catch (error) {
            console.log(error);
        }
    };
    return {
        state,
        stockDataAPI,
    };
}
