import { ref } from "vue";
import axios from 'axios';

const results = ref([]);
const loading = ref(true);
export default function topLevelAPI() {

    const loadAllAPI = async (value) => {
        try {
            const individualResponse = await axios.get(
                `https://insidershibu.herokuapp.com/scrapedata/getInsiderData?limit=${value}`
            );
            results.value.push(...individualResponse.data.result);
            console.log(results)
            loading.value = false;
        } catch (e) {
            console.error(e);
        }
    };
    return {
        results,
        loading,
        loadAllAPI
    };
}
