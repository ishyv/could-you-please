# CASE UNRESOLVED — Implementation & Creative Specification

**Working title:** `CASE UNRESOLVED`  
**Format:** Short first-person browser narrative experience  
**Target length:** ~15–25 minutes  
**Primary theme:** **Desperation does not always look desperate.**  
**Status:** Foundation / implementation handoff

---

## 1. Project Intent

This is not primarily a puzzle and it is not a programming challenge.

It is a short, intimate, first-person narrative experience about discovering that someone you believed you knew well was under severe emotional, financial, and professional pressure, while presenting a completely different version of himself to you.

The player's relationship to the missing person is the center of the experience.

The criminal activity is not the twist and should not become the moral headline. It is the consequence of a gradual collapse.

The experience should leave the player thinking:

> **“I was close to him. How did I not see this?”**

The ending must not explain what ultimately happened to him.

The player should finish with a theory, not certainty.

The final emotional state is unresolved concern, discomfort, and retrospective guilt — not triumph.

---

# 2. Narrative Premise

The protagonist's closest friend from work has stopped attending meetings and has not replied to messages or email for several days.

This is unusual enough that the protagonist remembers something the friend mentioned long ago: he had once given them remote access to his computer through SSH.

The protagonist sits down alone at night, opens their laptop, connects to the friend's machine, and begins looking for any indication of what happened.

What begins as a practical search slowly becomes an invasion into the friend's private life.

The player discovers four conflicting versions of the same person:

1. **The friend they knew** — warm, funny, reliable, reassuring.
2. **The employee** — falling behind and being pressured by management.
3. **The husband and father** — financially strained, ashamed, defensive, exhausted.
4. **The man around another circle of friends** — gradually becoming willing to participate in serious criminal activity.

The player never finds a definitive answer for his disappearance.

---

# 3. Creative North Star

## 3.1 The central idea

**Desperation does not always look desperate.**

The missing friend must never read like an obviously doomed person from the beginning.

The player should initially recognize the person they know:

- jokes;
- small favors;
- normal complaints;
- memes;
- work gossip;
- casual plans;
- the ability to sound fine.

Only after seeing his other conversations does the player's interpretation of those normal messages change.

A line that was initially funny may become painful later.

That retrospective reinterpretation is one of the most important effects in the story.

---

## 3.2 What this experience is NOT

Do not turn this into:

- a hacker fantasy;
- a terminal challenge;
- a cyberpunk interface;
- a murder mystery with a clean reveal;
- a supernatural horror story;
- a detective evidence-board game;
- a morality tale about a “bad criminal”;
- a long visual novel;
- an escape room with arbitrary locks.

The player is browsing a machine because they are worried about their friend.

The computer contains fragments of a life.

That is enough.

---

# 4. Experience Structure

The story should feel non-linear in interaction but have a clear emotional progression.

Do not show explicit ACT labels to the player.

The following acts are an authoring structure only.

---

## ACT I — “Where are you?”

### Emotional state
Curiosity, concern, familiarity.

### Player expectation
They are going to find a mundane explanation:

- illness;
- computer failure;
- burnout;
- family emergency;
- maybe that he quit.

### Important material

- the chat between the protagonist and the friend;
- mundane desktop/files;
- ordinary recent downloads mixed with work files;
- the first mild signs of financial/work stress.

### Goal
Build the relationship before damaging it.

The missing person must feel like a friend, not a plot device.

---

## ACT II — “I didn't know this.”

### Emotional state
Discomfort and growing concern.

### Material

- increasingly negative conversations with management/CFO;
- financial tension with his wife;
- family photos whose meaning changes with context;
- rent/grocery/school-related pressure;
- signs that he is sleeping poorly and missing work.

### Goal
The player realizes his situation was materially worse than he let on.

No single message should explain everything.

---

## ACT III — “What were you doing?”

### Emotional state
Dread and moral uncertainty.

### Material

- the separate friend group;
- gradual normalization of criminal opportunities;
- increasingly suspicious downloads;
- browser activity / notes suggesting research into fraud, access, anonymity, and consequences;
- the missing friend changing from passive listener to active participant.

### Goal
Show a slope, not a sudden transformation.

The player should be able to identify several moments where he could have stepped away.

---

## ACT IV — “I don't know what happened.”

### Emotional state
Silence, uncertainty, emotional exhaustion.

