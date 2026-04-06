getBoundingClientRect() అంటే:
element యొక్క position మరియు size
తెలుసుకోవడానికి వాడతారు

.top అంటే:
element యొక్క top edge
viewport (screen) నుండి ఎంత దూరంలో ఉందో

┌─────────────────┐ ← screen top (0)
│                 │
│                 │ ← aboutTop (ఇక్కడ వరకు distance)
├─────────────────┤ ← about section top
│  about section  │
└─────────────────┘

scroll చేసినప్పుడు:
section పైన ఉంటే → aboutTop positive (+)
section కిందకి వెళ్తే → aboutTop negative (-)



window.innerHeight = screen height (px లో)

లెక్క:
aboutTop / window.innerHeight = ratio (-1 to 1 మధ్య)

ఆ ratio కి * 40 చేస్తే:
offset = -40px to +40px మధ్య వస్తుంది

ఎందుకు 40?
bg ఎంత కదలాలో అది చెప్తుంది
40 తక్కువగా → slow parallax
40 ఎక్కువగా → fast parallax

Example:
aboutTop = 500px
window.innerHeight = 1000px
ratio = 500/1000 = 0.5
offset = 0.5 * 40 = 20px → bg 20px కదులుతుంది


window.innerHeight = screen height (px లో)

లెక్క:
aboutTop / window.innerHeight = ratio (-1 to 1 మధ్య)

ఆ ratio కి * 40 చేస్తే:
offset = -40px to +40px మధ్య వస్తుంది

ఎందుకు 40?
bg ఎంత కదలాలో అది చెప్తుంది
40 తక్కువగా → slow parallax
40 ఎక్కువగా → fast parallax

Example:
aboutTop = 500px
window.innerHeight = 1000px
ratio = 500/1000 = 0.5
offset = 0.5 * 40 = 20px → bg 20px కదులుతుంది