##
# On the command line, run `make hello` first. Because it needs
# hello.o, that one will be run.
#
# This one actually runs last.
#
hello: hello.o
	gcc -std=c99 -Wall ./hello.c -o ./dist/hello

##
# But wait, hello.o requires hello.c to exist. So, this one will run
# second, and hello.c recipe will run first.
#
hello.o: hello.c
	mkdir -pv ./dist
	gcc -std=c99 -Wall -c ./hello.c -o ./dist/hello.o

##
# Runs first because hello.o needs hello.c.
#
hello.c:
	printf '%s\n' '#include <stdio.h>' 							1>  ./hello.c
	printf '\n' 																		1>> ./hello.c
	printf '%s\n' 'int main(void) {' 								1>> ./hello.c
	printf '%s\n' '  printf("Hello, World!\n");' 		1>> ./hello.c
	printf '%s\n' 																	1>> ./hello.c
	printf '%s\n' '  return 0;' 										1>> ./hello.c
	printf '%s\n' '}' 															1>> ./hello.c

clean:
	rm -rf ./hello.c ./dist/*
