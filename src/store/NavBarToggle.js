import { ref } from "vue";

export default function toggleNavBar() {
    const mobileView = ref(false);
    const showNavBar = ref(false);

    function handleView() {
        mobileView.value = window.innerWidth <= 990;
    }

    function onMenuClick() {
        showNavBar.value = !showNavBar.value
    }

    return {
        mobileView,
        showNavBar,
        handleView,
        onMenuClick,
    };
}
