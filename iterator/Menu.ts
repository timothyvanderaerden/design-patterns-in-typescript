import { Iterator } from './Iterator';

export interface Menu {
	createIterator(): Iterator;
}
