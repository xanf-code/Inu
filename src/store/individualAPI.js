import { ref } from "vue";
import { useRoute } from "vue-router";

export default function individualAPI() {
    const results = ref([]);
    const loading = ref(true);
    const route = useRoute();

    const individualAPILoad = async () => {
        const individualResponse = await fetch(
            `https://insidershibu.herokuapp.com/scrapedata/getInsiderData/${route.params.id}`
        );
        const response = await individualResponse.json();
        results.value = response.result;
        loading.value = false;
    };
    return {
        results,
        loading,
        individualAPILoad,
        route,
    };
}
