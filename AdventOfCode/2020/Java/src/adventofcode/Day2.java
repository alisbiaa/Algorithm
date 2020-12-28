package adventofcode;

import java.io.IOException;

public class Day2 {
    public static void main(String[] args) throws IOException {
        String str = new FileManager().readFile("Day2.txt");
        String[] arrOfString = str.split("\n");
        int l = arrOfString.length;
        int count = 0;

        for (int i = 0; i < l ; i++) {
            if (checkPassword(arrOfString[i])) count++;
        }
        System.out.println(count);
//        System.out.println(checkPassword(arrOfString[l-1]));
    }

    public static boolean checkPassword(String password) {
        String rep = password.split(" ")[0];
        char pol = password.split(" ")[1].charAt(0);
        char[] pwArr = password.split(" ")[2].toCharArray();
        int pos2 = Integer.parseInt(rep.split("-")[1]);
        int pos1 = Integer.parseInt(rep.split("-")[0]);
//        System.out.println(password);
//        System.out.println(min);
//        System.out.println(max);
//        System.out.println(pol);
//        System.out.println(Arrays.toString(pwArr));
        int count = 0;
        if (pol == pwArr[pos1-1]) count++;
        if (pol == pwArr[pos2-1]) count++;
        return (count==1);
    }

}
