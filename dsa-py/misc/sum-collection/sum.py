def sum(xs):
  acc = 0
  for x in xs:
    acc += x

  return acc

if __name__ == "__main__":
  print(sum([1, 2, 3]))
