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
]);


