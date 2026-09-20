/**
 * @typedef {'PLAYER' | 'FRIEND' | 'WIFE' | 'DAUGHTER' | 'CFO' | 'STREET_FRIEND_A' | 'STREET_FRIEND_B' | 'CYBER_FRIEND'} CharacterId
 */

/**
 * @typedef {Object} Character
 * @property {CharacterId} id
 * @property {string} displayName
 * @property {string} handle
 * @property {string} role
 * @property {string} avatarText
 * @property {string} avatarColor
 */

/**
 * @typedef {Object} StoryMessage
 * @property {string} id
 * @property {string} threadId
 * @property {CharacterId} authorId
 * @property {string} timestamp
 * @property {string} timeLabel
 * @property {string} dateLabel
 * @property {string} text
 * @property {boolean} [edited]
 * @property {boolean} [deleted]
 */

/**
 * @typedef {Object} StoryThread
 * @property {string} id
 * @property {string} title
 * @property {string} subtitle
 * @property {CharacterId[]} participantIds
 * @property {string} lastMessagePreview
 * @property {string} lastTimestamp
 * @property {boolean} unread
 * @property {'player' | 'work' | 'family' | 'group'} category
 * @property {StoryMessage[]} messages
 */

/**
 * @typedef {Object} StoryImage
 * @property {string} id
 * @property {string} filename
 * @property {string} timestamp
 * @property {string} dateLabel
 * @property {string} title
 * @property {string} dimensions
 * @property {string} fileSize
 * @property {string} camera
 * @property {string} description
 * @property {string} [subjectiveNote]
 * @property {'warm' | 'tense' | 'somber'} dominantTone
 */

/**
 * @typedef {'ordinary' | 'work' | 'security' | 'suspicious'} DownloadCategory
 */

/**
 * @typedef {Object} DownloadEntry
 * @property {string} id
 * @property {string} filename
 * @property {string} timestamp
 * @property {string} dateLabel
 * @property {string} size
 * @property {DownloadCategory} category
 * @property {string} source
 */

/**
 * @typedef {Object} HistoryEntry
 * @property {string} id
 * @property {string} timestamp
 * @property {string} dateLabel
 * @property {string} title
 * @property {string} url
 * @property {'routine' | 'financial' | 'investigation' | 'evasion'} category
 */

/**
 * @typedef {Object} NoteEntry
 * @property {string} id
 * @property {string} title
 * @property {string} timestamp
 * @property {string} dateLabel
 * @property {string[]} content
 * @property {'budget' | 'scratchpad' | 'unsent'} type
 */

/**
 * @typedef {Object} FinalTraceData
 * @property {string} id
 * @property {string} sessionDate
 * @property {string} sessionTime
 * @property {string} duration
 * @property {string} ipAddress
 * @property {string} remoteHost
 * @property {string} status
 * @property {string} lastAction
 * @property {string} unclosedSocket
 * @property {string} unsentBuffer
 */

export {};
