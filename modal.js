window.onload = () => {
    const modal = document.getElementById("myModal");
    const closeModal = document.getElementById("closeModal");

    // Show the modal with smooth transition
    setTimeout(() => {
        modal.classList.remove("hidden");
        modal.classList.add("opacity-100", "scale-100");
    }, 100); // Slight delay to trigger the transition

    // Close the modal when the button is clicked
    closeModal.onclick = () => {
        modal.classList.remove("opacity-100", "scale-100");
        modal.classList.add("opacity-0", "scale-95");
        setTimeout(() => {
            modal.classList.add("hidden");
        }, 300); // Delay before hiding the modal completely
    };
};