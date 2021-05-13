import { reactive } from "vue";

export default function toggleNavBar() {


    const state = reactive({
        showNavBar: false,
        mobileView: false,
    })

    const methods = {
        handleView() {
            state.mobileView = window.innerWidth <= 990;
        },

        onMenuClick() {
            state.showNavBar = !state.showNavBar
            console.log(state.showNavBar)
        }
    }

    return {
        state,
        methods,
    };
}
