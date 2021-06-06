import { ref } from "vue";
import axios from "axios";

const results = ref([]);
const loading = ref(true);
export default function topLevelAPI() {
    const loadAllAPI = async (value, code) => {
        try {
            const individualResponse = await axios.get(
                `https://screenerapi.herokuapp.com/data?page=${value}&country=${code}`
            );
            results.value.push(...individualResponse.data.result);
        } catch (e) {
            console.error(e);
        } finally {
            loading.value = false;
        }
    };
    return {
        results,
        loading,
        loadAllAPI,
    };
}
