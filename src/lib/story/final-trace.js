/** @type {import('./types').FinalTraceData} */
export const FINAL_TRACE = {
	id: 'final_trace_session',
	sessionDate: '2026-09-19',
	sessionTime: '03:14:18 UTC-3',
	duration: '01:47:22 (abrupt connection termination)',
	ipAddress: '190.19.144.112 (Movil Fibertel / nodo Puente Saavedra)',
	remoteHost: 'ws-infra-04.corp.internal',
	status: 'LOGOUT_EVENT_UNAVAILABLE — CONNECTION DROP',
	lastAction: 'shred -u -z /var/run/dockersock_tunnel.pid && kill -9 14892',
	unclosedSocket: 'ESTABLISHED tcp 190.19.144.112:54881 -> 185.220.101.44:8443 (FIN_WAIT_2)',
	unsentBuffer:
		'terminal bash session 14892 exited without SIGHUP handler. Staging database dump chunk 4/4 transferred (182 MB). Remote host unreachable since 05:01:40.'
};
