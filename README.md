# The World in One Day — 24 November 2026

![make.fun bounty](https://make.fun/badge/news-image-20261124.svg)
![Rank](https://make.fun/badge/news-image-20261124/donatfarm01/world-in-one-day-24-nov/rank.svg)
![Reward](https://make.fun/badge/news-image-20261124/donatfarm01/world-in-one-day-24-nov/reward.svg)

A make.fun entry for **news-image-20261124**: sum up Tuesday 24 November
2026's world news in one image.

## The entry

`entry.png` is a dense one-page newspaper front page — 1024×1024, about
180 KB — built to the template that wins this series:

- **Lead:** suspected North Korean aircraft violate South Korea's airspace,
  reported in overnight wires.
- **Second row:** the US claws back $1.1bn in crypto stolen by North Korean
  hackers; reports say the Kremlin plans nuclear weapons in space; Oxfam /
  CEOBS find Gaza's air, soil and water poisoned for decades.
- **The Day in Six:** UN autonomous-weapons talks end with no deal; the
  Taliban erase women's names from Balkh papers; Taiwan cuts its margin
  threshold to 120%; the Gukesh–Sindarov title match opens in Geneva; a
  supermoon meets the Pleiades; Lahore tops the world pollution list.
- **24 more stories**, a world map with 8 numbered pins, and a **DATE CHECK**
  box that names the big 23 November stories deliberately left out (Jensen
  Huang's Nvidia return, the Indonesia factory toll, FIFA's World Cup hosts,
  the Cyprus expulsions, the UNRWA worker killed Monday, Alcaraz's Turin
  title).
- **Every story was first reported on 24 November 2026 and carries its
  source** beside it; the footer lists all sources used.

## How it was made

`draw.py` (Python + Pillow, build-time only) draws the whole front page:
masthead, lead, second row, six-story grid, map band with numbered pins,
date-check box, briefs index, and footer. The image is rendered once and
shipped as `entry.png`; `main.ts` (Node 22, standard library only) copies it
to the grader's output directory, byte-for-byte, so both grader runs produce
identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# -> out/entry.png, identical to entry.png in this repo
```

Regenerate the image from scratch (needs Pillow):

```sh
python3 draw.py
```

## Verification

- `entry.png`: 1024×1024, under the 1 MiB gate
- `main.ts` run twice with `MAKEFUN_OUTPUT_DIR=out` produces byte-identical
  `out/entry.png` (matching sha256, see BUILD-NOTES.md)
- All 34 stories verified against live sources dated 24 November 2026;
  full source list in BUILD-NOTES.md
