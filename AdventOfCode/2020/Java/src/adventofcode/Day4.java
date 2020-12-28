package adventofcode;

import java.io.*;
import java.text.Normalizer;
import java.util.*;
import java.util.regex.Pattern;


public class Day4 {

    public static void main(String[] args) throws IOException {
        String str = new FileManager().readFile("Day4.txt");
        int count = 0;
        String[] arrOfString = str.split("\n\n");

        for (String s : arrOfString) {
            if (checkPassport(s)) count++;
        }
        System.out.println(count);
    }

    private static boolean checkPassport(String passport) {
        String[] splited = passport.split("\\s+");
        if (splited.length==8)  return checkPassportValidity(splited);
        else if (splited.length<7) return false;
        else
            for (String s : splited) {
                String substr = s.substring(0, 3);
                if (substr.equals("cid")) return false;
            }
        return checkPassportValidity(splited);
    }

    private static boolean checkPassportValidity(String[] passport) {
        boolean result = true;
        for (String s : passport) {
            String substr = s.substring(0, 3);
            switch (substr) {
                // checking : byr (Birth Year) - four digits; at least 1920 and at most 2002.
                // byr valid:   byr:1980
                // byr invalid: byr:1926
                case "byr" -> {
                    int fourDigits = Integer.parseInt(s.split(":")[1]);
                    if (!(fourDigits >= 1920 && fourDigits <= 2002))
                        result = false;
                }
                // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
                case "iyr" -> {
                    int fourDigits = Integer.parseInt(s.split(":")[1]);
                    if (!(fourDigits >= 2010 && fourDigits <= 2020))
                        result = false;
                }
                // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
                case "eyr" -> {
                    int fourDigits = Integer.parseInt(s.split(":")[1]);
                    if (!(fourDigits >= 2020 && fourDigits <= 2030))
                        result = false;

                }
                // hgt (Height) - a number followed by either cm or in:
                // If cm, the number must be at least 150 and at most 193.
                // If in, the number must be at least 59 and at most 76.
                // hgt valid:   hgt:60in
                // hgt valid:   hgt:190cm
                // hgt invalid: hgt:190in
                // hgt invalid: hgt:190
                case "hgt" -> {
                    // ------- Getting the "190cm" part
                    String verifPart = s.split(":")[1];
                    String filter = Normalizer.normalize(verifPart, Normalizer.Form.NFD);

                    // ------- Separating unit from value
                    String unit = filter.replaceAll("[^a-zA-Z]", "");
                    int value = Integer.parseInt(filter.replaceAll("[^0-9]", ""));

                    // ------- Checking input
                    if (unit.equals("in")) {
                        if (!(value >= 59 && value <= 76))
                            result = false;
                    } else if (unit.equals("cm")) {
                        if (!(value >= 150 && value <= 193))
                            result = false;
                    } else
                        result = false;
                }
                // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
                // hcl valid:   hcl:#123abc
                // hcl invalid: hcl:#123abz
                // hcl invalid: hcl:123abc
                case "hcl" -> {
                    // ------- Check the color format
                    String verifPart = s.split(":")[1];
                    if (!Pattern.matches("[#][0-9a-zA-Z]{6}", verifPart))
                        result = false;
                }
                // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
                // ecl valid:   ecl:brn
                // ecl invalid: ecl:wat
                case "ecl" -> {
                    ArrayList<String> colors = new ArrayList<>(Arrays.asList("amb", "blu", "brn", "gry", "hzl", "oth","grn"));
                    String verifPart = s.split(":")[1];
                    if (!colors.contains(verifPart))
                        result = false;
                }
                // pid (Passport ID) - a nine-digit number, including leading zeroes.
                // pid valid:   000000001
                // pid invalid: 0123456789
                case "pid" -> {
                    String verifPart = s.split(":")[1];
                    if (!Pattern.matches("[0-9]{9}", verifPart))
                        result = false;
                }
            }
        }
        return result;
    }


}
