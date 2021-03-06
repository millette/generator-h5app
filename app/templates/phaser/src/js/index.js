import Boot from './states/boot';
import Game from './states/game';
import Menu from './states/menu';
import Preloader from './states/preloader';

const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '<%=projectName%>-game');

game.state.add('boot', new Boot());
game.state.add('game', new Game());
game.state.add('menu', new Menu());
game.state.add('preloader', new Preloader());

game.state.start('boot');
