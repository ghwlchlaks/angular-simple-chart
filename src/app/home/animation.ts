import {
    state,
    trigger,
    transition,
    style,
    query,
    animate,
    group
} from '@angular/animations';

export const slideInAnimation =
trigger('openClose', [
    transition('open => closed', group([
        query('.jumbotron', [
            style({
                'height': '100vh',
                'background-size' : '100%'
            }),
            animate('1s', style({
                'height': '10vh',
                'background-size' : '25%'
            }))
        ]),
        query('.container', [
            style({
                'padding-top': '25%',
                'padding-left': '15%',
                'padding-right': '15%'
            }),
            animate('1s', style({
                'padding-top': '1%',
                'padding-left': '1%',
                'padding-right': '1%'
            }))
        ]),
        query('.form-control', [
            style({
                'float': 'left',
                'width': '70%',
                'margin-left': '10px'
            }),
            animate('1s', style({
                'float': 'left',
                'width': '60%',
                'margin-left': '10px'
            }))
        ]),
        query('#platformSelect', [
            style({
                'float': 'left',
                'margin-left': '10px',
                'width': '26%'
            }),
            animate('1s', style({
                'float': 'left',
                'margin-left': '10px',
                'width': '20%'
            }))
        ]),
        query('#searchBtn', [
            style({
                'float': 'right',
                'margin-left': '10px',
                'margin-top': '1%',
                'width': '100%'
            }),
            animate('1s', style({
                'margin-left': '10px',
                'margin-top': '0%',
                'width': '10%'
            }))
        ])
    ])),

    transition('closed => open', group([
        query('.jumbotron', [
            style({
                height: '100vh'
            }),
            animate('1s', style({
                height: '100vh'
            }))
        ]),
        query('.container', [
            style({
                'padding-top': '1%',
                'padding-left': '1%',
                'padding-right': '1%'
            }),
            animate('1s', style({
                'padding-top': '25%',
                'padding-left': '15%',
                'padding-right': '15%'
            }))
        ]),
        query('.form-control', [
            style({
                'float': 'left',
                'width': '60%',
                'margin-left': '10px'
            }),
            animate('1s', style({
                'float': 'left',
                'width': '70%',
                'margin-left': '10px'
            }))
        ]),
        query('#platformSelect', [
            style({
                'float': 'left',
                'margin-left': '10px',
                'width': '20%'
            }),
            animate('1s', style({
                'float': 'left',
                'margin-left': '10px',
                'width': '26%'
            }))
        ]),
        query('#searchBtn', [
            style({
                'float': 'right',
                'margin-left': '10px',
                'margin-top': '0%',
                'width': '10%'
            }),
            animate('1s', style({
                'float': 'right',
                'margin-left': '10px',
                'margin-top': '1%',
                'width': '100%'
            }))
        ])
    ]))
]);

// trigger('openClose', [
//     // ...
//     transition('open => closed', [
//         query('.jumbotron', animate(1000, style({
//             height: '100vh',
//             backgroundColor: 'yellow',
//         }))),
//     ]),
//     transition('closed => open', [
//         query('.jumbotron', animate(1000, style({
//             height: '30vh',
//             backgroundColor: 'green',
//         }))),
//     ]),
// ]);

// export const slideInAnimation1 =
// trigger('openCloseMain', [
//     // ...
//     state('open', style({
//       height: '100vh',
//       opacity: 1,
//       backgroundColor: 'yellow'
//     })),
//     state('closed', style({
//       height: '20vh',
//       opacity: 0.5,
//       backgroundColor: 'green'
//     })),
//     transition('open => closed', [
//       animate('1s')
//     ]),
//     transition('closed => open', [
//       animate('1s')
//     ]),
// ]);
