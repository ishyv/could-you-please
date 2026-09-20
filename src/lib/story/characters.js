/** @type {Record<import('./types').CharacterId, import('./types').Character>} */
export const CHARACTERS = {
	PLAYER: {
		id: 'PLAYER',
		displayName: 'Tú',
		handle: '@marcos_dev',
		role: 'Compañero de equipo / Desarrollador Backend',
		avatarText: 'YO',
		avatarColor: 'bg-emerald-700 text-emerald-100'
	},
	FRIEND: {
		id: 'FRIEND',
		displayName: 'Gabriel Vega',
		handle: '@gabi_v',
		role: 'DevOps / Lead de Infraestructura',
		avatarText: 'GV',
		avatarColor: 'bg-blue-700 text-blue-100'
	},
	WIFE: {
		id: 'WIFE',
		displayName: 'Elena Morales',
		handle: '@elena_m',
		role: 'Esposa',
		avatarText: 'EM',
		avatarColor: 'bg-rose-700 text-rose-100'
	},
	DAUGHTER: {
		id: 'DAUGHTER',
		displayName: 'Sofía Vega',
		handle: '',
		role: 'Hija (6 años)',
		avatarText: 'SV',
		avatarColor: 'bg-amber-600 text-amber-100'
	},
	CFO: {
		id: 'CFO',
		displayName: 'Julián Ramos (CFO / VP)',
		handle: '@j_ramos_mgmt',
		role: 'VP de Operaciones y Finanzas',
		avatarText: 'JR',
		avatarColor: 'bg-slate-600 text-slate-100'
	},
	STREET_FRIEND_A: {
		id: 'STREET_FRIEND_A',
		displayName: 'Tito',
		handle: '@tito_77',
		role: 'Amigo de barrio',
		avatarText: 'TI',
		avatarColor: 'bg-orange-800 text-orange-100'
	},
	STREET_FRIEND_B: {
		id: 'STREET_FRIEND_B',
		displayName: 'Nico',
		handle: '@nico_flk',
		role: 'Amigo de barrio / Mecánica',
		avatarText: 'NC',
		avatarColor: 'bg-amber-800 text-amber-100'
	},
	CYBER_FRIEND: {
		id: 'CYBER_FRIEND',
		displayName: 'Vektor',
		handle: '@0x_vektor',
		role: 'Contacto externo',
		avatarText: 'VK',
		avatarColor: 'bg-purple-800 text-purple-100'
	}
};
