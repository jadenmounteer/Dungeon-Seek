// TODO: Review where the sprite is on the screen
const SPRITE_WIDTH = 320; // The number of columns divided by the total width in px
const SPRITE_HEIGHT = 340; // The total rows divided by the total height in px
const BORDER_WIDTH = 1;
const SPACING_WIDTH = 1;

function spritePositionToImagePosition(row, col) {
    return {
        x: (
            BORDER_WIDTH +
            col * (SPACING_WIDTH + SPRITE_WIDTH)
        ),
        y: (
            BORDER_WIDTH +
            row * (SPACING_WIDTH + SPRITE_HEIGHT)
        )
    }
}

var canvas = document
            .querySelector('canvas');
var context = canvas
              .getContext('2d');

var spriteSheetURL = './assets/Sprites/2D Character Walking.png';
var image = new Image();
image.src = spriteSheetURL;
image.crossOrigin = true;

// extract all of our frames
var karelright0 = spritePositionToImagePosition(0, 0);
var karelright1 = spritePositionToImagePosition(0, 1);
var karelright2 = spritePositionToImagePosition(0, 2);
var karelleftt0 = spritePositionToImagePosition(1, 0);
var karelleft1 = spritePositionToImagePosition(1, 1);
var karelleft2 = spritePositionToImagePosition(1, 2);

var walkCycle = [
    karelright0,
    karelright1,
    karelright2,
    karelright1
];

var frameIndex = 0;
var frame;
function animate() {
    // once we hit the end of the cycle,
    // start again
    if (frameIndex === walkCycle.length) {
        frameIndex = 0;
    }
    frame = walkCycle[frameIndex];
    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
    context.drawImage(
        image,
        frame.x,
        frame.y,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        0,
        0,
        SPRITE_WIDTH,
        SPRITE_HEIGHT
    );
    frameIndex += 1;
}

image.onload = function() {
    setInterval(animate, 250);
};