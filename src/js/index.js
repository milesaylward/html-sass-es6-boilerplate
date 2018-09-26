import message from './helloWorld';
import '../scss/main.scss';

if (process.env.NODE_ENV !== 'production') {
    require('file-loader!../index.html')
}

const paragraph = document.createElement('p');
paragraph.innerHTML = `${message} yeah`;

document.body.prepend(paragraph);
