export const mockPlugin = (enable) => ({
	name: 'mock-plugin',
	configureServer(server) {
		server.middlewares.use((req, res, next) => {
			enable && (req.locals = { next });
			next();
		})
	},
})