import { reactive } from "vue";
// const HttpsProxyAgent = require('https-proxy-agent');

const axiosDefaultConfig = {
    proxy: false,
    // httpsAgent: new HttpsProxyAgent('http://89.109.7.67:443')
};

const axios = require('axios').create(axiosDefaultConfig);
const store = reactive({
    stockResult: [],
    error: " ",
    loadingStockData: false,
});

// const stockResult = ref([]);
// const error = ref("");
// const loadingStockData = ref(false);

export default function StockData() {
    const stockDataAPI = async (ticker) => {
        try {
            store.loadingStockData == true;
            await axios.get(
                `https://intradaystocks.herokuapp.com/api/stocks/${ticker}`, {
                headers: {
                    'authority': 'www.insiderscreener.com',
                    'accept': 'application/json',
                    'accept-language': 'en-US,en-IN;q=0.9,en-UM;q=0.8,en;q=0.7',
                },
            }
            ).then((response) => {
                store.stockResult = response.data.result;
                store.loadingStockData == false;
            });
        } catch (error) {
            store.error = error.message;
        }
    };
    return {
        store,
        stockDataAPI,
    };
}
