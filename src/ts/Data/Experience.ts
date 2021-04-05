// Data for Experience cards

import { ExperienceData } from '../Classes/Elements/Experience'

export const Experience: ExperienceData[] = [
    {
        svg: 'apps4you.svg',
        link: 'https://www.apps4you.org',
        company: 'Apps4You ',
        location: 'Remote',
        position: 'Software Engineer',
        begin: 'October 2020',
        end: 'Present',
        flavor: 'I am working part-time with the startup Apps4You on cars rental project.',
        roles: [
            'Developing API service using Spring Boot.',
            'Developing front-end application using Angular.',
        ]
    },
    {
        svg: 'orange.svg',
        link: 'https://www.orange.tn',
        company: 'Orange',
        location: 'Tunis, Tunisia',
        position: 'Web Developer Intern',
        begin: 'July 2020',
        end: 'September 2020',
        flavor: "For my summer internship, I have participated in Orange Summer Challenge program (OSC) in partnership with Google. \n"
                + 'I was the full-stack web developer for Ubo project, a console dedicated to autism treatment.',
        roles: [
            'Developing an API using Express.js and MongoDB.',
            'Developing a dashboard using React.',
            'Developing a landing page website.',
        ]
    },
    {
        svg: 'arsela.svg',
        link: 'https://www.arsela.co/en/',
        company: 'Arsela Technologies',
        location: 'Remote',
        position: 'Web Developer Developer',
        begin: 'July 2020',
        end: 'Auguest 2020',
        flavor: 'Optical Document Character Recognition Project Development and their conversion into appropriate formats.',
        roles: [
            'Developing an API using Express.js and MongoDB.',
            'Developing an OCR microservice using Tesseract.',
            'Developing a dashboard using React.',
        ]
    },
]
