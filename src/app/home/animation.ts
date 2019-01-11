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
                height: '100vh',
                backgroundColor: 'yellow',
            }),
            animate(1000, style({
                height: '30vh',
                backgroundColor: 'green'
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
//       animate('0.5s')
//     ]),
// ]);
