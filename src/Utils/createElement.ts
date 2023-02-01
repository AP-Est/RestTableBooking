export default function createElement(tag: string, className?: string, className2?: string): HTMLElement {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (className2) element.classList.add(className2);

    return element;
}
