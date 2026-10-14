---
workflow: general-video
flow: companion
storyboard: no
message: "Lyrebird turns the videos you saved into the videos you make."
destination: youtube
aspect: 1920x1080
language: en
audience: "Solo marketers, founders and independent creators who make short-form video and judge design instantly"
length: 65s
angle: problem-to-relief product promo
---

## Intent

60-second-style landscape promo for Lyrebird, a mobile app. Save a TikTok → upload → AI breakdown
(hook, shot beats, script, on-screen text, funnel, format) → rewritten as a brief for your brand →
onto a content calendar. Sell relief, not productivity: from a pile of saved videos and quiet guilt to
one clear thing to film this week. Must look designer-made; never like a B2B software demo.
Motion language: hear → take apart → rebuild in a new voice. Full scene-by-scene spec: the user's
"Lyrebird hyperframes prompt" (pasted in chat), mirrored in STORYBOARD.md.

**100% motion design.** No real people, no photos, no filmed footage, no stock images. Everything is
HTML/CSS/SVG. TikTok videos are illustrated mini-animations starring the mascots.

## Assets

- ../ElevenLabs_…Kristen….mp3 → assets/audio/voiceover.mp3 — the voiceover (63.5s), plays from 0:00.
- ../*.svg app screens → assets/screens/ — source of truth for UI; rebuild in HTML/CSS.
- ../Lyrebird - Mascots-selection*.png → assets/mascots/ — reference only; rebuild as inline SVG.

## Customizations

- Length ~65s (VO 63.51s + ≥1s end-card hold); retime every scene to voiceover-words.json.
- Music: DEFERRED (user, 2026-10-15). HeyGen CLI has no Windows build; options when resuming: user-supplied
  royalty-free mp3, WSL + heygen CLI, or local MusicGen. Plan: quiet 0–14.78s, lift at 14.78s, fuller from 25.06s,
  ducked 12–15dB under VO, 1.5s fade out, nudge big moments onto beats (≤3 frames).
- SFX layer in place: 104 locally generated cues (assets/sfx), −18 to −24dB, cue list in index.html between fx markers.
- No captions (user removed them). Big kinetic type carries key phrases.
- ~12 illustrated 9:16 thumbnails reused in camera roll, library, and saved pile.
- Handle is @dailygrind (not @dailygrind.amy). Green mascot = @hearthcoffee creator (weak, slow,
  peach bg, rotating coffee bag, 193 views). Pink mascot = @dailygrind (punchy, lavender bg, sip →
  wince, "MISTAKE #1" overlay, 2.4M).

## Notes

- F3 must stay calm: no mascot, no zoom ping-pong; one big save moment, steady phone for upload.
- Review checkpoints: stop for user review after scenes 1–4, 5–6, and 7–12; self-check 2–3 stills per scene.
- Hard rules: no engagement numbers inside Lyrebird UI; no AI-generated footage; no team imagery;
  TikTok only (generic player, no TikTok logo); no particles/neural lines/AI-magic effects; ink text
  on every pastel; every text visible ≥1.2s; no photos/footage/real people anywhere.
- Tokens: bg #FBF7F4, ink #33241C, ink-2 #54423A, muted #8A8280, line #EFEAE5, card #FFF; green
  #DFEEC8, lavender #DCD4F5, peach #FBDCC4, blue #D6E5F4, pink #F7D9E3; gradient #D3CBF2→#ECE7FA
  end card only. Sora (headings) + Inter (UI).
