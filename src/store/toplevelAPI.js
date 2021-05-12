import { ref } from "vue";

export default function topLevelAPI() {
    const results = ref([]);
    const loading = ref(true);

    const loadAllAPI = async () => {
        const individualResponse = await fetch(
            `https://insidershibu.herokuapp.com/scrapedata/getInsiderData?limit=30`
        );
        const response = await individualResponse.json();
        results.value = response.result;
        loading.value = false;
    };
    return {
        results,
        loading,
        loadAllAPI,
    };
}
