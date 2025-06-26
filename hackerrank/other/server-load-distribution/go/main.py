def getRedistributedLoad(serverCapacity, serverLoad):
  n = len(serverCapacity)

  capacity_with_index = sorted([
    (val, idx) for idx, val in enumerate(serverCapacity)
  ], reverse=True)
  print("desc capacity with index:", capacity_with_index)

  sorted_server_load = sorted(serverLoad)
  print("asc server load:", sorted_server_load)

  result = [0] * n

  for i in range(n):
    _cap, idx = capacity_with_index[i]
    print(i, idx)
    result[idx] = sorted_server_load[i]

  return result

if __name__ == "__main__":
  serverCapacity = [4, 5, 6]
  serverLoad = [1, 2, 3]

  optimizedLoad = getRedistributedLoad(serverCapacity, serverLoad)

  print("Optimized:", optimizedLoad)
  # [3, 2, 1]