### Structure
Do not provide a confession, death notice, arrest record, or final explanatory message.

The last days simply contain less and less information.

The final evidence may be:

- an unusual late-night session;
- a final download;
- an incomplete conversation;
- a timestamp;
- an unsent draft;
- a remote machine that remained online after the person stopped responding.

The point is not to solve the disappearance.

The player reaches the end of the evidence.

They close the laptop.

Room becomes dark again.

Cut to black.

```
CASO IRRESUELTO
```

No explanatory epilogue.

No sad montage.

No “what really happened.”

---

# 5. Timeline / Story Bible

The underlying timeline runs approximately **August 27 through September 20**.

Not every date needs content.

The goal is escalation with gaps, not a diary entry every day.

## August 27–31 — Stable exterior

- normal conversation with protagonist;
- mild concern from wife about money;
- first subtle management feedback;
- ordinary downloads/work files;
- family life still outwardly normal.

### Image A — 8/30

Description target:

- wife looks mildly worried;
- daughter is genuinely happy;
- father looks tired but is smiling;
- nothing overtly tragic.

This image should become sad only in hindsight.

---

## September 1–7 — Pressure becomes visible

- CFO/manager raises performance concerns;
- missed deliverables;
- wife mentions rent, groceries, school/family expenses;
- protagonist still receives jokes and normal conversation;
- friend group introduces the idea that his technical skills could earn money outside normal work.

### Image B — 9/4

Likely family gathering with wife's relatives.

- many people;
- wife's mother appears unhappy with him;
- he is visibly annoyed but hiding it;
- protagonist, as his close friend, would recognize the expression even if others do not.

This description may contain a small subjective observation such as:

> “You know that look. He's angry. He's pretending not to be.”

Use very sparingly. The protagonist should not narrate everything.

---

## September 8–14 — Deterioration

- explicit warning from management;
- harsher domestic arguments;
- friend group moves from vague “easy money” talk to concrete criminal opportunities;
- suspicious security/network tools begin appearing in downloads;
- web searches become increasingly concerning;
- protagonist-facing chat remains comparatively normal.

### Image C — 9/11

Father holding/embracing daughter.

- daughter appears comfortable and trusting;
- father looks exhausted;
- slight fear in his eyes;
- sadness/cognitive distance;
- still not melodramatic.

This should be the strongest image description.

---

## September 15–20 — Last trace

- severe work pressure / potential termination;
- wife reaches emotional limit;
- friend becomes more active in criminal discussion;
- more advanced security/offensive tooling appears in downloads;
- late-night activity;
- communication stops.

Do not show the crime itself.

Do not establish whether the plan happened.

The final machine activity should imply that something significant was imminent or underway, but remain ambiguous.

---

# 6. Character Model

Use placeholders/IDs in code so names can be changed easily.

```ts
PLAYER
FRIEND
WIFE
DAUGHTER
CFO
STREET_FRIEND_A
STREET_FRIEND_B
CYBER_FRIEND
```

---

## 6.1 FRIEND

Core traits:

- witty;
- capable;
- affectionate toward daughter;
- helpful to player;
- proud;
- embarrassed by financial failure;
- increasingly defensive;
- capable of making bad decisions without becoming a caricature.

Important rule:

Do not make him morally spotless.

As pressure grows he may:

- lie;
- become unfair to his wife;
- hide things;
- snap at people;
- rationalize wrongdoing;
- make decisions he knows are wrong.

This makes him human rather than a passive victim.

---

## 6.2 PLAYER / PROTAGONIST

The player is his closest friend at work.

The game should avoid writing a fully defined personality for the protagonist.

Their presence is primarily implied through:

- messages they previously sent;
- familiarity with FRIEND's expressions and humor;
- the act of accessing his machine because they care.

Do not constantly narrate the player's emotions.

Let camera behavior, silence, and the evidence do that work.

---

## 6.3 WIFE

Do not make her the villain.

She is also trapped by the situation.

Early:

- concern;
- budgeting;
- practical questions.

Middle:

- frustration;
- fear;
- resentment;
- feeling alone.

Late:

- harsher words;
- accusations;
- exhaustion.

Her anger should be understandable even when unfair.

---

## 6.4 CFO / MANAGEMENT

Avoid cartoon cruelty.

Tone:

- professional;
- detached;
- metric-oriented;
- increasingly direct.

Escalation:

