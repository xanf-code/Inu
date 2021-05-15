import { ref } from "vue";
import axios from 'axios';

export default function whaleWatch() {
    const results = ref([]);
    const loading = ref(true);

    const whaleAPILoad = async () => {
        try {
            const whaleResponse = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://api.watcher.guru/holders/8076c74c5e3f5852037f31ff0093eeb8c8add8d3?includePrev=true`,
                {
                    headers: {
                        'Accept': '*/*',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                        'Access-Control-Allow-Origin': 'https://watcher.guru',
                    }
                }
            );
            results.value = whaleResponse.data.data;
            loading.value = false;
        } catch (error) {
            console.log(error)
        }
    };
    return {
        results,
        loading,
        whaleAPILoad,
    };
}