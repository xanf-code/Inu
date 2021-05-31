import { ref } from "vue";
import axios from "axios";

export default function companyAPI() {
    const results = ref([]);
    const loading = ref(true);

    const companyAPILoad = async (company) => {
        try {
            const companyResponse = await axios.get(
                `https://screenerapi.herokuapp.com/company/${company}`
            );
            results.value = companyResponse.data.result;
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    };
    return {
        results,
        loading,
        companyAPILoad,
    };
}