1. concern about output;
2. request for improvement;
3. missed expectations;
4. warning / possible termination.

The emotional effect should come from corporate language colliding with a personal crisis.

---

## 6.5 STREET_FRIEND_A + STREET_FRIEND_B

These two should feel like actual friends from a rougher social environment, not movie gangsters.

Writing characteristics may include:

- slang;
- spelling mistakes;
- compressed messages;
- jokes;
- rough humor;
- casual references to weed, weapons, money, people they know;
- distrust of institutions.

Do not fill every line with crime vocabulary.

They should still behave like friends.

---

## 6.6 CYBER_FRIEND

This is the most subtle destabilizing influence.

He should not sound like a stereotypical hacker.

He is calm, practical, and good at reframing moral boundaries.

Early tone:

> “You're doing too much work for too little money.”

Then:

> “People pay a lot for what you already know how to do.”

Then increasingly direct opportunities.

The most important development is that FRIEND eventually stops needing encouragement and starts proposing ideas himself.

Do not provide real-world attack procedures, payloads, credential theft steps, or operational hacking instructions in the dialogue.

The criminal content is narrative evidence, not a tutorial.

---

# 7. Content Budget

Keep the experience short.

More content is not automatically better.

Every artifact must do at least one of these:

1. deepen the PLAYER ↔ FRIEND relationship;
2. increase understanding of FRIEND's pressure;
3. show FRIEND moving toward criminal activity;
4. deepen uncertainty around his disappearance.

If an artifact does none of these, remove it.

Recommended total scope:

- **4 main conversations**;
- **3 image entries**;
- **1 downloads view**;
- **1 browser/activity view**;
- **1 notes/drafts view** at most;
- **1 final trace**.

Do not create hundreds of messages.

Aim for perhaps 6–12 meaningful message clusters per conversation, spaced across dates.

---

# 8. Required Content Surfaces

The remote machine should expose a small, believable set of applications/data.

## 8.1 Chat application

Main conversations:

1. `PLAYER ↔ FRIEND`
2. `CFO ↔ FRIEND`
3. `WIFE ↔ FRIEND`
4. `GROUP: FRIEND + STREET_A + STREET_B + CYBER`

The player may open these in any order.

This non-linear discovery is desirable.

The emotional chronology is carried by timestamps and scrolling, not by forced locks.

---

## 8.2 Downloads

Downloads should begin mundane and become concerning.

Early examples:

- work PDFs;
- invoices;
- normal installers;
- family photos/documents.

Later examples may include recognizable professional security tooling such as:

- Wireshark;
- Nmap;
- Burp Suite Community/Professional;
- Metasploit package;
- password auditing/wordlist archives;
- anonymization/network utilities.

Do not expose commands, configurations, exploit instructions, targets, credentials, or operational attack material.

A few filenames/dates are enough.

The player should notice the pattern rather than being told “he became a hacker.”

---

## 8.3 Images

Do not initially spend implementation time generating actual realistic family photos.

Use image cards with:

- date;
- filename;
- metadata;
- carefully written visual description;
- optional blurred/abstract placeholder thumbnail.

This keeps production scope controlled and lets imagination do part of the work.

Later, actual artwork can replace descriptions if desired.

Required images:

- **8/30 — Image A**
- **9/4 — Image B**
- **9/11 — Image C**

---

## 8.4 Browser / activity history

Use sparingly.

The history should show progression from practical desperation to risk.

Examples of safe narrative categories:

- salary advance information;
- emergency rent assistance;
- urgent remote work searches;
- whether employers monitor devices;
- consequences of computer fraud;
- anonymity/privacy research;
- broad security research.

Do not create a realistic attack recipe through the search history.

---

## 8.5 Notes / drafts

Optional and limited.

Potential contents:

- expenses;
- rent calculations;
- short todo list;
- draft message he never sent;
- reminders.

Avoid a long final confession.

A perfectly written suicide-note-like monologue is explicitly undesirable.

---

# 9. Ending

The ending is intentionally unresolved.

Do not answer:

- where FRIEND is;
- whether he is alive;
- whether he committed the planned crime;
- whether he was arrested;
- whether he fled;
- whether another person harmed him.

The experience ends when the player reaches the end of meaningful evidence and chooses to stop searching.

Preferred sequence:

