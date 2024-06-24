.PHONY: start stop dev

dev:
	npm run dev

start:
	cd .docker && docker-compose -f docker-compose.yml up -d

stop:
	cd .docker && docker-compose -f docker-compose.yml stop