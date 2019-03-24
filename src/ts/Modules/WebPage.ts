// Namespace with HTML Elements for JavaScript interaction

import { DOM } from './DOM'
import Section from '../Classes/Section'

// Logo parts
export let Logo = {
    Inner: DOM.getFirstElement('header.logo .image svg .inner'),
    Outer: DOM.getFirstElement('header.logo .image svg .outer')
}

// Container for text over canvas
export let CanvasText: HTMLElement = DOM.getFirstElement('div.canvas div.canvas-text-container');

// Menu components
export let Menu = {
    Hamburger: DOM.getFirstElement('header.menu .hamburger')
}

// All section tags
export let Sections = new Object();
for(let element of Array.from(DOM.getElements('section'))) {
    Sections[element.id] = new Section(element);
}