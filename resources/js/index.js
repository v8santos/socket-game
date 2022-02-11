const settings = {
    screen: {
        size: [window.innerWidth * 0.8, window.innerHeight * 0.6]
    }
};

const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

class Player
{
    constructor(width = 10, height = 10)
    {
        this.width = width;
        this.height = height;
        this.x = (settings.screen.size[0] / 2) - width / 2;
        this.y = (settings.screen.size[1] / 2) - height / 2;
        this.speed = 10;
    }

    sayHello()
    {
        alert('Hello');
        return 'Hello';
    }

    draw()
    {
        context.fillStyle = "#fcba03";
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    move(x = 0, y = 0)
    {
        context.clearRect(0, 0, settings.screen.size[0], settings.screen.size[1]);
        this.x += (this.speed * x);
        this.y += (this.speed * y);
        this.draw();
    }
}

function keyAPI(event, player)
{
    switch(event.keyCode) {
        case 37:
            player.move(-1, 0);
        break;
        case 38:
            player.move(0, -1);
        break;
        case 39:
            player.move(1, 0);
        break;
        case 40:
            player.move(0, 1);
        break;
    };
}

function setup()
{
    if(window.innerWidth < 762) {
        settings.screen.size = [window.innerWidth, window.innerHeight * 0.99];
    }
    canvas.width = settings.screen.size[0];
    canvas.height = settings.screen.size[1];

    const player = new Player();

    player.draw(context);

    document.addEventListener('keydown', (event) => {
        keyAPI(event, player);
    });
}


setup();