1. player reaches/view final trace;
2. interface becomes quieter;
3. no new notification or revelation arrives;
4. laptop can be physically closed;
5. hinge animation closes the screen;
6. screen glow disappears from room;
7. fan/room audio changes as laptop closes;
8. near-total darkness;
9. short hold;
10. fade to black;
11. text appears:

```
CASO IRRESUELTO
```

No music swell is required.

Silence/room tone may be more effective.

---

# 10. Visual Perspective

## 10.1 First-person embodied viewpoint

The entire page is the player's field of view.

The user is not looking at a website containing a laptop UI.

They are sitting in front of a laptop in a dark room.

The laptop is an object inside the scene.

Its screen contains the actual interactive application.

---

## 10.2 Recommended technical direction: 2.5D, not full 3D

Do **not** start with Three.js / a full 3D room unless later testing proves it necessary.

Implement the first version using:

- Svelte 5 / SvelteKit;
- layered DOM elements;
- CSS perspective / `transform-style: preserve-3d`;
- masks / gradients / shadows;
- a clipped screen viewport;
- subtle parallax;
- optional lightweight `<canvas>` overlays for grain/lighting;
- Web Audio API or small local audio assets for ambience.

Reason:

A controlled 2.5D composition can deliver the desired illusion while remaining:

- responsive;
- lightweight;
- easier to art-direct;
- easier to test;
- much cheaper to iterate than a 3D engine.

The scene only needs one convincing viewpoint.

---

# 11. Room Composition

Suggested desktop composition:

- almost-black room;
- desk silhouette;
- laptop centered, approximately 55–65% of visual attention;
- very little visible environment initially;
- perhaps edge silhouettes of wall/object/chair;
- laptop screen is dominant light source;
- no “gaming room” RGB lighting;
- no cyberpunk neon.

Use blacks with slightly warm or green-gray room shadows.

The laptop screen may cast a cold blue/neutral light.

---

# 12. Boot Sequence

The first 20–40 seconds are important.

Suggested sequence:

### 1. Darkness

Barely visible room.

Low ambient noise.

### 2. Interaction

Player clicks/taps laptop power area or a minimal prompt.

### 3. Screen ignition

Laptop screen turns on abruptly.

Use:

- rapid exposure spike;
- blue/white screen glow;
- temporary blur/bloom;
- room illumination reacting to screen;
- optional subtle audio click + fan ramp.

### 4. Eye adaptation

Over ~1–2 seconds:

- bloom falls;
- text becomes readable;
- room detail settles;
- camera/focus stabilizes.

The effect should simulate eyes adjusting to a bright display in a dark room.

### 5. Remote access

The laptop opens to a normal desktop/terminal state.

SSH is the narrative justification for access, not a technical puzzle.

A terminal may briefly show a remembered connection command or preconfigured connection, but the player should not need to know SSH syntax.

Example concept:

```
last login ...
connecting to remote workstation...
```

Then expose a graphical remote-session/file experience.

Do not force terminal navigation for the rest of the story.

---

# 13. Human Vision Simulation

The perspective should subtly behave like a human body, not a fixed surveillance camera.

## 13.1 Head movement

Implement very small continuous camera movement:

- slow drift;
- breathing-scale vertical motion;
- subtle cursor-linked parallax;
- inertia when pointer direction changes.

Movement must be tiny.

If the player notices “camera bobbing” as a game effect, it is too strong.

---

## 13.2 Focus fatigue

After prolonged reading, occasionally simulate momentary eye fatigue:

- text loses focus slightly;
- contrast softens;
- perhaps a subtle double-edge/astigmatic effect;
- moving pointer / interacting restores focus quickly.

Frequency should be low and semi-random.

Never interrupt critical reading every few seconds.

---

## 13.3 Blinks

Very rare short blink/eyelid fades may be used.

Do not make them regular.

Do not use them as horror cuts.

---

## 13.4 Emotional camera response

Use extremely restrained scripted changes around a few major artifacts.

Examples:

- tiny forward lean when opening Image C;
- reduced idle movement during a particularly harsh wife conversation;
- slightly longer refocus after a painful message;
- quiet stillness near the final trace.

Do not shake the camera to tell the player what is emotional.

---

# 14. Lighting Model

Laptop screen should affect the room.

Approximate this through CSS variables driven by the current screen/app brightness.

Example:

```ts
screenLuminance: 0..1
screenTemperature: 'cool' | 'neutral' | 'warm'
```

