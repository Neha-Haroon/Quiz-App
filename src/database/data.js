export default [
    {
        id: 1,
        question: "React is mainly used for building ___.",
        options: [
            'Database',
            'Connectivity',
            'User interface',
            // 'Design Platform',
        ]
    },
    {
        id: 2,
        question: "The lifecycle methods are mainly used for ___.",
        options: [
            'keeping track of event history',
            'enhancing components',
            'freeing up resources',
            // 'none of the above',
        ]
    },
    {
        id: 3,
        question: "___ can be done while multiple elements need to be returned from a component.",
        options: [
            'Abstraction',
            'Wrapping',
            'Insulation',
            // 'Packing',
        ]
    },
    {
        id: 4,
        question: "What does the toString() method return?",
        options: [
            'Return Object',
            'Return String',
            'Return Integer'
        ]
    },
    {
        id: 5,
        question: "Which is the right way of accessing a function fetch() from an h1 element in JSX?",
        options: [
            '<h1>{fetch()}</h1>',
            '<h1>${fetch()}</h1>',
            '<h1>{fetch}</h1>',
            // '<h1>${fetch}</h1>',
        ]
    }
];

export const answers = [0, 1, 2, 1, 0];