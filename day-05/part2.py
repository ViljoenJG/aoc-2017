with open('./input.txt') as infile:
    jumps = [int(i.rstrip('\n')) for i in infile.readlines()]
    steps = 0
    idx = 0

    while idx < (len(jumps)):
        step = jumps[idx]
        if step >= 3:
            jumps[idx] -= 1
        else:
            jumps[idx] += 1

        idx += step
        steps += 1

    print(steps)
