import java.util.Scanner;
public class Ex46_ResponsiveLogin { public static void main(String[] args){try(Scanner input=new Scanner(System.in)){String email=input.nextLine(),password=input.nextLine();boolean valid=email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")&&password.length()>=8;System.out.println(valid?"Welcome back!":"Invalid login details.");}} }
