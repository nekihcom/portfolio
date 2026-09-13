export type IconMode = 'stroke' | 'fill';

export interface IconDef {
  mode: IconMode;
  markup: string;
}

export const icons = {
  location: {
    mode: 'stroke',
    markup:
      '<path d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  },
  calendar: {
    mode: 'stroke',
    markup: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/>',
  },
  x: {
    mode: 'fill',
    markup:
      '<path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.5L4.7 22H1.6l8.2-9.4L1 2h6.9l4.9 5.9L18.9 2z"/>',
  },
  github: {
    mode: 'fill',
    markup:
      '<path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .6 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 22 12.2C22 6.6 17.5 2 12 2z"/>',
  },
  linkedin: {
    mode: 'fill',
    markup:
      '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.5 9.75h4.96V21H2.5V9.75zm7.5 0h4.75v1.54h.07c.66-1.2 2.28-2.46 4.7-2.46 5.03 0 5.96 3.15 5.96 7.25V21h-4.96v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21h-4.96V9.75z"/>',
  },
  instagram: {
    mode: 'stroke',
    markup: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1"/>',
  },
  mail: {
    mode: 'stroke',
    markup: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  },
  'external-link': {
    mode: 'stroke',
    markup:
      '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/>',
  },
  'arrow-right': {
    mode: 'stroke',
    markup: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  },
} as const satisfies Record<string, IconDef>;

export type IconName = keyof typeof icons;
