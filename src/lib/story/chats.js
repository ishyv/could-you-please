/** @type {import('./types').StoryThread[]} */
export const STORY_CHATS = [
	{
		id: 'chat_player',
		title: 'Marcos (Tú)',
		subtitle: '@marcos_dev • Slack interno',
		participantIds: ['PLAYER', 'FRIEND'],
		lastMessagePreview: 'che avísame cuando leas esto, julián está preguntando por vos',
		lastTimestamp: '19 Sep, 11:42',
		unread: true,
		category: 'player',
		messages: [
			{
				id: 'msg_p_1',
				threadId: 'chat_player',
				authorId: 'PLAYER',
				timestamp: '2026-08-28T14:15:00',
				dateLabel: '28 Ago',
				timeLabel: '14:15',
				text: 'che gabi, se cayó el webhook de facturación de nuevo? me rebota el test en staging'
			},
			{
				id: 'msg_p_2',
				threadId: 'chat_player',
				authorId: 'FRIEND',
				timestamp: '2026-08-28T14:18:00',
				dateLabel: '28 Ago',
				timeLabel: '14:18',
				text: 'nono, fue julián que mandó a rotar los secrets del cert sin avisarle a nadie 🤦‍♂️'
			},
			{
				id: 'msg_p_3',
				threadId: 'chat_player',
				authorId: 'FRIEND',
				timestamp: '2026-08-28T14:19:00',
				dateLabel: '28 Ago',
				timeLabel: '14:19',
				text: 'ya te dejé el nuevo api-key en el vault privado. probá ahora'
			},
			{
				id: 'msg_p_4',
				threadId: 'chat_player',
				authorId: 'PLAYER',
				timestamp: '2026-08-28T14:22:00',
				dateLabel: '28 Ago',
				timeLabel: '14:22',
				text: 'sos dios chabón. salvada histórica. te debo un café'
			},
			{
				id: 'msg_p_5',
				threadId: 'chat_player',
				authorId: 'FRIEND',
				timestamp: '2026-08-28T14:24:00',
				dateLabel: '28 Ago',
				timeLabel: '14:24',
				text: 'anotado en la cuenta de deudas impagas jaja. comemos abajo mañana?'
			},
			{
				id: 'msg_p_6',
				threadId: 'chat_player',
				authorId: 'PLAYER',
				timestamp: '2026-08-28T14:25:00',
				dateLabel: '28 Ago',
				timeLabel: '14:25',
				text: 'de una, milanesas en lo del tano'
			},
			{
				id: 'msg_p_7',
				threadId: 'chat_player',
				authorId: 'PLAYER',
				timestamp: '2026-09-03T10:04:00',
				dateLabel: '03 Sep',
				timeLabel: '10:04',
				text: 'bro en la daily te veías muerto 💀 todo bien?'
			},
			{
				id: 'msg_p_8',
				threadId: 'chat_player',
				authorId: 'FRIEND',
				timestamp: '2026-09-03T10:12:00',
				dateLabel: '03 Sep',
				timeLabel: '10:12',
				text: 'jajaja dormir es un lujo para gente sin deadlines hermano'
			},
			{
				id: 'msg_p_9',
				threadId: 'chat_player',
				authorId: 'FRIEND',
				timestamp: '2026-09-03T10:13:00',
				dateLabel: '03 Sep',
				timeLabel: '10:13',
				text: 'sofi estuvo con fiebre toda la noche y me quedé tuneando las instancias de redis. cuando sea rico duermo 14 horas seguidas te juro'
			},
			{
				id: 'msg_p_10',
				threadId: 'chat_player',
				authorId: 'PLAYER',
				timestamp: '2026-09-03T10:15:00',
				dateLabel: '03 Sep',
				timeLabel: '10:15',
				text: 'uh pobre enana, que se mejore. si necesitas que te cubra con los deploys de la tarde avisame y me meto'
			},
			{
				id: 'msg_p_11',
				threadId: 'chat_player',
				authorId: 'FRIEND',
				timestamp: '2026-09-03T10:18:00',
				dateLabel: '03 Sep',
				timeLabel: '10:18',
				text: 'tranqui crack, lo tengo bajo control. gracias igual'
			},
			{
				id: 'msg_p_12',
				threadId: 'chat_player',
				authorId: 'PLAYER',
				timestamp: '2026-09-10T16:30:00',
				dateLabel: '10 Sep',
				timeLabel: '16:30',
				text: 'viste la filmina que mandó Julián para el cierre de Q3? dice que tenemos que recortar 20% de consumo en kubernetes o nos cortan las horas extra'
			},
			{
				id: 'msg_p_13',
				threadId: 'chat_player',
				authorId: 'FRIEND',
				timestamp: '2026-09-10T17:45:00',
				dateLabel: '10 Sep',
				timeLabel: '17:45',
				text: 'si lo vi. julián no sabe la diferencia entre un nodo worker y un microondas. que no rompa las pelotas'
			},
			{
				id: 'msg_p_14',
				threadId: 'chat_player',
				authorId: 'FRIEND',
				timestamp: '2026-09-10T17:46:00',
				dateLabel: '10 Sep',
				timeLabel: '17:46',
				text: 'disculpa la demora, ando con mil cosas en la cabeza'
			},
			{
				id: 'msg_p_15',
				threadId: 'chat_player',
				authorId: 'PLAYER',
				timestamp: '2026-09-15T18:20:00',
				dateLabel: '15 Sep',
				timeLabel: '18:20',
				text: 'che sale birra con los pibes de mobile el viernes? te anoto?'
			},
			{
				id: 'msg_p_16',
				threadId: 'chat_player',
				authorId: 'FRIEND',
				timestamp: '2026-09-15T19:02:00',
				dateLabel: '15 Sep',
				timeLabel: '19:02',
				text: 'paso esta vez marcos. tengo que cerrar unos temas familiares densos el fin de semana'
			},
			{
				id: 'msg_p_17',
				threadId: 'chat_player',
				authorId: 'FRIEND',
				timestamp: '2026-09-15T19:03:00',
				dateLabel: '15 Sep',
				timeLabel: '19:03',
				text: 'gracias por cubrirme con el rollback del martes en serio hermano. te debo una cerveza de verdad, no de oficina'
			},
			{
				id: 'msg_p_18',
				threadId: 'chat_player',
				authorId: 'PLAYER',
				timestamp: '2026-09-18T09:40:00',
				dateLabel: '18 Sep',
				timeLabel: '09:40',
				text: 'gabi estás? no entraste a la refinación de backlog'
			},
			{
				id: 'msg_p_19',
				threadId: 'chat_player',
				authorId: 'PLAYER',
				timestamp: '2026-09-18T15:11:00',
				dateLabel: '18 Sep',
				timeLabel: '15:11',
				text: 'amigo todo bien en casa? me preocupa que no leas los slacks'
			},
			{
				id: 'msg_p_20',
				threadId: 'chat_player',
				authorId: 'PLAYER',
				timestamp: '2026-09-19T11:42:00',
				dateLabel: '19 Sep',
				timeLabel: '11:42',
				text: 'che avísame cuando leas esto por favor. julián está preguntando por vos con cara de orto y nadie te ubica en el cel'
			}
		]
	},
	{
		id: 'chat_cfo',
		title: 'Julián Ramos (CFO / VP)',
		subtitle: '@j_ramos_mgmt • Mensajería Corporativa',
		participantIds: ['CFO', 'FRIEND'],
		lastMessagePreview: 'Gabriel: El plazo límite improrrogable era hoy 09:00 AM.',
		lastTimestamp: '18 Sep, 09:14',
		unread: true,
		category: 'work',
		messages: [
			{
				id: 'msg_c_1',
				threadId: 'chat_cfo',
				authorId: 'CFO',
				timestamp: '2026-08-29T11:00:00',
				dateLabel: '29 Ago',
				timeLabel: '11:00',
				text: 'Gabriel, buen día. Necesito los consolidados de costos de AWS del clúster de pagos antes de las 17:00 hs para el directorio. ¿Llegas bien?'
			},
			{
				id: 'msg_c_2',
				threadId: 'chat_cfo',
				authorId: 'FRIEND',
				timestamp: '2026-08-29T11:34:00',
				dateLabel: '29 Ago',
				timeLabel: '11:34',
				text: 'Hola Julián. Sí, estoy exportando los desgloses de CloudWatch y etiquetando por servicio. Te los adjunto en la planilla a las 16:30.'
			},
			{
				id: 'msg_c_3',
				threadId: 'chat_cfo',
				authorId: 'CFO',
				timestamp: '2026-09-04T15:20:00',
				dateLabel: '04 Sep',
				timeLabel: '15:20',
				text: 'Gabriel, veo que la migración del ambiente de validación bancaria tiene dos semanas de retraso. El cliente está cobrando penalizaciones por cada día de mora en el cronograma.'
			},
			{
				id: 'msg_c_4',
				threadId: 'chat_cfo',
				authorId: 'FRIEND',
				timestamp: '2026-09-04T16:05:00',
				dateLabel: '04 Sep',
				timeLabel: '16:05',
				text: 'Julián, la API del banco cambió los certificados sin previo aviso y tuvimos que reescribir los adaptadores de cifrado a mano. Estoy trabajando horas nocturnas para compensarlo.'
			},
			{
				id: 'msg_c_5',
				threadId: 'chat_cfo',
				authorId: 'CFO',
				timestamp: '2026-09-04T16:15:00',
				dateLabel: '04 Sep',
				timeLabel: '16:15',
				text: 'Entiendo los imprevistos técnicos, pero tu rol de liderazgo exige previsibilidad. El directorio no autorizará bonificaciones trimestrales para ningún área que muestre desvíos en entregas críticas.'
			},
			{
				id: 'msg_c_6',
				threadId: 'chat_cfo',
				authorId: 'CFO',
				timestamp: '2026-09-11T11:10:00',
				dateLabel: '11 Sep',
				timeLabel: '11:10',
				text: 'Gabriel: Hoy tuvimos caída de servicio durante la ventana de conciliación y no estuviste disponible en Slack ni atendiste el teléfono de guardia durante 45 minutos.'
			},
			{
				id: 'msg_c_7',
				threadId: 'chat_cfo',
				authorId: 'FRIEND',
				timestamp: '2026-09-11T12:02:00',
				dateLabel: '11 Sep',
				timeLabel: '12:02',
				text: 'Tuve una emergencia familiar imprevista en la clínica con mi hija. Apenas entré restablecí los pods caídos. Pido disculpas formales.'
			},
			{
				id: 'msg_c_8',
				threadId: 'chat_cfo',
				authorId: 'CFO',
				timestamp: '2026-09-11T12:20:00',
				dateLabel: '11 Sep',
				timeLabel: '12:20',
				text: 'Lamento la situación personal, pero no podemos sostener este nivel de fragilidad operativa en una infraestructura de la que depende la facturación de toda la compañía. Te he dejado convocado un PIP formal (Plan de Mejora de Rendimiento) en tu correo. Espero tu firma hoy mismo.'
			},
			{
				id: 'msg_c_9',
				threadId: 'chat_cfo',
				authorId: 'CFO',
				timestamp: '2026-09-16T17:40:00',
				dateLabel: '16 Sep',
				timeLabel: '17:40',
				text: 'Gabriel: Auditoría de Sistemas detectó peticiones anómalas de lectura masiva sobre la base de réplica de tesorería originadas con tu clave de infraestructura. Necesito una justificación técnica inmediata.'
			},
			{
				id: 'msg_c_10',
				threadId: 'chat_cfo',
				authorId: 'CFO',
				timestamp: '2026-09-18T09:14:00',
				dateLabel: '18 Sep',
				timeLabel: '09:14',
				text: 'Gabriel: El plazo límite para presentarte con Recursos Humanos y Legal era hoy a las 09:00 AM. Al no haber concurrido ni justificado tu ausencia, se procederá conforme a derecho.'
			}
		]
	},
	{
		id: 'chat_wife',
		title: 'Elena (Esposa)',
		subtitle: '@elena_m • WhatsApp',
		participantIds: ['WIFE', 'FRIEND'],
		lastMessagePreview: 'Gabi por favor atendeme. Sofi no para de llorar preguntando dónde estás.',
		lastTimestamp: '18 Sep, 23:44',
		unread: true,
		category: 'family',
		messages: [
			{
				id: 'msg_w_1',
				threadId: 'chat_wife',
				authorId: 'WIFE',
				timestamp: '2026-08-27T17:10:00',
				dateLabel: '27 Ago',
				timeLabel: '17:10',
				text: 'Amor acordate de pasar por la farmacia antes que cierre. El jarabe de Sofi y los pañales que quedaron en promo.'
			},
			{
				id: 'msg_w_2',
				threadId: 'chat_wife',
				authorId: 'FRIEND',
				timestamp: '2026-08-27T17:25:00',
				dateLabel: '27 Ago',
				timeLabel: '17:25',
				text: 'Sí mi vida, salgo de la oficina en 40 min y compro todo. Un beso enorme a la gorda ❤️'
			},
			{
				id: 'msg_w_3',
				threadId: 'chat_wife',
				authorId: 'WIFE',
				timestamp: '2026-08-30T19:40:00',
				dateLabel: '30 Ago',
				timeLabel: '19:40',
				text: 'Llegó la carta del colegio. Aumentan la cuota un 35% a partir del mes que viene y hay que pagar la matrícula de reinscripción antes del 10. Son casi 400 mil pesos entre las dos cosas...'
			},
			{
				id: 'msg_w_4',
				threadId: 'chat_wife',
				authorId: 'FRIEND',
				timestamp: '2026-08-30T20:05:00',
				dateLabel: '30 Ago',
				timeLabel: '20:05',
				text: 'Tranquila amor, en septiembre me liquidan el bono trimestral de proyectos en la empresa. Eso cubre el colegio y nos deja margen. No te angusties.'
			},
			{
				id: 'msg_w_5',
				threadId: 'chat_wife',
				authorId: 'WIFE',
				timestamp: '2026-09-05T13:12:00',
				dateLabel: '05 Sep',
				timeLabel: '13:12',
				text: 'Gabriel, me rechazaron la tarjeta de débito en el supermercado con el carrito lleno. Pasé la peor humillación de mi vida adelante de toda la fila con Sofía a upa.'
			},
			{
				id: 'msg_w_6',
				threadId: 'chat_wife',
				authorId: 'WIFE',
				timestamp: '2026-09-05T13:14:00',
				dateLabel: '05 Sep',
				timeLabel: '13:14',
				text: '¿Qué pasó con los fondos de la cuenta común? ¿A dónde se fue la plata?'
			},
			{
				id: 'msg_w_7',
				threadId: 'chat_wife',
				authorId: 'FRIEND',
				timestamp: '2026-09-05T13:30:00',
				dateLabel: '05 Sep',
				timeLabel: '13:30',
				text: 'Elena, te juro que tuve que saldar el adelanto del taller mecánico y la cuota de la tarjeta corporativa que me descontaron directo. Esta tarde paso por el cajero y te deposito en mano.'
			},
			{
				id: 'msg_w_8',
				threadId: 'chat_wife',
				authorId: 'WIFE',
				timestamp: '2026-09-09T21:18:00',
				dateLabel: '09 Sep',
				timeLabel: '21:18',
				text: 'Abrí el resumen de la cuenta que llegó por correo. ¿Sacaste un crédito personal en el banco por 5.000 dólares? ¿Sin decirme una sola palabra Gabriel?'
			},
			{
				id: 'msg_w_9',
				threadId: 'chat_wife',
				authorId: 'FRIEND',
				timestamp: '2026-09-09T21:40:00',
				dateLabel: '09 Sep',
				timeLabel: '21:40',
				text: 'Era para consolidar las deudas que veníamos arrastrando desde el año pasado antes de que nos metieran en el Veraz. ¿Qué querías que hiciera? ¿Que nos embarguen el sueldo?'
			},
			{
				id: 'msg_w_10',
				threadId: 'chat_wife',
				authorId: 'FRIEND',
				timestamp: '2026-09-09T21:42:00',
				dateLabel: '09 Sep',
				timeLabel: '21:42',
				text: 'Trabajo 14 horas al día pegado a la pantalla para que tengan techo y comida y lo único que hacés es fiscalizarme como si fuera un delincuente.'
			},
			{
				id: 'msg_w_11',
				threadId: 'chat_wife',
				authorId: 'WIFE',
				timestamp: '2026-09-09T21:55:00',
				dateLabel: '09 Sep',
				timeLabel: '21:55',
				text: 'No te pido lujos Gabriel, te pido que seas honesto. Vivís encerrado con la computadora cerrada con llave, dormís 3 horas por día y estás irreconocible. Sofía te tiene miedo cuando levantás la voz.'
			},
			{
				id: 'msg_w_12',
				threadId: 'chat_wife',
				authorId: 'WIFE',
				timestamp: '2026-09-14T18:00:00',
				dateLabel: '14 Sep',
				timeLabel: '18:00',
				text: 'Mi mamá me dijo que nos vayamos a su casa con la nena unos días. Yo no puedo seguir así. No sé en qué te metiste ni qué estás haciendo.'
			},
			{
				id: 'msg_w_13',
				threadId: 'chat_wife',
				authorId: 'FRIEND',
				timestamp: '2026-09-14T18:25:00',
				dateLabel: '14 Sep',
				timeLabel: '18:25',
				text: 'No te vas a ningún lado con mi hija. No metas a tu madre en mi casa. Lo tengo todo calculado Elena. Dame hasta el viernes. Te prometo que después del viernes esto se terminó para siempre. Vamos a estar bien.'
			},
			{
				id: 'msg_w_14',
				threadId: 'chat_wife',
				authorId: 'WIFE',
				timestamp: '2026-09-18T23:44:00',
				dateLabel: '18 Sep',
				timeLabel: '23:44',
				text: 'Gabi por favor atendeme. Sofi no para de llorar preguntando dónde estás. No te encontré en la oficina ni en lo de tus viejos. Atendé el teléfono Gabriel te lo suplico.'
			}
		]
	},
	{
		id: 'chat_group',
		title: 'Los de Siempre (Grupo)',
		subtitle: 'Gabriel, Tito, Nico, Vektor • Telegram',
		participantIds: ['FRIEND', 'STREET_FRIEND_A', 'STREET_FRIEND_B', 'CYBER_FRIEND'],
		lastMessagePreview: 'Vektor: Borren los chats de este grupo. No me escriban más por acá.',
		lastTimestamp: '19 Sep, 03:52',
		unread: true,
		category: 'group',
		messages: [
			{
				id: 'msg_g_1',
				threadId: 'chat_group',
				authorId: 'STREET_FRIEND_A',
				timestamp: '2026-08-31T20:10:00',
				dateLabel: '31 Ago',
				timeLabel: '20:10',
				text: 'quien sale el sabado al asador de quilmes? hay que poner 15k cada uno'
			},
			{
				id: 'msg_g_2',
				threadId: 'chat_group',
				authorId: 'STREET_FRIEND_B',
				timestamp: '2026-08-31T20:14:00',
				dateLabel: '31 Ago',
				timeLabel: '20:14',
				text: 'yo voy de una. @gabi_v venis o seguis de esclavo corporativo?'
			},
			{
				id: 'msg_g_3',
				threadId: 'chat_group',
				authorId: 'FRIEND',
				timestamp: '2026-08-31T20:22:00',
				dateLabel: '31 Ago',
				timeLabel: '20:22',
				text: 'jajaja si me dejan desconectar el server 2 horas voy, sino me conecto desde la parrilla'
			},
			{
				id: 'msg_g_4',
				threadId: 'chat_group',
				authorId: 'CYBER_FRIEND',
				timestamp: '2026-09-03T23:10:00',
				dateLabel: '03 Sep',
				timeLabel: '23:10',
				text: 'veo a medio grupo llorando por dos pesos con cincuenta mientras hay pibes de 20 años levantando 30k verdes por semana moviendo bytes de un nodo a otro'
			},
			{
				id: 'msg_g_5',
				threadId: 'chat_group',
				authorId: 'STREET_FRIEND_A',
				timestamp: '2026-09-03T23:14:00',
				dateLabel: '03 Sep',
				timeLabel: '23:14',
				text: 'si pero vos estas en la cueva vektor jaja nosotros tenemos dni y afip encima'
			},
			{
				id: 'msg_g_6',
				threadId: 'chat_group',
				authorId: 'CYBER_FRIEND',
				timestamp: '2026-09-03T23:18:00',
				dateLabel: '03 Sep',
				timeLabel: '23:18',
				text: '@gabi_v sabe de lo que hablo. Tenés acceso a claves de infra que en los foros de arbitraje cotizan como lingotes de oro. Vos trabajas para que tu jefe ande en Audi y vos cuentes monedas en el chino.'
			},
			{
				id: 'msg_g_7',
				threadId: 'chat_group',
				authorId: 'FRIEND',
				timestamp: '2026-09-03T23:25:00',
				dateLabel: '03 Sep',
				timeLabel: '23:25',
				text: 'No delires Vektor. Esas cosas tienen auditorías SIEM y trazabilidad estricta. Te meten 6 años de cárcel federal sin pestañear.'
			},
			{
				id: 'msg_g_8',
				threadId: 'chat_group',
				authorId: 'CYBER_FRIEND',
				timestamp: '2026-09-03T23:30:00',
				dateLabel: '03 Sep',
				timeLabel: '23:30',
				text: 'Trazabilidad tienen los giles que entran por VPN corporativa con su nombre y apellido. Con tunnels anidados en routers zombificados y un script de volcado directo a memoria no hay log que sobreviva al reinicio del contenedor. Vos lo sabés mejor que yo.'
			},
			{
				id: 'msg_g_9',
				threadId: 'chat_group',
				authorId: 'CYBER_FRIEND',
				timestamp: '2026-09-07T01:40:00',
				dateLabel: '07 Sep',
				timeLabel: '01:40',
				text: 'La mesa de dinero de Paraguay paga 22.000 USDT cash por el dump de endpoints de compensación de las transferencias batch de la semana que viene. Solo el dump de estructura y credenciales de servicio. Ni siquiera tocas los fondos vos.'
			},
			{
				id: 'msg_g_10',
				threadId: 'chat_group',
				authorId: 'STREET_FRIEND_B',
				timestamp: '2026-09-07T01:45:00',
				dateLabel: '07 Sep',
				timeLabel: '01:45',
				text: '22 lucas verdes? con eso compras medio taller de chapa lpm'
			},
			{
				id: 'msg_g_11',
				threadId: 'chat_group',
				authorId: 'FRIEND',
				timestamp: '2026-09-07T02:11:00',
				dateLabel: '07 Sep',
				timeLabel: '02:11',
				text: 'Vektor, háblame por privado.'
			},
			{
				id: 'msg_g_12',
				threadId: 'chat_group',
				authorId: 'FRIEND',
				timestamp: '2026-09-12T02:44:00',
				dateLabel: '12 Sep',
				timeLabel: '02:44',
				text: 'Estuve revisando la topología de la base de replicación. El backup nocturno corre a las 03:00 am los jueves. El proceso de auditoría no corre el hash de integridad hasta las 08:00 am.'
			},
			{
				id: 'msg_g_13',
				threadId: 'chat_group',
				authorId: 'CYBER_FRIEND',
				timestamp: '2026-09-12T02:50:00',
				dateLabel: '12 Sep',
				timeLabel: '02:50',
				text: 'Tenés una ventana de cinco horas limpia. ¿Podés montar el proxy reverso sin dejar rastro en el gateway perimetral?'
			},
			{
				id: 'msg_g_14',
				threadId: 'chat_group',
				authorId: 'FRIEND',
				timestamp: '2026-09-12T03:02:00',
				dateLabel: '12 Sep',
				timeLabel: '03:02',
				text: 'Si empaqueto el binario con un certificado autofirmado dentro de la imagen docker de mantenimiento nadie lo ve. Pero necesito la garantía del pago en el drop apenas verifiquen la muestra.'
			},
			{
				id: 'msg_g_15',
				threadId: 'chat_group',
				authorId: 'STREET_FRIEND_A',
				timestamp: '2026-09-12T03:15:00',
				dateLabel: '12 Sep',
				timeLabel: '03:15',
				text: 'guacho si te metes en esa no aflojes a mitad de camino. hacela corta y borrate'
			},
			{
				id: 'msg_g_16',
				threadId: 'chat_group',
				authorId: 'FRIEND',
				timestamp: '2026-09-16T02:15:00',
				dateLabel: '16 Sep',
				timeLabel: '02:15',
				text: 'Tengo los túneles activos y la muestra extraída. Quedó seteado para ejecutarse el jueves a la madrugada.'
			},
			{
				id: 'msg_g_17',
				threadId: 'chat_group',
				authorId: 'FRIEND',
				timestamp: '2026-09-16T02:18:00',
				dateLabel: '16 Sep',
				timeLabel: '02:18',
				text: 'No hay marcha atrás.'
			},
			{
				id: 'msg_g_18',
				threadId: 'chat_group',
				authorId: 'STREET_FRIEND_B',
				timestamp: '2026-09-19T01:30:00',
				dateLabel: '19 Sep',
				timeLabel: '01:30',
				text: 'che alguno sabe algo de gabriel? fui a la casa hoy tipo 20hs y no habia nadie, el auto de el no esta y el celular da apagado'
			},
			{
				id: 'msg_g_19',
				threadId: 'chat_group',
				authorId: 'CYBER_FRIEND',
				timestamp: '2026-09-19T03:52:00',
				dateLabel: '19 Sep',
				timeLabel: '03:52',
				text: 'Borren los chats de este grupo YA. Borren cualquier archivo o link que hayan descargado. No me vuelvan a escribir por acá.'
			}
		]
	}
];
