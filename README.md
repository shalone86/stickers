# Free Catholic Media (hub page)

One static page that points to the six sites. No build step, no scripts, no
third-party requests, and it collects no visitor data.

- `index.html`: the page, with all CSS inline.
- `fonts/`: Cinzel and Cormorant Garamond (SIL Open Font License), copied from
  the methodius.media repo so the hub matches it and loads nothing from Google.
- `img/`: one 960×720 WebP per tile, about 50 KB each.

## Images

| Tile | Source | Rights |
| --- | --- | --- |
| `rosary.webp` | *The Annunciation*, Albert Bouts, 1480 (Illuminated Rosary cover, via sdcason.com) | Public domain |
| `gallery.webp` | *The Nativity* triptych, centre panel (sdcason.com) | Public domain |
| `sketchbook.webp` | Rerum Novarum §7 sketch from catholicsketchbook.com, recoloured light-on-dark | Own work |
| `courses.webp` | Gold ring with the Lucide `book-open` icon | Lucide icons, ISC license |
| `music.webp` | `hero.jpg` from the methodius.media repo | Same as the Methodius site |
| `kids.webp` | *Jesus Is Lord* video thumbnail from kids.sdcason.com, cropped | Own work |

## Hosting

Any static host works. On Cloudflare Pages or GitHub Pages, publish this folder
and point a subdomain such as `hub.sdcason.com` at it. Then add an "Everything
I make" link on each site.
