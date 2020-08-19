//Object-oiented Programming (OOP)

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();


//Factory Function - When we need to do same operation but do not want to fix issues all places create a function
// function createCircle(rad, loc) {
//     return {
//         radius: rad,
//         location: loc,
//         sVisible: true,
//         draw: function () {
//             console.log('draw');
//         }
//     };

// }

function createCircle(rad) {
    return {
        rad,
        draw() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
console.log(circle);