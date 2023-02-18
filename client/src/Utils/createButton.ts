export default function createButton(
    title = 'unnamedButton',
    className?: string,
    className2?: string
): HTMLButtonElement {
    const button = document.createElement('button');
    if (className) button.classList.add(className);
    if (className2) button.classList.add(className2);
    button.textContent = title;
    return button;
}
