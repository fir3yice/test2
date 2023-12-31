function handlePageShowEvent(event) {
    var historyTraversal = event.persisted ||
        (typeof window.performance !== "undefined" &&
            window.performance.navigation.type === 2);
    if (historyTraversal) {
        window.location.reload();
    }
}

window.addEventListener("pageshow", handlePageShowEvent);