When opening bright apps:

- player's immediate desk/laptop edges brighten;
- slight exposure response occurs.

When screen content is dark:

- room recedes again.

Do not dynamically calculate actual DOM luminance initially.

Use authored app-level values.

---

# 15. Atmosphere / Audio

Audio is important but should remain understated.

## 15.1 Constant bed

Possible layers:

- laptop fan;
- HVAC;
- electrical room tone;
- very distant traffic;
- rain only if chosen consistently for the scene.

Do not stack all of these loudly.

Choose 1–2 dominant beds.

---

## 15.2 Random environmental one-shots

Rare events:

- pipe tick;
- building creak;
- distant vehicle;
- muffled object impact somewhere else;
- electrical click.

These events do not need narrative meaning.

They exist to make the room feel occupied by the physical world.

No jump-scare stingers.

---

## 15.3 Laptop sounds

Use restrained:

- boot click;
- fan changes;
- key/click feedback;
- notification sound if appropriate;
- hinge close sound at ending.

---

# 16. Screen / Remote Computer UI

The computer UI should feel normal and slightly boring.

That normality is important.

Visual direction:

- ordinary modern desktop/workstation;
- corporate productivity apps;
- muted colors;
- familiar window chrome;
- no neon green terminals everywhere;
- no skull icons;
- no “HACKER MODE”.

The sinister feeling comes from content and context.

---

# 17. Recommended Application Structure

The remote session may expose a simple desktop shell with a small number of apps/icons:

```text
Chat
Files
Images
Downloads
Browser History
Notes
```

Potentially Mail if needed, but avoid duplicating CFO material unnecessarily.

If CFO communication fits better as company chat, keep it inside Chat and skip Mail.

Every new app increases production burden.

Default to fewer apps.

---

# 18. Information Architecture

Keep narrative content data-driven.

Do not hardcode large message histories directly inside Svelte components.

Suggested structure:

```text
src/lib/story/
  characters.ts
  timeline.ts
  chats.ts
  downloads.ts
  images.ts
  browser-history.ts
  notes.ts
  final-trace.ts
```

or JSON/TS equivalents.

---

## 18.1 Example types

```ts
export type StoryMessage = {
  id: string;
  threadId: string;
  authorId: string;
  timestamp: string;
  text: string;
  edited?: boolean;
  deleted?: boolean;
};

export type StoryThread = {
  id: string;
  participantIds: string[];
  title: string;
  messages: StoryMessage[];
};

export type StoryImage = {
  id: string;
  filename: string;
  timestamp: string;
  description: string;
  thumbnail?: string;
};

export type DownloadEntry = {
  id: string;
  filename: string;
  timestamp: string;
  size?: string;
  category: 'ordinary' | 'work' | 'security' | 'suspicious';
};

export type HistoryEntry = {
  id: string;
  timestamp: string;
  label: string;
  domain?: string;
};
```

Keep story data easy to rewrite without changing UI logic.

---

# 19. Player State

The experience needs very little game state.

Suggested state:

```ts
type ExperienceState = {
  booted: boolean;
  remoteConnected: boolean;
  activeApp: AppId | null;
  viewedArtifactIds: Set<string>;
  finalTraceViewed: boolean;
  endingAvailable: boolean;
  endingStarted: boolean;
};
```

No score.

No evidence inventory.

No achievements in first implementation.

No objective checklist visible to player.

---

# 20. Progression Philosophy

The player should be allowed to browse content in different orders.

Do not lock chats behind puzzle keys.

Do not require arbitrary passwords to open obvious personal apps.

Do not show:

```
3 / 7 clues found
```

Narrative ordering should come from:

- timestamps;
- scroll behavior;
- visual recency;
- unread markers;
- the player's curiosity.

---

# 21. Ending Availability

Avoid a rigid “collect all evidence” requirement.

Recommended approach:

The physical close-laptop action is always technically possible after connecting, but the game should only treat it as the canonical ending once the player has reached the late/final evidence.

Implementation option:

```ts
endingAvailable = finalTraceViewed && viewedArtifactIds.size >= MIN_CONTEXT_THRESHOLD;
```

Keep the threshold low and based on major narrative categories rather than every artifact.

Example major-context requirements:

- PLAYER chat viewed;
- at least one work-pressure artifact;
- at least one wife/family-pressure artifact;
- criminal-group evidence viewed;
- final trace viewed.

