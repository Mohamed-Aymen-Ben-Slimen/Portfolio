// Functions for interacting with the DOM

export namespace DOM {
    // Get array of elements by query
    export function getElements(query: string): NodeListOf<HTMLElement> {
        return document.querySelectorAll(query);
    }

    // Get first element only by query
    export function getFirstElement(query: string): HTMLElement {
        return this.getElements(query)[0];
    }

    // Get height and width of viewport
    export function getViewport(): { height: number, width: number } {
        return {
            height: window.innerHeight || document.documentElement.clientHeight,
            width: window.innerWidth || document.documentElement.clientWidth
        }
    }

    // Scroll to position on the screen
    export function scrollTo(x: number, y: number): void {
        window.scrollTo({
            top: y,
            left: x,
            behavior: 'smooth'
        });
    }
}