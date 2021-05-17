import { ref } from "vue";
import axios from 'axios';

export default function whaleWatch() {
    const results = ref([]);
    const loading = ref(true);

    const whaleAPILoad = async () => {
        try {
            const whaleResponse = await axios.get(
                `https://insiderwhales.herokuapp.com/api/v1/dogecoin/data`,
                {
                    headers: {
                        'Accept': '*/*',
                        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
                    }
                }
            );
            results.value = whaleResponse.data;
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