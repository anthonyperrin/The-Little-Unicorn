//Keys handles the user's pressed keys
let Keys = {
    up: false,
    left: false,
    right: false,
    down: false,
    spaceBar: false
};

//When the user presses a key it updates the Keys object
$(document).bind('keydown', (e) => {
    let c = e.keyCode;

    if (c === 37) Keys.left = true;
    if (c === 38) Keys.up = true;
    if (c === 39) Keys.right = true;
    if (c === 40) Keys.down = true;
    if (c === 32) Keys.spaceBar = false;
});

$(document).bind('keyup', (e) => {
    let c = e.keyCode;

    if (c === 37) Keys.left = false;
    if (c === 38) Keys.up = false;
    if (c === 39) Keys.right = false;
    if (c === 40) Keys.down = false;
    if (c === 32) Keys.spaceBar = false;
});

//Every 20 ms, the Keys object is sent to the move method
function main() {
    if (Keys.spaceBar) Unicorn.jump();
    else Unicorn.move(Keys);
}

setInterval(main, 20);

class Unicorn {
    //The move method moves the unicorn depending on the Keys object she receives in its parameters
    static move(Keys) {
        const tLU = $('#the-little-unicorn');
        //Up arrow
        //And the unicorn didn't get through the top border
        if (Keys.up && tLU.css('top').substring(0, tLU.css('top').length - 2) > 0) {
            tLU.attr('class', 'back');
            tLU.css({top: parseInt(tLU.css('top')) - 10});
        }
        //Down arrow
        //And the unicorn didn't get through the bottom border
        if (Keys.down) {
            tLU.attr('class', 'front');
            tLU.css({top: parseInt(tLU.css('top')) + 10});
        }
        //Left arrow
        //And the unicorn didn't get through the left border
        if (Keys.left && tLU.css('left').substring(0, tLU.css('left').length - 2) > 0) {
            tLU.attr('class', 'left');
            tLU.css({left: parseInt(tLU.css('left')) - 10});
        }
        //Right arrow
        //And the unicorn didn't get through the right border
        if (Keys.right) {
            tLU.attr('class', 'right');
            tLU.css({left: parseInt(tLU.css('left')) + 10});
        }
    }
    static jump() {
        return 'oui'
    }
}

