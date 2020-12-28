package adventofcode;

import java.io.IOException;

public class Day1 {

    public static void main(String[] args) throws IOException {
        String str = new FileManager().readFile("Day1.txt");
        String[] arrOfString = str.split("\n");
        int[] arrOfInt = fromStringToInt(arrOfString);
//        System.out.println(Arrays.toString(arrOfInt));
        int l = arrOfInt.length;
        int x=0, y=0, z=0;

        for (int i = 0; i < l ; i++) {
            for (int j = 0; j < l; j++) {
                for (int k = 0; k < l ; k++) {
                    if(k==j || k==i) continue;
                    if (arrOfInt[i] + arrOfInt[j] + arrOfInt[k]== 2020) {
                        x = arrOfInt[i];
                        y = arrOfInt[j];
                        z = arrOfInt[k];
                    }
                }

            }
        }
        System.out.println(x);
        System.out.println(y);
        System.out.println(z);
    }

    public static int[] fromStringToInt(String[] arrOfString) {
        int l = arrOfString.length;
        int[] result = new int[l];
        for (int i = 0; i < l ; i++) {
            result[i] = Integer.parseInt(arrOfString[i]);
        }
        return result;
    }

}
