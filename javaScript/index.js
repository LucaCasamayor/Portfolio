document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('click', () => {
            const existingBox = document.querySelector('.description-box');
            if (existingBox) existingBox.remove();

            const box = document.createElement('div');
            box.className = 'description-box';
            box.textContent = card.dataset.description;

            const rect = card.getBoundingClientRect();
            box.style.top = `${rect.bottom + window.scrollY + 10}px`;
            box.style.left = `${rect.left + window.scrollX}px`;

            document.body.appendChild(box);

            setTimeout(() => {
                box.remove();
            }, 4000);
        });
    });
});
