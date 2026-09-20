/** @type {import('./types').FinalTraceData} */
export const FINAL_TRACE = {
	id: 'final_trace_session',
	sessionDate: '2026-09-17',
	sessionTime: '03:14:18 UTC-3',
	duration: '01:47:22 (registro incompleto)',
	ipAddress: '190.19.144.112 (último origen registrado; no verificado)',
	remoteHost: 'ws-infra-04.corp.internal',
	status: 'LOGOUT_EVENT_UNAVAILABLE — SESSION RECORD INCOMPLETE',
	lastAction: 'kill -9 14892',
	unclosedSocket:
		'ESTABLISHED tcp [local]:54881 -> 185.220.101.44:8443 (estado final no registrado)',
	unsentBuffer:
		'terminal bash session 14892 ended without a complete shutdown record. Staging dump chunk 4/4 was prepared locally (182 MB). Remote acknowledgement is missing; transfer completion could not be verified.'
};
