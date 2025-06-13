
def getRedistributedLoad(serverCapacity, serverLoad):
  n = len(serverCapacity)

  # [(6, 2), (5, 1), (4, 0)]
  capacity_with_index = sorted([
    (val, idx) for idx, val in enumerate(serverCapacity)
  ], reverse=True)
  print(capacity_with_index)

  # [1, 2, 3]
  sorted_server_load = sorted(serverLoad)

  # [0, 0, 0]
  result = [0] * n

  for i in range(n):
    _cap, idx = capacity_with_index[i]
    result[idx] = sorted_server_load[i]

  return result

if __name__ == "__main__":
  serverCapacity = [4, 5, 6]
  serverLoad = [1, 2, 3]

  optimizedLoad = getRedistributedLoad(serverCapacity, serverLoad)

  print("Optimized Load Distribution:", optimizedLoad)
