import { reactive } from "vue";

const state = reactive({
    dropdown: false,
    mobileView: false,
})

export default function toggleNavBar() {
    const methods = {
        handleView() {
            state.mobileView = window.innerWidth <= 767;
        },
    }
    return {
        state,
        methods,
    };
}