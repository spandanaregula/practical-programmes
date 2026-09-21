import java.util.Scanner;
public class Ex33_Quiz { public static void main(String[] args){try(Scanner input=new Scanner(System.in)){System.out.print("Which language structures a webpage? ");System.out.println(input.nextLine().equalsIgnoreCase("HTML")?"Correct!":"Try again.");}} }