Do not show these requirements to player.

If the player tries to close too early, either:

- allow it but return to room without ending;
- or make close interaction unavailable until enough context exists.

Prefer subtle behavior over a modal saying “You haven't found enough clues.”

---

# 22. Components / Frontend Architecture

Suggested Svelte component split:

```text
src/lib/components/scene/
  RoomScene.svelte
  CameraRig.svelte
  LaptopBody.svelte
  LaptopScreen.svelte
  EyeAdaptation.svelte
  FocusFatigue.svelte
  AmbientAudio.svelte

src/lib/components/os/
  DesktopShell.svelte
  AppWindow.svelte
  Taskbar.svelte
  ChatApp.svelte
  FilesApp.svelte
  ImagesApp.svelte
  DownloadsApp.svelte
  HistoryApp.svelte
  NotesApp.svelte

src/lib/components/story/
  ChatThread.svelte
  MessageBubble.svelte
  ImageDescription.svelte
  DownloadRow.svelte
  TimelineTimestamp.svelte

src/lib/story/
  ...data
```

Keep physical scene and computer UI separate.

`RoomScene` should not know story messages.

`ChatApp` should not manage camera physics.

---

# 23. Camera Rig

Implement a single transform source rather than letting multiple components fight over CSS transforms.

Conceptual state:

```ts
type CameraState = {
  idleX: number;
  idleY: number;
  pointerX: number;
  pointerY: number;
  scriptedX: number;
  scriptedY: number;
  lean: number;
  focus: number;
};
```

Combine these into CSS variables once per animation frame.

Avoid independent `transform` animations on nested parents that create motion sickness.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Reduced motion should preserve the experience without head sway/focus distortions.

---

# 24. Laptop Screen Implementation

The screen should be a real DOM subtree clipped inside the physical laptop screen.

Do not render the OS to an image/canvas unless necessary.

Benefits:

- real text selection/rendering;
- accessibility;
- easier content changes;
- better responsiveness;
- simple app interactions.

Use a physical frame around it with perspective transforms.

The actual UI can remain mostly 2D inside the screen viewport.

---

# 25. Screen Flicker

Use infrequently.

Possible causes:

- boot;
- remote connection;
- very occasional display instability.

It should not imply supernatural interference.

Do not tie random flickers to secret clues unless intentionally authored.

---

# 26. Interaction Model

Desktop-first experience.

Primary input:

- mouse;
- keyboard where natural;
- wheel/scroll.

Do not require game-style WASD movement.

The player is seated.

Pointer position may subtly influence head/camera orientation.

Apps should use familiar interactions:

- click icon;
- open window;
- scroll messages;
- back to conversation list;
- close/minimize window.

Keep controls invisible/ordinary.

---

# 27. Narrative Presentation Rules

## 27.1 Do not explain emotions

Bad:

> “You feel guilty reading this.”

Better:

- longer pause;
- camera becomes still;
- no notification sound;
- player reads the message themselves.

---

## 27.2 Avoid melodramatic writing

Most messages should sound like actual messages.

People:

- abbreviate;
- change subjects;
- leave things unresolved;
- make jokes during bad periods;
- repeat themselves;
- misunderstand each other.

The strongest emotional moments should often be ordinary lines placed in new context.

---

## 27.3 No exposition dumps

No character should write:

> “As you know, since I lost $2,400 last month and the CFO threatened me...”

Information must emerge naturally across different sources.

---

# 28. Conversation Writing Targets

## 28.1 PLAYER thread

Primary function:

**Build attachment and contrast.**

Content ideas:

- jokes about work;
- technical favor;
- lunch/game plans;
- meme-like exchange;
- player casually notices FRIEND looks tired;
- FRIEND dismisses it humorously.

Example tone only:

```
PLAYER: bro últimamente te ves muerto 💀
FRIEND: dormir es para gente sin deadlines
FRIEND: cuando sea rico duermo 14 horas
```

Do not reuse this verbatim unless it fits final character voice.

---

## 28.2 CFO thread

Primary function:

**Professional collapse.**

Escalate from concern to warning.

Keep CFO plausible.

---

## 28.3 WIFE thread

Primary function:

**Economic/family pressure and shame.**

This conversation should probably be the most uncomfortable.

Do not make every message hostile.

Include affection and practical cooperation earlier so the later arguments have weight.

---

