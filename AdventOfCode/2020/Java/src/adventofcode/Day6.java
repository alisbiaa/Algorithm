package adventofcode;

import java.io.IOException;


public class Day6 {

    public static void main(String[] args) throws IOException {
        String str = new FileManager().readFile("Day6.txt");
        String[] arrOfString = str.split("\n\n");
        int sum = 0;
        for (String form : arrOfString) {
            sum += calcAnswers(form);
        }
        // Part 1 in 17mn 09s
        System.out.println(sum);
        System.out.println(calcAnswers("abc"));
    }
    private static int calcAnswers(String form) {
        /* --------- Part one
       ---------------- the questions to which anyone answered "yes"
        char[] answers = form.toCharArray();
        ArrayList<Character> distincAnswers = new ArrayList<>();
        for (char c : answers) {
            if(Character.isLetter(c)  && !distincAnswers.contains(c))
                distincAnswers.add(c);
        }
        return distincAnswers.size();
         */
        // the questions to which everyone answered "yes"

        // PART 2 One of the hardest so far. Took me 41mn
        /*
        I took the shortest list of answers and I check if every answer belonging to this list exist in the others
         */
        int count = 0;
        String[] answers = form.split("\n");
        String shortestAnswer = findShortestAnswer(answers);
        char[] reference = shortestAnswer.toCharArray();
        for (char c : reference) {
            boolean exist = true;
            for (String answer : answers) {
                if (!contains(answer.toCharArray(), c)) {
                    exist = false;
                    break;
                }
            }
            if (exist) count++;
        }
        return count;
    }
    private static String findShortestAnswer(String[] answers) {
        int index = 0;
        int len = 27;

        for (int i = 0; i < answers.length; i++) {
            if (len > answers[i].length()) {
                index = i;
                len = answers[i].length();
            }
        }
        return answers[index];
    }
    private static boolean contains(final char[] array, final char v) {

        boolean result = false;

        for(char i : array){
            if(i == v){
                result = true;
                break;
            }
        }
        return result;
    }

}
