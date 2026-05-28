#include <stdio.h>
#include <stdlib.h>

#define NUM_ARGS 3

int main(int argc, char *argv[]) {
  if (argc == NUM_ARGS)
    fprintf(stdout, "%s\n\n%s\n", *(argv + 1), argv[2]);

  fprintf(stdout, "%s\n", "Hello, World!");

  return EXIT_SUCCESS;
}