## 28.4 FRIEND GROUP thread

Primary function:

**Moral drift.**

Key progression:

1. jokes / rough friendship;
2. money talk;
3. CYBER suggests monetizing FRIEND's skills;
4. ambiguous opportunities;
5. FRIEND asks questions;
6. FRIEND eventually suggests/proposes something himself.

That final transition is critical.

---

# 29. Criminal Content Safety / Writing Constraint

The story may contain:

- hacking/security tools by name;
- discussion of illegal opportunities;
- references to fraud, unauthorized access, stolen data, criminal contacts;
- moral rationalization.

Do not include:

- commands to compromise systems;
- exploit chains;
- target credentials;
- phishing templates designed for real use;
- malware code;
- persistence instructions;
- instructions for evading law enforcement;
- realistic operational plans that make the narrative directly reusable for crime.

Keep operational details abstract or fictionalized.

---

# 30. Content Discovery and Reinterpretation

The experience should reward rereading.

Example:

PLAYER thread contains a joke on 9/12 that appears ordinary.

Later, wife/CFO/group context changes its meaning.

The game does not need a “revisit clue” mechanic.

Players can naturally return to chats.

This is preferable to explicit flashbacks.

---

# 31. Final Trace

Keep one final trace.

Possible implementation direction:

```
LAST REMOTE SESSION
09/19 03:14
session duration: 01:47:22
logout event: unavailable
```

paired with one late download or an unfinished short group conversation.

Do not use a giant `FINAL_PLAN.txt`.

The trace should create questions, not answer them.

---

# 32. User Experience Sequence

A likely player path might be:

```text
Dark room
→ power laptop
→ eye adaptation
→ remote connection
→ desktop
→ sees recent/unread Chat
→ reads PLAYER conversation
→ recognizes friend
→ opens CFO or wife chat
→ understands pressure
→ browses images
→ opens group chat
→ notices downloads/history
→ realizes criminal escalation
→ reaches last activity
→ waits / searches for more
→ nothing conclusive exists
→ closes laptop
→ darkness
→ CASO IRRESUELTO
```

This is an example, not a forced route.

---

# 33. Visual Tone

Keywords:

- intimate;
- nocturnal;
- grounded;
- lonely;
- domestic;
- physically dark;
- normal technology;
- restrained;
- uncomfortable.

Avoid:

- Matrix green;
- neon purple cyberpunk;
- VHS horror everywhere;
- blood-red warning UI;
- excessive glitch art;
- giant hacker skulls;
- “classified dossier” aesthetic.

---

# 34. Performance Targets

The experience should run comfortably on a normal desktop browser.

Avoid unnecessary heavy rendering.

Targets:

- stable 60 FPS for room/camera transforms on typical hardware;
- no layout reflow every pointer event;
- use `requestAnimationFrame` for camera updates;
- use transform/opacity rather than layout properties for frequent animation;
- lazy load non-critical assets;
- audio should not block boot;
- avoid huge image assets in first prototype.

---

# 35. Persistence

For first implementation, local browser persistence is enough.

Use `localStorage` or small client-side state for:

- whether intro has played;
- viewed artifact IDs;
- ending state if needed.

Provide a developer reset mechanism.

Do not build authentication/database infrastructure unless deployment requirements later justify it.

---

# 36. Developer Controls

Add development-only controls or query flags for iteration.

Examples:

```text
?dev=1
?skipBoot=1
?unlockEnding=1
?reducedFx=1
```

Dev mode may expose:

- camera intensity sliders;
- trigger blink;
- trigger focus fatigue;
- trigger final ending;
- jump to app;
- clear local progress.

Do not expose these in production UI.

This will dramatically reduce iteration time.

---

# 37. Audio / Motion Accessibility

Respect browser autoplay rules.

Boot/power interaction can be the gesture that enables audio.

Respect `prefers-reduced-motion`.

Provide graceful fallback if audio context fails.

Atmosphere must never be required to understand the story.

Text remains readable with effects disabled.

---

# 38. Testing Strategy

This project is mostly presentation, so tests must cover state and critical transitions without trying to snapshot every animation.

## Unit tests

Test:

- story data validity;
- chronological timestamps;
- no duplicate artifact IDs;
- required threads/images exist;
- ending eligibility logic;
- persistence serialization;
- all referenced character IDs exist.

## Browser E2E

Test:

