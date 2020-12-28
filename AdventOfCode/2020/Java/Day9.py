f = open("Day9.txt", "r")
inp = f.read().split("\n")
desired_array = [int(numeric_string) for numeric_string in inp]


def Day9(input):
    verif = True
    result = 0
    start = 0
    while verif:
        verif, result = checkSequence(input[start:start + 26])
        start += 1
    return result


def Day9_part2(input):
    invalidNum = Day9(input)
    print(invalidNum)
    x = 0
    while True:
        sum = 0
        for i in range(x, len(input)):
            if i == input.index(invalidNum):
                print("hi")
                continue
            sum += input[i]
            if sum > invalidNum:
                break
            if sum == invalidNum:
                return max(input[x:i]) + min(input[x:i])
        x += 1


def checkSequence(sequence):
    # print(sequence)
    result = False
    tester = sequence[-1]
    for i in range(len(sequence) - 1):
        for j in range(len(sequence) - 1):
            if j == i:
                continue
            if sequence[i] + sequence[j] == tester:
                result = True
                break
    return result, tester


print(Day9_part2(desired_array))
