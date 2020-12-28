package adventofcode;

import java.io.IOException;

public class Day3 {
    public static void main(String[] args) throws IOException {
        String str = new FileManager().readFile("Day3.txt");
        String[] arrOfString = str.split("\n");
        int row = arrOfString.length;
        int column = arrOfString[0].length();
        int[][] matrix = new int[row][column];
        for (int i = 0; i <row ; i++) {
            for (int j = 0; j <column ; j++) {
                if(arrOfString[i].charAt(j)=='.') matrix[i][j] = 0;
                else matrix[i][j] = 1;
            }
        }
        int count = 0;
        int right = 1 ;
        int down = 2 ;
        for (int i = down, j=right; i <row ; i+=down) {
            if(matrix[i][j] == 1)
                count++;
            if(j + right >= column)
                j = j + right - column;
            else
                j += right;
        }
        System.out.println(count);


//        Right 1, down 1.  : 78
//        Right 3, down 1.  : 262
//        Right 5, down 1.  : 66
//        Right 7, down 1.  : 69
//        Right 1, down 2.  : 29
    }
}
