import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default function individualAPI() {
    const results = ref([]);
    const loading = ref(true);
    const route = useRoute();

    const individualAPILoad = async () => {
        try {
            const individualResponse = await axios.get(
                `https://insidershibu.herokuapp.com/scrapedata/getInsiderData/${route.params.id}`
            );
            results.value = individualResponse.data.result;
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    };
    return {
        results,
        loading,
        individualAPILoad,
        route,
    };
}
