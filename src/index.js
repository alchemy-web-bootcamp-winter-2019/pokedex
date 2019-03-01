import data from '../data/pokedex.js';
import loadPoke from './load-poke.js';
import loadPaging from './paging-component.js';

loadPoke(data);

loadPaging(data, 'cheese');