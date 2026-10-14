---
message: "Lyrebird turns the videos you saved into the videos you make."
audience: "Solo marketers, founders, independent creators"
mode: collaborative
canvas: 1920x1080 @ 30fps
duration: 65.0
music: "clean upbeat tech-promo bed; sparse 0–14.78, lift at 14.78, fuller from 25.06, out over last 1.5s"
---

Source of truth for content and per-scene direction: the user's Lyrebird build prompt (sections 1–8)
plus the 100%-motion-design update recorded in BRIEF.md. Timings below are trued to voiceover-words.json.
Shared look/mascot/thumbnail code: src/lib.js + src/base.css, inlined into each frame by src/build.mjs.

## Frame 1
status: outline
src: compositions/f1-problem.html
window: 0.00–14.78 (brief scenes 1–3)
rules: spring-pop-entrance, vertical-spring-ticker, counting-dynamic-scale, press-release-spring, sine-wave-loop
beats:
- 0.0 @hearthcoffee player springs up (back.out); illustrated slow coffee-bag loop; views tick 187→191→193.
- 0.6–3.4 green mascot proud → pull-to-refresh bounce ×2, spinner over player, still 193 → smile→flat, glance, deflate. "hundreds" @3.03.
- 4.17 @dailygrind player whips in from right (skew, no blur); first player shifts left, dims 70%.
- 7.33–8.68 view counter slot-rolls 0→2.4M ("2.4" @7.54); mascot looks right, O-mouth surprise hop.
- 12.21 "hook"; 13.04 "first three seconds": timeline bars + lavender 0:00–0:03 brackets wipe; hook caption scales 1.05; mascot nods ×2.

## Frame 2
status: outline
src: compositions/f2-intro.html
window: 14.78–17.02 (scene 4)
rules: card-morph-anchor (ink circle wipe from player centre), spring-pop-entrance (5 mascots, 0.06 stagger), waterfall-entry (wordmark)
beats: ink circle expands from @dailygrind player centre → wordmark rises @15.52 "Lyrebird" → mascots pop → circle contracts to a point revealing frame 3. Music lift @14.78.

## Frame 3
status: outline
src: compositions/f3-save-upload.html
window: 17.02–25.06 (scenes 5–6)
rules: cursor-click-ripple (tap indicator), stat-bars-and-fills (progress ring), anchored-layout-expand (sheet), reactive-displacement (grid shift), vertical-spring-ticker (48→49)
beats:
- 17.02 phone left third; @dailygrind player; 18.76 "save" share sheet up, tap "Save video", ring → check.
- 19.48 "camera roll": grid of illustrated thumbnails, new one drops into cell 1; green mascot beside phone bounces.
- 21.90 "upload": Lyrebird library (48 saved, 12 untouched); tap +, picker sheet, tap @dailygrind thumb ✓, Upload.
- 24.22 "library": card slots into position 1, others shift; "2.4M" fades → 0:31 · saved just now; 48→49.

## Frame 4
status: outline
src: compositions/f4-breakdown.html
window: 25.06–52.34 (scenes 7–12, the hero)
rules: card-morph-anchor (library card lifts out), center-outward-expansion (drawer split), discrete-text-sequence (hook transcribe), stat-bars-and-fills (shot-beat duration bars), vertical-spring-ticker (funnel slot reel, text rolls), multi-phase-camera (slow push 1→1.03), depth-scatter-assemble (flat variant: snap into brief)
beats:
- 25.06 card lifts to left third (640px), phone exits; 25.59 "breaks" card splits into drawers → empty outlined shells in centre.
- 28.68 hook card fills; quote transcribes word by word through 30.56 "word for word".
- 31.04 shot beats rows stagger 0.25s, bars wipe; on-screen-text chip + script card.
- 33.48 funnel reel → locks Awareness; Talking head + Problem → fix pills. 35.86–38.3 hold, push-in 1.03.
- 39.14 Your brand card from right (peach edge); fields fill @40.78 / 41.56 / 42.48 / 43.72; centre cards shift left.
- 45.25 "rewrites": hook words roll out/in (47.28 "new hook"), shot rows flip (48.31), script (48.97), caption (49.93); brand → chip; 50.5 snap into one brief on right third; original fades to 40%.

## Frame 5
status: outline
src: compositions/f5-calendar.html
window: 52.34–59.94 (scenes 13–14)
rules: press-release-spring (Add to calendar), waterfall-entry (calendar rows), card-morph-anchor (brief → cell), depth-scatter-assemble (pile → cells), spring-pop-entrance
beats: 52.34 press; Oct 2026 grid builds row by row; 53.4 brief flies into Thu 22 → "Bitter coffee hook" + "To film". 55.22 pull back; thumbnail pile drops, tumbles; 56.8–59.0 thumbnails snap into cells → coloured chips; green mascot bounces in, happiest squash @59.39.

## Frame 6
status: outline
src: compositions/f6-endcard.html
window: 59.94–65.00 (scene 15)
rules: waterfall-entry (wordmark/line), css-marker-patterns highlight ("make it your own" green), spring-pop-entrance (5 mascots), sine-wave-loop (idle bob + blinks)
beats: lavender gradient wipes in; wordmark @59.94; line @61.2; highlight @62.55; mascots pop; hold ≥1s.

## Captions
src: compositions/captions.html
window: 0–65, word pops (y+12→0, 0.15s), phrase ≤8 words / 2 lines, keyword pastel highlights per brief §5.
Position per frame: lower third centred (F1, F2, F6 none/hidden under wordmark), right third beside phone (F3), bottom band (F4, F5).
