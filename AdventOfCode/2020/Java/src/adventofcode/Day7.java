package adventofcode;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Day7 {
    public static void main(String[] args) throws IOException {
        String str = new FileManager().readFile("Day7.txt");
        String[] input = str.split("\n");
        List<String> allColors = getAllColors(input);
        System.out.println(allColors.indexOf("shiny gold"));
        System.out.println();

    }

    private static List<String> getAllColors(String[] arrOfString) {
        List<String> result = new ArrayList<>();
        for (String s : arrOfString) {
            if(result.contains(s)) continue; // in case there are duplications
            result.add(s.split(" bags contain ")[0]);
        }
        return result;
    }


}
