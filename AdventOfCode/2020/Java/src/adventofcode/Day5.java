package adventofcode;

import java.io.IOException;
import java.util.Arrays;


public class Day5 {
    public static void main(String[] args) throws IOException {
        String str = new FileManager().readFile("Day5.txt");
        String[] arrOfString = str.split("\n");

        int maxId = 0;

       /* ----- For part 1
        for (String s : arrOfString) {
            maxId = Math.max(maxId, calculateID(s));
        }

        */

        /* ----- For part 2 : 14mn
        int[] listOfIDs = new int[arrOfString.length];
        for (int i = 0; i < arrOfString.length ; i++) {
            listOfIDs[i] = calculateID(arrOfString[i]);
        }
        Arrays.sort(listOfIDs);
        int myID = 0;
        for (int i = 0; i < listOfIDs.length -1 ; i++) {
            if (!(listOfIDs[i + 1] - listOfIDs[i] == 1)) myID = listOfIDs[i]+1;
        }
        System.out.println(myID);

         */
    }

    private static int calculateID(String s) {
        char[] arrOfChar = s.toCharArray();
        int lowRow = 0;
        int upperRow = 127;
        int lowColumn = 0;
        int upperColumn = 7;
        for (char c : arrOfChar) {
            if (c == 'F')
                upperRow -= ((upperRow - lowRow) / 2) + 1;
            else if (c == 'B')
                lowRow += ((upperRow - lowRow) / 2) + 1;

            if (c == 'L')
                upperColumn -= ((upperColumn- lowColumn) / 2) + 1;
            else if (c == 'R')
                lowColumn += ((upperColumn- lowColumn) / 2) + 1;
        }

        return lowRow * 8 + lowColumn;
    }
}
