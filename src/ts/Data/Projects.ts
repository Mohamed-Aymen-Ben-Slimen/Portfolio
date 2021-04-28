// Data for Projects cards

import { ProjectData } from '../Classes/Elements/Project'

export const Projects: ProjectData[] = [
    {
        name: 'AR Copy Paste',
        color: '#1b9b00',
        image: 'ar.png',
        type: 'Project',
        date: 'Spring 2021',
        award: null,
        flavor: 'Mobile application that copy objects from the real wolrd and paste it to the virtual world.',
        repo: null,
        external: 'http://www.ubo.tn',
        details: [
            'Developing the mobile application using React Native.',
            'Developing the desktop application using Python and Tkinter',
            'Implementing background removal feature using U^2 algorithm.',
        ],
    },
    {
        name: 'Ubo',
        color: '#3f6bff',
        image: 'ubo.png',
        type: 'Project',
        date: 'Summer 2020',
        award: 'Imagine Cup 2021 world finals and 9th prize of EU: Africa post crisis journey hackathon',
        flavor: 'A smart console with educational games to help children with autism maintain their treatements at home.',
        repo: null,
        external: 'http://www.ubo.tn',
        details: [
            'Developing a dashboard with React.',
            'Developing an API using Express.js and MongoDB.',
            'Developing a landing page website.',
        ],
    },
    {
        name: 'Optical Document Character Recognition',
        color: '#1C1C67',
        image: 'ocr.png',
        type: 'Internship',
        date: 'Summer 2020',
        award: null,
        flavor: 'Optical Document Character Recognition Project Development and their conversion into appropriate formats.',
        repo: null,
        external: null,
        details: [
            'Developing an API using Express.js and MongoDB.',
            'Developing an OCR microservice using Tesseract.',
            'Developing a dashboard using react.',
        ]
    },
    {
        name: 'I-Remember',
        color: '#DB4F54',
        image: 'alz.jpg',
        type: 'Project',
        date: 'Winter 2020',
        award: 'Imagine Cup 2020 world finals',
        flavor: 'I-Remember is mobile application that helps Alzheimer\'s patients and their caregivers.',
        external: 'https://news.microsoft.com/europe/features/i-remember-an-app-that-helps-people-with-alzheimers-recognize-faces-using-ai/?fbclid=IwAR2kbnJH3Q-ah_goiZhzsIMRK_qU2YSaPzXfUlMXauKBRapZq3qlLA6HOy4',
        repo: null,
        details: [
            'Developing an API using Express.js and MongoDB.',
            'Developing face recognition service using Microsoft Azure services.',
        ]
    },
    {
        name: 'Art Style Transfer',
        color: '#FFA500',
        image: 'nst.png',
        type: 'Side Project',
        date: 'Spring 2020',
        award: null,
        flavor: 'Art Style Transfer is a solution for online fast neural style transfer to apply a style to an image.',
        repo: null,
        external: 'https://mohamed-aymen-ben-slimen.github.io/nst/build/',
        details: [
            'Developing neural style transfer model using python.',
            'Developing front-end using React.',
        ]
    },
    {
        name: 'CafeTop',
        color: '#7A69AD',
        image: 'restau.png',
        type: 'Freelance Project',
        date: 'Autumn 2019',
        award: null,
        flavor: 'Restaurant website to make reservations.',
        repo: null,
        external: 'https://mohamed-aymen-ben-slimen.github.io/reastau/docs/',
        details: [
            'Developing front-end using Angular.',
            'Developing API for reservations using Node.js and Express.js.'
        ]
    },
    {
        name: 'Internships management system',
        color: '#29AB87',
        image: 'pfe.png',
        type: 'School Project',
        date: 'Winter 2021',
        award: null,
        flavor: 'We made an internships management system for our institute.',
        repo: null,
        external: null,
        details: [
            'Developing an API using Nest.js and MongoDB.',
            'Developing front-end using Angular.',
            'Developing OAuth authentication.',
        ]
    },
]
