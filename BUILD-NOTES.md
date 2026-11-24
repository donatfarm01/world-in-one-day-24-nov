Build notes — The World in One Day, Tuesday 24 November 2026

What this is: a make.fun entry for the news-image-20261124 bounty. The
deliverable is a single 1024 by 1024 PNG front page that sums up the world's
news of Tuesday 24 November 2026. Thirty-four stories in all: one lead, three
in the second row, six in the day grid, and twenty-four one-line briefs. Every
story was first reported on 24 November 2026 and is named with its source
beside it.

How the date was handled: the day was only minutes old in UTC when the build
started, so the roundups dated 24 November mostly carried Monday's news. The
big Monday stories were checked one by one and deliberately left out of the
story count: Jensen Huang's return as Nvidia chief, the Indonesia factory death
toll confirmed at 24, FIFA naming the Women's World Cup hosts for 2031 and
2035, Cyprus expelling two Russian diplomats, the UNRWA worker killed in
Monday's Gaza strike, and Alcaraz winning the ATP Finals on Sunday. They are
named in the DATE CHECK box on the page itself, with their true dates, so the
image is honest about which day it sums up.

Sources used: Reuters, Al Jazeera, The Times of India, The Ledger Asia,
Invezz, Oxfam and the Conflict and Environment Observatory, plus overnight wire
roundups. Each story's wording was kept close to what its source reported, with
no invented figures and no speculation presented as fact.

How it was built: draw.py renders the page with Pillow and the DejaVu fonts
that ship with the system. The layout flows top to bottom from a cursor so no
section can overlap the next. The finished image ships as entry.png, and
main.ts copies it to the grader output directory. The entry program uses only
the Node standard library, reaches no network, and writes the same bytes on
every run.

Verification: the image is 1024 by 1024 pixels and under the one mebibyte gate.
Running main.ts twice with a fresh output directory produced byte-identical
files with matching sha256 hashes. The kit check was run from the kit
directory; everything passed except transcripts present, which is expected
because the parent bundles the transcripts at submit time.
