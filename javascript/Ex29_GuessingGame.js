import java.util.Scanner;
public class Ex29_GuessingGame { public static void main(String[] args){try(Scanner input=new Scanner(System.in)){int target=7;System.out.print("Guess 1 to 10: ");System.out.println(input.nextInt()==target?"Correct!":"Try again.");}} }
