import { reactive } from "vue";

const state = reactive({
    dropdown: false,
    mobileView: false,
})

export default function toggleNavBar() {
    const methods = {
        handleView() {
            state.mobileView = window.innerWidth <= 1016;
        },
    }
    return {
        state,
        methods,
    };
}