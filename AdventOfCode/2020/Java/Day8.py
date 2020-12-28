f = open("Day8.txt", "r")
inp = f.read().split("\n")



def Day8(input):
    acc = 0
    usedInstruc = []
    x = 0
    while not (x in usedInstruc):
        instru = input[x]
        if instru.find("nop") != -1:
            usedInstruc.append(x)
            x += 1
        elif instru.find("acc") == 0:
            usedInstruc.append(x)
            acc += eval(instru.split(" ")[1])
            x += 1
        elif instru.find("jmp") == 0:
            usedInstruc.append(x)
            x += eval(instru.split(" ")[1])
        if x == len(input):
            break



    # print(acc , x)
    # print(usedInstruc)
    return acc, x


def Day8_part2(input):
    test = input
    for i in range(len(test)):
        tmp = test[i]
        if test[i].find("nop") == 0:
            test[i] = test[i].replace("nop", "jmp")
        elif test[i].find("jmp") == 0:
            test[i] = test[i].replace("jmp", "nop")
        else :
            continue
        acc, x = Day8(test)
        test[i] = tmp
        if x == len(input):
            print(acc)
            break


Day8_part2(inp)
