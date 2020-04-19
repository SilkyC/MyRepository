//Object-oiented Programming (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw();


//Factory Function - When we need to do same operation but do not want to fix issues all places create a function
function createCircle() {
    const mastercircle = {
        radius: 1,
        location: {
            x: 1,
            y: 1
        },
        sVisible: true,
        draw: function () {
            console.log('draw');
        }
    };


}