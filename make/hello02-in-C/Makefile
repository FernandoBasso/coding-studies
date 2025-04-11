##
# Run with:
#
# 	make hello
#
hello:
	gcc -std=c99 -Wall -pedantic ./hello.c -o ./hello

#
# If we change hello.c and run make hello again, it will say that hello
# is already up to date.
#

##
# msg is the target, and hello.c is the prerequisite. How, if we change
# hello.c and run make msg, it will re-compile and re-generate a new
# version of msg.
#
# Now, of the prerequsite hello.c was changed more recently than msg,
# then it will recompile.
#
msg: hello.c
	gcc -std=c99 -Wall -pedantic ./hello.c -o ./msg

clean:
	rm -rfv ./hello ./msg
