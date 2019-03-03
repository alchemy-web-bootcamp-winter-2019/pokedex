import pokedex from '../data/pokedex.js';
import { loadPokedex } from '../src/template-component.js';
import loadPaging from '../src/paging-component.js';

loadPokedex(pokedex);

loadPaging(900);