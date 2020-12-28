f = open("Day10.txt", "r")
inp = f.read().split("\n")
desired_array = [int(numeric_string) for numeric_string in inp]
desired_array.append(0)
desired_array.sort()
desired_array.append(desired_array[-1]+3)
print(desired_array)


def Day10(input):
    result = [0, 0, 0]
    for i in range(len(input) - 1):
        if desired_array[i + 1] - desired_array[i] == 1:
            result[0] += 1
        elif desired_array[i + 1] - desired_array[i] == 2:
            result[1] += 1
        else:
            result[2] += 1
    print(result)


Day10(desired_array)
