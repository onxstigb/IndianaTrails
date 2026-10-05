export function showToast(message, type) {
    const container = document.querySelector("#toast-container");

    const toast = document.createElement("div");

    toast.classList.add("toast");
    toast.classList.add(type);

    let icon = "";

    if (type == "success") {
        icon = "✓";
    }

    if (type == "error") {
        icon = "!";
    }

    if (type == "info") {
        icon = "i";
    }

    if (type == "loading") {
        icon = "⟳";
    }

    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>

        <div class="toast-content">
            <strong>${type.toUpperCase()}</strong>
            <p>${message}</p>
        </div>
    `;

    container.appendChild(toast);

    if (type != "loading") {
        setTimeout(function() {
            toast.classList.add("hide");

            setTimeout(function() {
                toast.remove();
            }, 300);
        }, 4000);
    }

    return toast;
}