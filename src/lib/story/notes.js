/** @type {import('./types').NoteEntry[]} */
export const STORY_NOTES = [
	{
		id: 'note_1',
		title: 'Cálculo deudas urgente Septiembre.txt',
		timestamp: '2026-09-06T03:14:00',
		dateLabel: '06 Sep',
		type: 'budget',
		content: [
			'-- VENCIMIENTOS SEPTIEMBRE --',
			'Alquiler dpto + expensas: $820.000 (Vence 10/09 - llamaron de la inmobiliaria)',
			'Colegio Sofía + reinscripción: $385.000 (Vence 10/09)',
			'Tarjeta Visa Santander (mínimo urgente): $410.000',
			'Crédito personal cuota 01/24: $280.000 (Débito automático rebotó)',
			'Seguro auto y cuota mecánico: $195.000',
			'TOTAL INMEDIATO: $2.090.000',
			'',
			'Sueldo neto en mano: $1.420.000 (si no descuentan horas)',
			'Bono trimestral: CANCELADO POR MANAGEMENT (Julián me lo confirmó off the record)',
			'Déficit neto mes: -$670.000',
			'',
			'Si entra embargo judicial me congelan la cuenta sueldo y no podemos pagar ni la comida.'
		]
	},
	{
		id: 'note_2',
		title: 'scratchpad_ports_temp.txt',
		timestamp: '2026-09-15T02:11:00',
		dateLabel: '15 Sep',
		type: 'scratchpad',
		content: [
			'ip proxy drop: 185.220.101.44:8443',
			'auth token: sha256:7f90c... [rotated]',
			'sync interval: 03:30 a 04:15 am',
			'check docker daemon restart policy: unless-stopped',
			'',
			'TODO:',
			'- deshabilitar logrotate en /var/log/audit/ temporalmente',
			'- verificar ping a gateway pasarela',
			'- no dejar rastros en bash_history',
			'- quemar chip prepago el viernes a la mañana'
		]
	},
	{
		id: 'note_3',
		title: 'Borrador sin enviar.txt',
		timestamp: '2026-09-17T04:22:00',
		dateLabel: '17 Sep',
		type: 'unsent',
		content: [
			'Elena,',
			'',
			'No sé cómo explicarte esto sin que me odies.',
			'Todo lo que hice fue para que no nos quedemos en la calle.',
			'Sé que pensás que no me importa nada, pero cada segundo que me senté frente a esta máquina fue pensando en que a vos y a Sofi no les falte el techo.',
			'Tengo que resolver esto lejos de acá para no salpicarlas.',
			'En el sobre adentro del cajón del placard hay 1.500 dólares que me quedaron de reserva. Pagá el colegio de Sofi primero.',
			'',
			'Perdoname. Por favor perdoname.'
		]
	},
	{
		id: 'note_4',
		title: 'agenda_17-18.txt',
		timestamp: '2026-09-16T23:18:00',
		dateLabel: '16 Sep',
		type: 'scratchpad',
		content: [
			'-- JUEVES 17 --',
			'03:00  V.',
			'08:00  ventana de auditoría',
			'17:30  Sofi / confirmar con Elena',
			'',
			'-- VIERNES 18 --',
			'09:00  RRHH + Legal',
			'11:30  llamar inmobiliaria',
			'',
			'[ ] dejar sobre en placard',
			'[ ] cargar nafta',
			'[ ] copia de documentos',
			'',
			'No prometer nada más.'
		]
	}
];
