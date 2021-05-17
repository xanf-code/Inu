import { reactive } from "vue";

const state = reactive({
    showNavBar: false,
    mobileView: false,
})

export default function toggleNavBar() {
    const methods = {
        handleView() {
            state.mobileView = window.innerWidth <= 767;
        },
        onMenuClick() {
            state.showNavBar = !state.showNavBar
        }
    }
    return {
        state,
        methods,
    };
}