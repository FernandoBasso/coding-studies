#include <stdio.h>

int main(int argc, char *argv[]) {
  // Read string param like ./hello "Hello, World!"
  if (argc > 1)
    fprintf(stdout, "%s\n", argv[1]);

  fprintf(stdout, "%s\n", "Hello, World!");

  return 0;
}
