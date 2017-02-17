run:
	@echo "NOTE: Make this useful.\n" 
	@echo "Available commands:"
	@echo "make host - to start a server locally at localhost:3000"
	@echo "\n"

host:
	@echo "Starting the server..."
	@node app.js
	@echo "Done!"

