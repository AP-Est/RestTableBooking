export default function createLinkElement(link: string, className?: string): HTMLAnchorElement {
    const element = document.createElement('a');
    element.href = link;
    element.classList.add('link');
    if (className) element.classList.add(className);
    return element;
}
