import java.util.Scanner;
public class Ex30_FormValidation { public static void main(String[] args){try(Scanner input=new Scanner(System.in)){System.out.print("Name: ");String name=input.nextLine();System.out.println(name.isBlank()?"Name is required.":"Form is valid.");}} }
