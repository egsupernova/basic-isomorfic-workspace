import './css/index.css';
import {testVar} from  './app'
console.log(`HOLAAA ${testVar}`);


if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
}

if (module.hot) {
    module.hot.accept();
}

