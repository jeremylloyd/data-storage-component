import { readable } from 'svelte/store';

export const storageUsed = readable(500);
export const storageMax = readable(100);