1. boot sequence can complete;
2. remote desktop becomes interactive;
3. each major app opens;
4. chat thread can scroll/read;
5. key artifact view state records correctly;
6. final trace + minimum context enables canonical ending;
7. laptop closing reaches `CASO IRRESUELTO`;
8. reduced-motion mode remains usable;
9. reload preserves intended progress;
10. reset clears progress.

Do not make E2E wait on random ambient events.

Random events should be deterministic or disabled under test mode.

---

# 39. Randomness Rules

Human/room effects may use randomness, but use a seeded/tamed scheduler where useful.

Randomized effects:

- environmental one-shots;
- focus fatigue timing;
- blink timing;
- slight idle motion variance.

Never randomize:

- story content;
- timestamps;
- important evidence availability;
- ending requirements.

In E2E/testing mode, disable or seed randomness.

---

# 40. Implementation Phases

## Phase 1 — Physical scene prototype

Implement:

- room;
- laptop;
- screen viewport;
- camera/parallax;
- boot light adaptation;
- close-laptop ending animation mock.

Use placeholder desktop UI.

Goal:

Prove the embodied first-person presentation before building story content.

---

## Phase 2 — Desktop shell

Implement:

- remote connection transition;
- desktop;
- app/window system;
- Chat;
- Downloads;
- Images;
- History;
- Notes if retained.

Use placeholder data.

---

## Phase 3 — Story data

Move narrative content into data files.

Implement the real timeline and conversations.

Do not rewrite UI while writing story.

---

## Phase 4 — Atmosphere

Add:

- ambient audio;
- head drift;
- focus fatigue;
- rare blinks;
- screen luminance → room light response;
- rare environmental sounds.

Tune conservatively.

---

## Phase 5 — Narrative pacing

Blind playtest.

Observe:

- what players open first;
- what they understand;
- whether relationship with FRIEND feels real;
- where they become bored;
- whether criminal progression feels believable;
- what they think happened at the end.

Do not ask only “did you like it?”

Ask:

- “Who did you think he was before you opened the other chats?”
- “When did your interpretation of him change?”
- “What do you think happened?”
- “Which artifact stuck with you?”
- “Did anything feel too written or artificial?”

---

# 41. Definition of Done — First Complete Version

The first complete version is ready for external playtesting when:

1. Player begins in a convincing dark first-person room.
2. Laptop power sequence produces believable eye/light adaptation.
3. Camera has subtle human movement without causing distraction.
4. Remote machine is accessible without requiring technical SSH knowledge.
5. Desktop has only the necessary apps.
6. PLAYER ↔ FRIEND relationship is established before/alongside darker information.
7. Work pressure is clear but not cartoonishly cruel.
8. Wife/family pressure feels real and two-sided.
9. Friend-group criminal drift is gradual.
10. Cyber friend influences rather than instantly commands.
11. FRIEND eventually demonstrates his own agency in crossing the line.
12. Downloads/activity support the criminal progression without becoming a hacking tutorial.
13. The three image descriptions carry emotional weight.
14. Player can explore content in multiple orders.
15. No explicit “clue counter” is visible.
16. No definitive explanation for disappearance exists.
17. The experience can be completed in roughly 15–25 minutes.
18. Closing the laptop produces the final blackout sequence.
19. `CASO IRRESUELTO` is the final explicit narrative statement.
20. Unit tests and browser E2E pass.
21. Effects degrade gracefully under reduced motion/audio failure.
22. The experience is memorable because of the person, not because of a technical puzzle.

---

# 42. Non-Goals for Version 1

Do NOT add yet:

- full 3D engine;
- free walking;
- character models;
- voice acting;
- procedural dialogue;
- multiple endings;
- scoring;
- achievements;
- branching dialogue choices;
- inventory/evidence board;
- backend accounts;
- multiplayer;
- generated AI conversations at runtime;
- real hacking simulation;
- dozens of apps;
- photo-real generated family images unless later approved.

A short polished experience is the goal.

---

# 43. Final Principle for the Implementing Agent

Do not optimize for the amount of content or the amount of technology.

Optimize for **presence** and **interpretation**.

The player should feel like they are alone at night, staring at the private life of someone they cared about, slowly realizing that the version of that person they knew was only one part of the truth.

The machine does not contain a solution.

It contains enough evidence for the player to form a story in their own head.

When the evidence runs out, do not explain it.

Let them close the laptop.
