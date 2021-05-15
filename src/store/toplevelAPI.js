import { ref } from "vue";
import axios from 'axios';

export default function topLevelAPI() {
    const results = ref([]);
    const loading = ref(true);

    const loadAllAPI = async () => {
        try {
            const individualResponse = await axios.get(
                `https://insidershibu.herokuapp.com/scrapedata/getInsiderData?limit=30`
            );
            results.value = individualResponse.data.result;
            loading.value = false;
        } catch (e) {
            console.error(e);
        }
    };
    return {
        results,
        loading,
        loadAllAPI,
    };
}
