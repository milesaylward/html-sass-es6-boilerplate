import message from './helloWorld';
import '../scss/main.scss';

const paragraph = document.createElement('p');
paragraph.innerHTML = `${message} yeah`;

document.body.prepend(paragraph);
